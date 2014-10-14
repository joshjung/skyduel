/*===================================================*\
 * SkyDuelHandler()
\*===================================================*/
var SkyDuelHandler = function(app) {
  this.app = app;
  this.server = app.get('skyduelServer');
  this.messaging = app.get('messagingService');
};

/*===================================================*\
 * prototype
\*===================================================*/
SkyDuelHandler.prototype = {
  /*========================*\
   * Client Interface
  \*========================*/
  ping: function (msg, session, next) {
    next(null, {code: 200});
  },
  start: function (msg, session, next) {
    this.server.app = this.app;
    this.server.rid = msg.rid;
    this.messaging.rid = msg.rid;

    this.server.addPlayerFor(session);  

    next(null, {
      code: 200,
      uid: session.uid
    });
  },
  userInput: function (msg, session, next) {
    this.server.socket_userInputHandler(msg, session)
    
    next(null, {code: 200});
  },
  kickByUid: function (uid) {
    this.server.kickByUid(uid);
  }
};

/*===================================================*\
 * exports
\*===================================================*/
module.exports = function(app) {
  return new SkyDuelHandler(app);
};