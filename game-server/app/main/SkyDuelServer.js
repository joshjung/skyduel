/*===================================================*\
 * Requires
\*===================================================*/
var Player = require('../../../shared/js/Player'),
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
  CLIENT_UPDATE_INTERVAL = 0.033;

/*===================================================*\
 * SkyDuelServer()
\*===================================================*/
var SkyDuelServer = function(app) {
  this.app = app;
  this.id = 'sid:' + Math.round(Math.random() * 100).toString(16) + ':' + process.pid;

  this.userInputProcessor = new UserInputProcessor();

  console.log('SkyDuelServer()', this.id);
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
    this.players = new HashArray(['uid', 'id']);

    this.generateWorld();

    setInterval(this.updateInternal.bind(this), 1000 / FPS);
  },
  generateWorld: function() {
    this.world = {
      width: 800,
      height: 600,
      tileWidth: 50,
      tileHeight: 50,
      tiles: []
    };

    for (var x = 0; x < this.world.width; x+= this.world.tileWidth)
    {
      this.world.tiles[x / this.world.tileWidth] = [];

      for (var y = 0; y < this.world.height; y += this.world.tileHeight)
      {
        this.world.tiles[x / this.world.tileWidth][y / this.world.tileHeight] = Math.floor(Math.random() * 3.9999);
      }
    }
  },
  addPlayerFor: function(session) {
    if (!this.players)
      this.reset();

    this.players.add(new Player(this.world, session.uid, this.players.all.length));
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
    this.elapsed = (this.elapsed > 0.2 ? 0.2 : this.elapsed);

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

    this.players.all.forEach(function (player) {
      player.update(elapsed);
    });
  },
  userInput: function (uid, userInput, elapsed) {
    // It's possible the player has left.
    if (this.players.get(uid))
      this.userInputProcessor.update(userInput, elapsed, {
        player: this.players.get(uid)
      });
  },
  kickByUid: function (uid) {
    console.log('This user was kicked!', uid);

    this.players.removeByKey(uid);
  },
  /*============================*\
   * Events
  \*============================*/
  socket_userInputHandler: function(msg, session) {
    if (this.players.has(session.uid))
      this.userInputsByUID[session.uid] = msg;
    else
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
      world: this.world,
      players: this.players.all.map(function (player) {
          return player.state;
        })
    };
  },
  set: function(value) {
    var self = this;

    if (value.destructive)
      this.players.removeAll();

    value.players.forEach(function (player) {
      if (self.players.has(player.id))
      {
        self.players.get(player.id).deserialize(player);
      }
      else
      {
        var _player = new Player(self, undefined, player.id);
        _player.state = player;
        _player.sprite = self.phaser.add.sprite(_player.x, _player.y, 'aircraft');
        self.players.add(_player);

        // If the server says we are controlling one of the players, assign it!
        self.player = (player.uid == self.uid ? _player : self.player);
      }
    });
  }
});

console.log('Compiling SkyDuelServer');

/*===================================================*\
 * Export
\*===================================================*/
module.exports = SkyDuelServer;