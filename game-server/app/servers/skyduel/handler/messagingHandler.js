/*===================================================*\
 * MessagingHandler()
\*===================================================*/
var MessagingHandler = function(app) {
  this.app = app;
  this.server = app.get('skyduelServer');
  this.messaging = app.get('messagingService');
};

/*===================================================*\
 * prototype
\*===================================================*/
MessagingHandler.prototype = {
  /*========================*\
   * Client Interface
  \*========================*/
  send: function (msg, session, next) {
    // Relay to all clients
    this.messaging.send(session.uid.split('*')[0], msg.message, msg.type);

    next();
  }
};

/*===================================================*\
 * exports
\*===================================================*/
module.exports = function(app) {
  return new MessagingHandler(app);
};