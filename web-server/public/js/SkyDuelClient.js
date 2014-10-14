var
  GameObject = require('../../../shared/js/GameObject'),
  World = require('../../../shared/js/gameObjects/World'),
  Player = require('../../../shared/js/gameObjects/Player'),
  LatencyAnalyzer = require('../../../shared/js/LatencyAnalyzer'),
  SCStateManager = require('./ServerClientStateManager'),
  UserInputProcessor = require('../../../shared/js/UserInputProcessor'),
  HashArray = require('../../../shared/js/lib/HashArray');

/*======================================================*\
 * Globals
\*======================================================*/
var FPS = 60,
  SERVER_TIMEOUT_MS = 10000,
  PLANE_GLOBALS = Player.prototype.GLOBALS;

/*===================================================*\
 * SkyDuelClient()
\*===================================================*/
var SkyDuelClient = function() {
  this.resetAll();

  pomelo.on('disconnect', this.pomelo_disconnectHandler.bind(this))
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelClient.prototype = {
  /*===========================*\
   * Variables
  \*===========================*/
  started: false,
  input: {},
  player: undefined,
  errorText: undefined,
  playerMetaData: [],
  /*===========================*\
   * Properties
  \*===========================*/
  get state() {
    return {};
  },
  set state(value) {
    this.playerMetaData = value.players;
    this.world.setState(value.world);
  },
  get userInput() {
    return  {
      up: (this.input.up ? this.input.up.isDown : false),
      down: (this.input.down ? this.input.down.isDown : false),
      left: (this.input.left ? this.input.left.isDown : false),
      right: (this.input.right ? this.input.right.isDown : false),
      trigger: (this.input.trigger ? this.input.trigger.isDown : false)
    };
  },
  /*===========================*\
   * Methods
  \*===========================*/
  startKeyboard: function () {
    console.log('Starting Keyboard Input');

    this.input.up = this.phaser.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.input.down = this.phaser.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.input.left = this.phaser.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.input.right = this.phaser.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.input.trigger = this.phaser.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  stopKeyboard: function () {
    if (!this.input.down)
      return;
    
    console.log('Stopping Keyboard Input');

    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.UP);
    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.DOWN);
    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.LEFT);
    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.RIGHT);
    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
  },
  resetAll: function () {

    if (this.scStateManager)
      this.scStateManager.reset();

    if (this.world)
      this.world.forEach(function () {
        console.log('destroying', this);
        this.destroy();
      });

    this.latencyAnalyzer = new LatencyAnalyzer();
    this.scStateManager = new SCStateManager(60, this);
    this.userInputProcessor = new UserInputProcessor();

    this.world = new World();
  },
  latencyCheck: function (count, callback) {
    var self = this,
      i = 0;
      count = count || 10;

    ping();

    function ping() {
      self.latencyAnalyzer.startTest();
      pomelo.request('skyduel.skyduelHandler.ping', skyduel_skyduelHandler_pingHandler);
    }

    function skyduel_skyduelHandler_pingHandler() {
      self.latencyAnalyzer.endTest();
      (++i < count) ? ping() : callback();
    }
  },
  start: function (rid) {
    this.rid = rid;
    this.started = true;

    this.latencyCheck(10, this.startServerConnection.bind(this));
  },
  stop: function (reason) {
    this.errorText = reason;
    this.scStateManager.pause();
  },
  startServerConnection: function () {
    this.scStateManager.latency = this.latencyAnalyzer.latency;
    pomelo.request('skyduel.skyduelHandler.start', {
      rid: this.rid
    }, this.serverConnection_startedHandler.bind(this));
  },
  //SCStateManager Interface
  simulateUpdate: function (userInput, elapsed) {
    elapsed =  elapsed / 1000.0;

    if (elapsed > SERVER_TIMEOUT_MS)
    {
      this.stop('Server disconnected');      
    }
    if (elapsed > 0.2)
      throw Error('Elapsed is wayyyy too high man. Did server disconnect?');

    this.userInputProcessor.update(userInput, elapsed, this);

    this.world.update(elapsed);
  },
  //SCStateManager Interface
  updateServer: function (userInputState) {
    var key = (Math.random() * 9999999).toString(16);

    this.latencyAnalyzer.startTest(key);

    pomelo.request('skyduel.skyduelHandler.userInput',
      this.userInput,
      this.socket_updateServerResponseHandler.bind(this, key));
  },
  setupStartState: function(state) {
    console.log('Initial world state', state.world);

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
    this.resetAll();
  }
};

window.client = new SkyDuelClient();
