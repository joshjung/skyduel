/*===================================================*\
 * Requires
\*===================================================*/
var JClass = require('jclass'),
  World = require('../objects/World'),
  UA = require('../../input/SkyDuelUserActions'),
  HashArray = require('../../lib/HashArray'),
  UserInputProcessor = require('../../input/SkyDuelUserInputProcessor');

/*===================================================*\
 * GameControllerBase()
\*===================================================*/
var GameControllerBase = module.exports = JClass.extend({
  /*======================*\
   * Properties
  \*======================*/
  getNow: function() {
    return (new Date()).getTime();
  },
  getState: function () {
    // Server
    if (this.isServer())
      return {
        time: this.getNow(),
        players: this.getPlayersMetaData(),
        world: this.world.getState()
      };

    // Client
    return {
      time: (new Date()).getTime(),
      world: this.world.getState()
    };
  },
  setState: function (value) {
    if (value)
    {
      // For client, we pass off when to apply the state to the state manager.
      if (this.isClient)
      {
        this.playerMetaData = value.players;
        this.deadReckoner.setServerState(value);
      }

      // For server, we immediately set any state. This could be rather destructive.
      else
        this.world.setState(value.world);
    }
    else
    {
      // If no state is provided, it is considered a reset.
      this.reset();
    }
  },
  getPlayers: function () {
    return this.world.getChildren().get('player');
  },
  getPlayersMetaData: function () {
    return this.world.players.all.map(function (player) {
      return player.getMetaData();
    });
  },
  getFPS: function () {
    return this.fps;
  },
  /*======================*\
   * Constructor
  \*======================*/
  init: function () {
    this.started = false;
    this.startTime = undefined;

    this.player = undefined;
    this.playerMetaData = [];

    this.world = undefined;
    this.fps = 60;

    this.server = {
      userInputsByUID: {},
      lastPlayerId: 0
    };

    this.reset();
  },
  /*======================*\
   * Methods
  \*======================*/
  setPhaser: function(phaser) {
    this.userInputProcessor = new UserInputProcessor(this, phaser);
    this.userInputProcessor.startKeyboard();
  },
  applyUserAction: function(actions, elapsed) {
    this.player.bank = this.player.accelerater = 0;
    this.player.trigger = actions.has(UA.TRIGGER.id);

    if (actions.has(UA.BANK_LEFT.id))
      this.player.bank = -this.player.GLOBALS.BANK_RATE;

    if (actions.has(UA.BANK_RIGHT.id))
      this.player.bank = this.player.GLOBALS.BANK_RATE;

    if (actions.has(UA.ACCELERATE.id))
      this.player.accelerater = this.player.GLOBALS.ACCELERATION_RATE;

    if (actions.has(UA.DECELERATE.id))
      this.player.accelerater = this.player.GLOBALS.DECELERATION_RATE;
  },
  isServer: function () {
    return typeof window === 'undefined';
  },
  addSession: function () {
    if (!this.isServer())
      throw Error('GameControllerBase::addSession should only be called on the server.');

    if (this.getPlayers().length == 0)
      this.reset();

    console.log('Adding player with id', this.server.lastPlayerId);

    var player = new Player(this.world, 'player' + ( this.lastPlayerId++), session.uid);
    player.color = this.getAvailablePlayerColor(session.uid);
    player.messaging = this.messaging;
    this.world.players.add(player);
    this.world.getChildren().add(player);
  },
  addUserInputForSession: function (sid) {
    if (this.world.getChildren().has(session.uid))
      this.server.userInputsByUID[session.uid] = msg;
    else
      throw Error('addUserInputForSession(): no player matched session uid', session.uid);
  },
  start: function () {
    this.newGame();
  },
  newGame: function () {
    this.generateWorld();
    this.reset();
  },
  reset: function () {
    if (this.deadReckoner)
      this.deadReckoner.reset();

    if (this.world)
      this.world.forEach(function () {
        this.destroy();
      });
    
    this.world = new World();
  },
  stop: function () {

  },
  clientUpdate: function (userInput, elapsed) {
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
  serverUpdate: function(elapsed) {
    // First manage user input.
    for (var key in this.server.userInputsByUID)
    {
      this.serverProcessUserInputFor(key, elapsed);
      
    }

    this.world.update(elapsed);
  },
  serverProcessUserInputFor: function (uid, elapsed) {
    var userInput = this.userInputsByUID[uid];

    // It's possible the player has left.
    if (this.world.getChildren().get(uid))
      this.userInputProcessor.update(userInput, elapsed, {
        player: this.world.getChildren().get(uid)
      });

    delete this.server.userInputsByUID[key];
  },
  //DeadReckoner Interface
  updateServer: function (userInputState) {
    var key = (Math.random() * 9999999).toString(16);

    this.latencyAnalyzer.startTest(key);

    pomelo.request('skyduel.skyduelHandler.userInput',
      this.userInput,
      this.socket_updateServerResponseHandler.bind(this, key));
  },
  generateWorld: function() {
    this.game.world.setState({
      width: 800,
      height: 600,
      tileWidth: 50,
      tileHeight: 50,
      tiles: []
    });

    // build the world tiles
    for (var x = 0; x < this.world.width; x+= this.world.tileWidth)
    {
      this.world.tiles[x / this.world.tileWidth] = [];

      for (var y = 0; y < this.world.height; y += this.world.tileHeight)
      {
        this.world.tiles[x / this.world.tileWidth][y / this.world.tileHeight] = Math.floor(Math.random() * 3.9999);
      }
    }
    
    // insert fixed entities
    for(var i=0 ; i < 10 ; i++)
      this.world.getChildren().add(new Bird(this.world, 'bird' + i));
  },
  getAvailablePlayerColor: function (uid) {
    var ret = false,self= this;
    for (var i = 0; i <PLAYER_COLORS.length;i++)
    {
      var col = PLAYER_COLORS[i];
      if (!self.world.players.has(col.usedBy))
      {
        PLAYER_COLORS[i].usedBy = uid;
        ret = col.color;
        break;
      }
    }
    return ret;
  }
});