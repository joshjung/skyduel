module.exports = function(app) {
  return new SkyDuelHandler(app);
};

var SkyDuelHandler = function(app) {
  this.app = app;
};

SkyDuelHandler.prototype.enter = function(msg, session, next) {
  var self = this;
  var rid = msg.rid;
  var uid = msg.username + '*' + rid
  var sessionService = self.app.get('sessionService');

  //duplicate log in
  if (!!sessionService.getByUid(uid)) {
    next(null, {
      code: 500,
      error: true
    });
    return;
  }

  session.bind(uid);
  session.set('rid', rid);
  session.push('rid', function(err) {
    if (err) {
      console.error('set rid for session service failed! error is : %j', err.stack);
    }
  });
  session.on('closed', onUserLeave.bind(null, self.app));

  //put user into channel
  self.app.rpc.skyduel.skyduelRemote.add(session, uid, self.app.get('serverId'), rid, true, function(users) {
    next(null, {
      users: users
    });
  });
};

var onUserLeave = function(app, session) {
  if (!session || !session.uid) {
    return;
  }
  app.rpc.skyduel.skyduelRemote.kick(session, session.uid, app.get('serverId'), session.get('rid'), null);
};