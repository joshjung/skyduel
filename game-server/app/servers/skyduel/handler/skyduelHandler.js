/*===================================================*\
 * SkyDuelHandler()
\*===================================================*/
var SkyDuelHandler = function(app) {
  this.app = app;

  this.skyduelService = app.get('skyduelService');
  this.messaging = app.get('messagingService');
};

/*===================================================*\
 * prototype
\*===================================================*/
SkyDuelHandler.prototype = {
  /*========================*\
   * Methods
  \*========================*/
  kickByUid: function (uid) {
    this.skyduelService.session_disconnectedHandler(uid);
  },
  /*========================*\
   * Client Interface
  \*========================*/
  ping: function (msg, session, next) {
    // For ping we simply respond immediately so the client can measure latency.
    next(null, {code: 200});
  },
  start: function (msg, session, next) {
    this.skyduelService.session_connectedHandler(session, msg.rid);

    this.messaging.rid = msg.rid;

    next(null, {
      code: 200,
      uid: session.uid
    });
  },
  userInput: function (msg, session, next) {
    this.skyduelService.session_userInputHandler(msg, session)
    
    next(null, {code: 200});
  }
};

/*===================================================*\
 * exports
\*===================================================*/
module.exports = function(app) {
  return new SkyDuelHandler(app);
};