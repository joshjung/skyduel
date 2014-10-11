module.exports = function(app) {
  return new EntryHandler(app);
};

var EntryHandler = function(app) {
  this.app = app;
};

EntryHandler.prototype.enter = function(msg, session, next) {
  var self = this,
    rid = msg.rid,
    uid = msg.username + '*' + rid,
    sessionService = self.app.get('sessionService');

  //duplicate log in
  if (!!sessionService.getByUid(uid))
    return next(null, {
      code: 500,
      error: true,
      errorText: 'Uid already exists:' + uid
    });

  session.bind(uid);

  session.set('rid', rid);

  session.push('rid', function(err) {
    if (err) {
      console.error('set rid for session service failed! error is : %j', err.stack);
    }
  });
  
  console.log(session);
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
  console.log(app.rpc.skyduel);
  if (app.rpc.skyduel.skyduelHandler)
    app.rpc.skyduel.skyduelHandler.end(app, session);
};