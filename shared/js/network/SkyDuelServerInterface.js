/*===================================================*\
 * Requires
\*===================================================*/
var HashArray = require('../../../shared/js/lib/HashArray'),
  DeadReckoning = require('dead-reckoning');

/*===================================================*\
 * SkyDuelServerInterface()
\*===================================================*/
var SkyDuelServerInterface = function(client) {
  this.client = client;
  this.latencyAnalyzer = new LatencyAnalyzer();
  this.deadReckoning = new DeadReckoning(this.getDeadReckoningInterface());

  pomelo.on('disconnect', this.pomelo_disconnectHandler.bind(this))
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelServerInterface.prototype = {
  setServerState: function (value) {
    if (!this.deadReckoning.lastServerState)
    {
      console.log('SkyDuelServerInterface(): set world state', state.world);

      this.world.setState(state.world);

      this.player = this.world.getChildren().get(this.uid);

      if (!this.player)
      {
        console.log (state);
        console.log('Player could not be found in incoming state!', this.uid);
      }

      this.deadReckoning.newServerState = state;

      this.deadReckoning.play();
    }
    else
    {
      this.deadReckoning.setServerState(value);
    }
  },
  getDeadReckoningInterface: function () {
    var game = this.client.game;
    
    return {
      fps: this.client.game.getFPS(),
      latencySampleCount: 10,
      sampleLatency: this.sampleLatency.bind(this),
      sampleLatencyCompletedHandler: this.sampleLatencyCompletedHandler.bind(this),
      getUserInput: this.client.getUserInput.bind(this.client),            // REQUIRED
      setState: this.client.setState.bind(this.client),                    // REQUIRED
      simulateUpdate: this.client.simulateUpdate,        // REQUIRED
      updateServer: this.updateServer             // REQUIRED
    }
  },
  start: function (rid) {
    this.rid = rid;

    var self = this;

    console.log('SkyDuelServerInterface::start()')

    this.deadReckoning.start();
  },
  startServerConnection: function () {
    pomelo.request('skyduel.skyduelHandler.start', {
      rid: this.rid
    }, this.serverConnection_startedHandler.bind(this));
  },
  sampleLatency: function (callback) {
    pomelo.request('skyduel.skyduelHandler.ping', callback);
  },
  /*===========================*\
   * Events
  \*===========================*/
  sampleLatencyCompletedHandler: function () {
    this.startServerConnection();
  },
  serverConnection_startedHandler: function (data) {
    this.uid = data.uid;
    this.client.setUID(this.uid);

    console.log('SERVER CONNECTION started', data);
    console.log('WAITING for server state');

    pomelo.on('serverState', this.socket_serverStateHandler.bind(this));
  },
  socket_serverStateHandler: function (data) {
    this.setServerState(data);
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