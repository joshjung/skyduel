/*===================================================*\
 * Requires
\*===================================================*/
var JClass = require('jclass'),
  World = require('../objects/World'),
  Player = require('../objects/Player'),
  UA = require('../../input/SkyDuelUserActions'),
  HashArray = require('../../lib/HashArray'),
  Util = require('../Util.js'),
  UserInputProcessor = require('../../input/SkyDuelUserInputProcessor');

/*===================================================*\
 * Constants
\*===================================================*/
var SERVER_TIMEOUT_MS = 10000;

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
      this.playerMetaData = value.players;

      this.world.setState(value.world);
      this.__fetchPlayer();
    }
    else
    {
      // If no state is provided, it is considered a reset.
      this.reset();
    }
  },
  getPlayers: function () {
    return this.world.getChildren().getAsArray('player');
  },
  getPlayersMetaData: function () {
    return this.world.players.all.map(function (player) {
      return player.getMetaData();
    });
  },
  getFPS: function () {
    return this.fps;
  },
  setUsername: function (value) {
    this.username = value;
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

    this.userInputProcessor = new UserInputProcessor(this);

    this.reset();
  },
  /*======================*\
   * Methods
  \*======================*/
  __fetchPlayer: function () {
    if (!this.player)
    {
      var self = this,
        players = this.world.getChildren().getAsArray('player');

      players.forEach(function (player) {
        var un = player.username.split('*')[0];
        self.player = (un == this.username) ? player : self.player;
      })
    }
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
  addSession: function (session) {
    if (!this.isServer())
      throw Error('GameControllerBase::addSession should only be called on the server.');

    if (this.getPlayers().length == 0)
      this.reset();

    console.log('Adding player with id ' + this.server.lastPlayerId + ' and username ' + session.uid);

    var player = new Player(this.world, 'player' + ( this.server.lastPlayerId++), session.uid);
    player.color = this.getAvailablePlayerColor(session.uid);
    player.messaging = this.messaging;
    this.world.players.add(player);
    this.world.getChildren().add(player);
  },
  addUserInputForSession: function (username) {
    if (this.world.getChildren().has(username))
      this.server.userInputsByUID[username] = msg;
    else
      throw Error('addUserInputForSession(): no player matched session username', username);
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

    this.userInputProcessor.update(userInput, elapsed);

    this.world.update(elapsed);
  },
  serverUpdate: function(elapsed) {
    // First manage user input.
    for (var key in this.server.userInputsByUID)
      this.serverProcessUserInputFor(key, elapsed);

    this.world.update(elapsed);
  },
  serverProcessUserInputFor: function (username, elapsed) {
    var userInput = this.userInputsByUID[username];

    // It's possible the player has left.
    if (this.world.getChildren().get(username))
      this.userInputProcessor.update(userInput, elapsed, {
        player: this.world.getChildren().get(username)
      });

    delete this.server.userInputsByUID[key];
  },
  // DeadReckoner Interface
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
  getAvailablePlayerColor: function (username) {
    var ret = false,self= this;
    for (var i = 0; i < Util.PLAYER_COLORS.length;i++)
    {
      var col = Util.PLAYER_COLORS[i];
      if (!self.world.players.has(col.usedBy))
      {
        Util.PLAYER_COLORS[i].usedBy = username;
        ret = col.color;
        break;
      }
    }
    return ret;
  }
});