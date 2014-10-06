var chatRemote = require('../remote/skyduelRemote'),
  skyDuelController = require('../../../../../shared/js/skyDuelController');

module.exports = function(app) {
  skyDuelController.start(this);

  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};

var handler = Handler.prototype;

handler.start = function (msg, session, next) {
  this.session = session;
  this.rid = msg.rid;

  next();
};

handler.update = function (msg, session, next) {
  console.log('MSG', msg);

  if (msg.type == 'plane')
  {
    skyDuelController.player.turnDelta = msg.turnDelta;
    skyDuelController.player.acceleration = msg.acceleration;
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