var chatRemote = require('../remote/skyduelRemote'),
  SkyDuelController = require('../../../../../shared/js/skyDuelController');

module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};

var handler = Handler.prototype;

handler.start = function (msg, session, next) {
  this.rid = msg.rid;

  if (!this.controller){
    console.log('new controller');
    this.controller = new SkyDuelController();
    this.controller.startServer(this, session);
  }

  this.controller.addPlayer(session);

  next(null, {code: 200, uid: session.uid});
};

handler.update = function (msg, session, next) {
  if (msg.type == 'plane' && this.controller)
  {
    if (this.controller.players.has(session.uid))
    {
      this.controller.players.get(session.uid).input = msg.data;
    }
  }

  next(null, {code: 200});
};

handler.send = function(msg, session, next) {
  var rid = session.get('rid'),
    username = session.uid.split('*')[0],
    channelService = this.app.get('channelService'),
    param = {
      msg: msg.content,
      from: username,
      target: msg.target
    };
  
  channel = channelService.getChannel(rid, false);

  if(msg.target == '*') {
    channel.pushMessage('onChat', param);
  }
  else {
    var tuid = msg.target + '*' + rid,
      tsid = channel.getMember(tuid)['sid'];

    channelService.pushMessageByUids('onChat', param, [{
      uid: tuid,
      sid: tsid
    }]);
  }

  next(null, {route: msg.route});
};