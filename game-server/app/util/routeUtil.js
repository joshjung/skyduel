var dispatcher = require('./dispatcher');

module.exports.skyduel = function(session, msg, app, cb) {
  var skyduelServers = app.getServersByType('skyduel');

  if (!skyduelServers || skyduelServers.length === 0) {
    cb(new Error('can not find skyduel servers.'));
    return;
  }

  var res = dispatcher.dispatch(session.get('rid'), skyduelServers);

  cb(null, res.id);
};