var chatRemote = require('../remote/skyduelRemote');
var gameFPS = 30,
  updateInterval = 5,
  DegRadRatio = Math.PI/180,
  plane = {
    Left: -5,
    Right: 5,
    None: 0,
    Accelerate: 1,
    Decelerate: -1
  };

module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
  this.player = {
    x: 400,
    y: 400,
    angle: 45,
    velocity:6,
    'changeVelocity': function (delta) {
      this.velocity += delta;

      if (this.velocity > 50) {
        this.velocity = 50;
      }
      else if (this.velocity < 3) {
        this.velocity = 3;
      }
    }
  }
  this.canvas = {
    width: 800,
    height: 800
  };

  this.turnDelta = 0;
  this.speedDelta = 0;

  console.log('skyduel connection initiated');

  this.fpsIntervalHandler = (function () {
    this._update();
  }).bind(this);

  this.clientUpdateIntervalHandler = (function () {
    this.updateClients();
  }).bind(this);

  setInterval(this.fpsIntervalHandler, 1000/gameFPS);
  setInterval(this.clientUpdateIntervalHandler, 1000/updateInterval);
};

var handler = Handler.prototype;

handler.handleScreenWrap = function(){
  if(this.player.x < 0) {
    this.player.x = this.canvas.width;
  }
  if(this.player.x > this.canvas.width) {
    this.player.x = this.player.x % this.canvas.width;
  }
  if(this.player.y < 0) {
    this.player.y = this.canvas.height;
  }
  if(this.player.y > this.canvas.height) {
    this.player.y = this.player.y % this.canvas.height;
  }
};

handler.updateClients = function () {
  if (this.rid)
    this.app.get('channelService').getChannel(this.rid, false).pushMessage('onUpdate', this.player);
};

handler.start = function (msg, session, next) {
  this.session = session;
  this.rid = msg.rid;

  next();
};

handler._update = function() {
  this.player.y += Math.round(Math.sin((this.player.angle) * DegRadRatio) * this.player.velocity);
  this.player.x += Math.round(Math.cos(this.player.angle * DegRadRatio) * this.player.velocity);

  this.player.angle += this.turnDelta;

  this.player.changeVelocity(this.speedDelta);

  this.handleScreenWrap();
};

handler.update = function (msg, session, next) {
  console.log('MSG', msg);

  if (msg.type == 'keydown')
  {
    switch (msg.data) {
      case 65: //Turn left
        this.turnDelta = plane.Left;
        break;
      case 68: //Turn right
        this.turnDelta = plane.Right;
        break;
      case 83: //Slow Down or D
        this.speedDelta = plane.Decelerate;
        break;
      case 87: //Speed Up or W
        this.speedDelta = plane.Accelerate;
        break;
    }
  }
  else if (msg.type == 'keyup')
  {
    switch (msg.data) {
      case 65: //End Turn left
      case 68: //End Turn right
        this.turnDelta = plane.None;
        break;
      case 83: //Slow Down or D
      case 87: //Speed Up or W
        this.speedDelta = plane.None;
        break;
    }
  }

  next(null, {code: 200});
};

handler.send = function(msg, session, next) {
  var rid = session.get('rid');
  var username = session.uid.split('*')[0];
  var channelService = this.app.get('channelService');
  var param = {
    msg: msg.content,
    from: username,
    target: msg.target
  };
  
  channel = channelService.getChannel(rid, false);

  //the target is all users
  if(msg.target == '*') {
    channel.pushMessage('onChat', param);
  }
  //the target is specific user
  else {
    var tuid = msg.target + '*' + rid;
    var tsid = channel.getMember(tuid)['sid'];
    channelService.pushMessageByUids('onChat', param, [{
      uid: tuid,
      sid: tsid
    }]);
  }
  next(null, {
    route: msg.route
  });
};