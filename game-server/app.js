var fs = require('fs'),
  pomelo = require('pomelo'),
  routeUtil = require('./app/util/routeUtil'),
  SkyDuelServer = require('./app/main/SkyDuelServer'),
  MessagingService = require('./app/main/MessagingService'),
  GitService = require('./GitService');

var app = pomelo.createApp(),
  gitService = new GitService();

gitService.log(10, function (entries) {
  fs.writeFileSync('../shared/gitEntries.json', JSON.stringify(entries));
});

global.isClient = false;

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

app.configure('production|development', 'skyduel', function() {
  app.set('messagingService', new MessagingService(app));
  app.set('gitService', gitService);
  app.set('skyduelServer', new SkyDuelServer(app));
});

app.configure('production|development', function() {
  app.route('skyduel', routeUtil.skyduel);
  app.filter(pomelo.timeout());
});

app.start();

process.on('uncaughtException', function(err) {
  console.error(' SkyDuel Caught exception: ' + err.stack);
});