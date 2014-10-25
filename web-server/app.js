var express = require('express'),
	fs = require('fs'),
  app = express();

var env = undefined;

for (var key in process.argv)
{
	var param = process.argv[key];
	
	if (/env=[a-z]+/gi.test(param))
		env = param.split('=')[1];
}

if (!env)
	throw Error('You must provide an environment (env=<environment>) from the command line!');

var servers = JSON.parse(fs.readFileSync('./config/servers.json').toString()),
	server = servers[env];

	if (!server)
	throw Error('Env \'' + env + '\' is invalid.');
	
app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(app.router);
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/public');
  app.set('view options', {layout: false});
  app.set('basepath',__dirname + '/public');
});

app.configure('development', function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/../shared'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(express.errorHandler());
});

console.log("SkyDual server has started.\nIf you are running on the local network, please make sure your hosts file has been properly edited according to the Readme.md.\nLog on http://local.skyduel.com:" + server.port + "/index.html");

// Write file telling client which gate port to connect to
var gameServer = JSON.parse(fs.readFileSync('../game-server/config/servers.json').toString());
fs.writeFileSync('./public/gate.js', 'var GATE_PORT=' + gameServer[env]['gate'][0]['clientPort'] + ';');
  
app.listen(server.port);