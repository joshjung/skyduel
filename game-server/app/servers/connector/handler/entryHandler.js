var EntryHandler = function(app) {
  this.app = app;
};

EntryHandler.prototype = {
  enter: function(msg, session, next) {
    var self = this,
      rid = msg.rid,
      uid = msg.username + '*' + rid,
      sessionService = self.app.get('sessionService');

    //duplicate log in
    if (!!sessionService.getByUid(uid))
      return next(null, {
        code: 500,
        error: true,
        errorText: 'Username already exists:' + uid
      });

    session.bind(uid);

    session.set('rid', rid);

    session.push('rid', function(err) {
      if (err)
        console.error('set rid for session service failed! error is : %j', err.stack);
    });
    
    session.on('closed', this.session_closedHandler.bind(this, this.app));

    this.app.rpc.skyduel.skyduelRemote.add(session, uid, self.app.get('serverId'), rid, true, this.skyduelRemote_addCallback.bind(this, next));
  },
  skyduelRemote_addCallback: function (next, users) {
    next(null, {
      users: users
    });
  },
  session_closedHandler: function (app, session) {
    if (!session || !session.uid)
      return;

    app.rpc.skyduel.skyduelRemote.kick(session, session.uid, app.get('serverId'), session.get('rid'), null);
  }
};

module.exports = function(app) {
  return new EntryHandler(app);
};