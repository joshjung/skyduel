/*===================================================*\
 * Requires
\*===================================================*/
var HashArray = require('hasharray'),
  DeadReckoning = require('dead-reckoning');

/*===================================================*\
 * SkyDuelServerInterface()
\*===================================================*/
var SkyDuelServerInterface = function(client) {
  this.client = client;
  this.deadReckoning = new DeadReckoning(this.getDeadReckoningInterface());

  pomelo.on('disconnect', this.pomelo_disconnectHandler.bind(this))
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelServerInterface.prototype = {
  setServerState: function (value) {
    if (!this.deadReckoning.started)
    {
      console.log('RECEIVED initial server state', value);
      this.deadReckoning.start(value);
    }
    else
      this.deadReckoning.setServerState(value);
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
      simulateUpdate: this.client.simulateUpdate.bind(this.client),        // REQUIRED
      updateServer: this.updateServer.bind(this)             // REQUIRED
    }
  },
  start: function (rid) {
    this.rid = rid;

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
  updateServer: function (userInputState) {
    var key = (Math.random() * 9999999).toString(16);

    this.deadReckoning.latencySampler.start(key);

    pomelo.request('skyduel.skyduelHandler.userInput',
      userInputState,
      this.socket_updateServerResponseHandler.bind(this, key));
  },
  /*===========================*\
   * Events
  \*===========================*/
  sampleLatencyCompletedHandler: function () {
    console.log('Latency sampling complete:', this.deadReckoning.latencySampler.getLatency())
    this.startServerConnection();
    return true;
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
    this.deadReckoning.latencySampler.end(key);
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