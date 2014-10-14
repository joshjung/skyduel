/*===================================================*\
 * Requires
\*===================================================*/
var GameObject = require('../../../shared/js/GameObject'),
  World = require('../../../shared/js/gameObjects/World'),
  Player = require('../../../shared/js/gameObjects/Player'),
  Bird = require('../../../shared/js/gameObjects/Bird'),
  UserInputProcessor = require('../../../shared/js/UserInputProcessor'),
  HashArray = require('../../../shared/js/lib/HashArray'),
  USER_ACTIONS = require('../../../shared/js/UserActions');

/*===================================================*\
 * Globals
\*===================================================*/
var FPS = 30,
  /**
   * How many seconds to wait to update the clients with data.
   */
  CLIENT_UPDATE_INTERVAL = 0.033,
  PLAYER_COLORS = [
    {
      used: false,
      color: 0xff8080
    },{
      used: false,
      color: 0x78bef0
    },{
      used: false,
      color: 0xded16f
    },{
      used: false,
      color: 0xcc66c9
    },{
      used: false,
      color: 0x5dbaac
    },{
      used: false,
      color: 0xf2a279
    },{
      used: false,
      color: 0x7182e3
    },{
      used: false,
      color: 0x92d169
    },{
      used: false,
      color: 0xbf607c
    },{
      used: false,
      color: 0x7cddf7
    }];
/*===================================================*\
 * SkyDuelServer()
\*===================================================*/
var SkyDuelServer = function(app) {
  this.app = app;

  this.messaging = app.get('messagingService');

  this.world = new World();

  this.id = 'sid:' + Math.round(Math.random() * 100).toString(16) + ':' + process.pid;

  this.userInputProcessor = new UserInputProcessor();
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelServer.prototype = {
  /*============================*\
   * Variables
  \*============================*/
  lastTime: undefined,
  elapsed: undefined,
  clientUpdateTimer: 0,
  userInputsByUID: {},
  lastPlayerId: 0,
  /*============================*\
   * Properties
  \*============================*/
  get now() {
    return (new Date()).getTime();
  },
  /*============================*\
   * Methods
  \*============================*/
  reset: function() {
    this.generateWorld();

    setInterval(this.updateInternal.bind(this), 1000 / FPS);
  },
  getPlayers: function () {
    var self = this;
    var ret = [];
    this.world.players.all.forEach(function (player) {
      ret.push({
        uid: player.uid,
        username: player.uid.split('*')[0],
        id: player._id,
        color: player.color,
        colorHex: player.getColorHex(),
        kills: player.kills,
        health: player.health,
        deaths: player.deaths})
    });
    return ret;
  },
  generateWorld: function() {
    this.world.setState({
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
  addPlayerFor: function(session) {
    if (this.world.getChildren().getAsArray('player').length == 0)
      this.reset();

    console.log('Adding player with id', this.lastPlayerId);
    var player = new Player(this.world, 'player' + ( this.lastPlayerId++), session.uid);
    player.color = this.getAvailablePlayerColor(session.uid);
    player.messaging = this.messaging;
    this.world.players.add(player);
    this.world.getChildren().add(player);
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
  },
  updateClients: function() {
    var channel = this.app.get('channelService').getChannel(this.rid, false);

    if (channel)
      channel.pushMessage('serverState', this.state);
  },
  updateInternal: function () {
    var self = this;

    if (!this.lastTime)
      return this.lastTime = this.now;

    // Elapsed is 0.0-0.2 seconds.
    this.elapsed =  (this.now - this.lastTime) / 1000.0;
    this.lastTime = this.now;
    this.elapsed = (this.elapsed > 0.3 ? 0.3 : this.elapsed);

    this.update(this.elapsed);

    if ((this.clientUpdateTimer += this.elapsed) > CLIENT_UPDATE_INTERVAL)
    {
      this.updateClients();
      this.clientUpdateTimer = 0;
    }
  },
  update: function(elapsed) {
    var self = this;

    // First manage user input.
    for (var key in this.userInputsByUID)
    {
      this.userInput(key, this.userInputsByUID[key], elapsed);
      delete this.userInputsByUID[key];
    }

    this.world.update(elapsed);
  },
  userInput: function (uid, userInput, elapsed) {
    // It's possible the player has left.
    if (this.world.getChildren().get(uid))
      this.userInputProcessor.update(userInput, elapsed, {
        player: this.world.getChildren().get(uid)
      });
  },
  kickByUid: function (uid) {
    console.log('This user was kicked!', uid);

    this.world.players.removeByKey(uid);
    this.world.getChildren().get(uid).destroy();
  },
  /*============================*\
   * Events
  \*============================*/
  socket_userInputHandler: function(msg, session) {
    if (this.world.getChildren().has(session.uid))
      this.userInputsByUID[session.uid] = msg;
    else if (!this.world.players.get(session.uid))
      throw Error('socket_userInputHandler(): no player matched session uid', session.uid);
  }
};

/*============================*\
 * Properties
\*============================*/
Object.defineProperty(SkyDuelServer.prototype, 'state', {
  get: function() {
    return {
      time: (new Date()).getTime(),
      players: this.getPlayers(),
      world: this.world.getState()
    };
  }
});

/*===================================================*\
 * Export
\*===================================================*/
module.exports = SkyDuelServer;