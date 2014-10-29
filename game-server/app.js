var fs = require('fs'),
  pomelo = require('pomelo'),
  routeUtil = require('./app/util/routeUtil'),
  SkyDuelService = require('./app/services/SkyDuelService'),
  MessagingService = require('./app/services/MessagingService'),
  GitService = require('./GitService'),
	HashArray = require('hasharray');

var app = pomelo.createApp(),
  gitService = new GitService();

gitService.log(10, function (entries) {
  fs.writeFileSync('../shared/gitEntries.json', JSON.stringify(entries));
});

global.isClient = false;

app.set('name', 'skyduel');

app.configure('production|development|staging', 'connector', function() {
  app.set('connectorConfig', {
    connector: pomelo.connectors.hybridconnector,
    heartbeat: 3,
    useDict: true,
    useProtobuf: true
  });
});

app.configure('production|development|staging', 'gate', function() {
  app.set('connectorConfig', {
    connector: pomelo.connectors.hybridconnector,
    useProtobuf: true
  });
});

app.configure('production|development|staging', 'skyduel', function() {
  app.set('messagingService', new MessagingService(app));
  app.set('gitService', gitService);
  app.set('skyduelService', new SkyDuelService(app));
});

app.configure('production|development|staging', function() {
  fs.appendFileSync('../pid', process.pid.toString() + '\n');
  
  app.route('skyduel', routeUtil.skyduel);
  app.filter(pomelo.timeout());
});

app.start();

process.on('uncaughtException', function(err) {
  console.error(' SkyDuel Caught exception: ' + err.stack);
});