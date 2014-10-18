/*===================================================*\
 * Requires
\*===================================================*/
var LatencyAnalyzer = require('./LatencyAnalyzer'),
  HashArray = require('../../../shared/js/lib/HashArray'),
  DeadReckoner = require('./deadReckoner/DeadReckoner');

/*===================================================*\
 * SkyDuelServerInterface()
\*===================================================*/
var SkyDuelServerInterface = function(client) {
  this.client = client;
  this.latencyAnalyzer = new LatencyAnalyzer();
  this.deadReckoner = new DeadReckoner(this.client.game, this.latencyAnalyzer);

  pomelo.on('disconnect', this.pomelo_disconnectHandler.bind(this))
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelServerInterface.prototype = {
  start: function (rid) {
    this.rid = rid;

    var self = this;

    console.log('SkyDuelServerInterface::start()')

    this.latencyAnalyzer.sampleLatency(function (pingHandler, done) {
      if (done)
        self.startServerConnection();

      pomelo.request('skyduel.skyduelHandler.ping', pingHandler);
    });
  },
  startServerConnection: function () {
    pomelo.request('skyduel.skyduelHandler.start', {
      rid: this.rid
    }, this.serverConnection_startedHandler.bind(this));
  },  
  setupStartState: function(state) {
    console.log('SkyDuelServerInterfaceInitial world state', state.world);

    this.world.setState(state.world);

    this.player = this.world.getChildren().get(this.uid);

    if (!this.player)
    {
      console.log (state);
      console.log('Player could not be found in incoming state!', this.uid);
    }

    this.scStateManager.newServerState = state;

    this.scStateManager.play();
  },
  /*===========================*\
   * Events
  \*===========================*/
  serverConnection_startedHandler: function (data) {
    this.uid = data.uid;

    console.log('SERVER CONNECTION started', data);
    console.log('WAITING for server state');

    pomelo.on('serverState', this.socket_serverStateHandler.bind(this));

    this.scStateManager.play();
  },
  socket_serverStateHandler: function (data) {
    if (!this.scStateManager.lastServerState)
      this.setupStartState(data);
    else
    {
      this.scStateManager.newServerState = data;
    }
  },
  socket_updateServerResponseHandler: function (key, data) {
    this.latencyAnalyzer.endTest(key);
  },
  pomelo_disconnectHandler: function (reason) 
  {
    console.log('skyDuelClient: pomelo disconnected. Resetting everything.');
    this.client.pomelo_disconnectHandler();
  }
};

/*===================================================*\
 * Export
\*===================================================*/
module.exports = SkyDuelServerInterface;