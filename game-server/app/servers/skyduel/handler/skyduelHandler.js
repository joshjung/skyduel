var skyduelRemote = require('../remote/skyduelRemote');

module.exports = function(app) {
  return new SkyDuelHandler(app);
};

var SkyDuelHandler = function(app) {
  this.app = app;
};

/**
 * Send messages to users
 *
 * @param {Object} msg message from client
 * @param {Object} session
 * @param  {Function} next next stemp callback
 */
SkyDuelHandler.prototype.send = function(msg, session, next) {
  var rid = session.get('rid'),
    username = session.uid.split('*')[0],
    channelService = this.app.get('channelService'),
    param = {
      msg: msg.content,
      from: username,
      target: msg.target
    };

  channel = channelService.getChannel(rid, false);

  //the target is all users
  if (msg.target == '*') {
    channel.pushMessage('onChat', param);
  }
  //the target is specific user
  else {
    var tuid = msg.target + '*' + rid,
      tsid = channel.getMember(tuid)['sid'];

    channelService.pushMessageByUids('onChat', param, [{
      uid: tuid,
      sid: tsid
    }]);
  }
  
  next(null, {
    route: msg.route
  });
};