var pomelo = require('pomelo'),
  routeUtil = require('./app/util/routeUtil');

var app = pomelo.createApp();
app.set('name', 'skyduel');

app.configure('production|development', 'connector', function() {
  app.set('connectorConfig', {
    connector: pomelo.connectors.hybridconnector,
    heartbeat: 3,
    useDict: true,
    useProtobuf: true
  });
});

app.configure('production|development', 'gate', function() {
  app.set('connectorConfig', {
    connector: pomelo.connectors.hybridconnector,
    useProtobuf: true
  });
});

// app configure
app.configure('production|development', function() {
  // route configures
  app.route('skyduel', routeUtil.skyduel);

  // filter configures
  app.filter(pomelo.timeout());
});

// start app
app.start();

process.on('uncaughtException', function(err) {
  console.error(' SkyDuel Caught exception: ' + err.stack);
});