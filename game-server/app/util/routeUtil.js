var connectorFinder = require('./connectorFinder');

module.exports.skyduel = function(session, msg, app, cb) {
  console.log('Getting skyduel servers', msg);

  var skyduelServers = app.getServersByType('skyduel');

  if (!skyduelServers || skyduelServers.length === 0) {
    cb(new Error('Can not find \'skyduel\' servers.'));
    return;
  }

  var connector = connectorFinder.findFor(session.get('rid'), skyduelServers);

  cb(null, connector.id);
};