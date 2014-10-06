module.exports = function(app) {
  return new ConnectionHandler(app);
};

var ConnectionHandler = function(app) {
  this.app = app;
};

ConnectionHandler.prototype.entry = function(msg, session, next) {
  next(null, {
    code: 200,
    msg: 'game server is ok.'
  });
};

ConnectionHandler.prototype.publish = function(msg, session, next) {
  next(null, {
    topic: 'publish',
    payload: JSON.stringify({
      code: 200,
      msg: 'publish message is ok.'
    })
  });
};

ConnectionHandler.prototype.subscribe = function(msg, session, next) {
  next(null, {
    topic: 'subscribe',
    payload: JSON.stringify({
      code: 200,
      msg: 'subscribe message is ok.'
    })
  });
};