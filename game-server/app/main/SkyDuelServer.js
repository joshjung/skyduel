/*===================================================*\
 * Requires
\*===================================================*/
var Player = (typeof module == 'undefined' ? Player : require('../../../shared/js/Player')),
  HashArray = (typeof module == 'undefined' ? HashArray : require('../../../shared/js/lib/HashArray')),
  USER_ACTIONS = (typeof module == 'undefined' ? USER_ACTIONS : require('../../../shared/js/UserActions'));

/*===================================================*\
 * Globals
\*===================================================*/
var FPS = 30,
  CLIENT_UPDATE_INTERVAL = 0.1;

/*===================================================*\
 * SkyDuelServer()
\*===================================================*/
var SkyDuelServer = function(socketHandler, msg, session) {
  console.log('Setting up server');
  console.log('msg:', msg);
  
  this.socketHandler = socketHandler;
  this.resetMsg = msg;
  this.rid = msg.rid;
  this.startSession = session;

  this.reset();
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

    this.world = {
      width: 800,
      height: 600
    };

    this.addPlayerFor(this.startSession);

    setInterval(this.updateInternal.bind(this), 1000 / FPS);
  },
  addPlayerFor: function(session) {
    this.players.add(new Player(this.world, session.uid));
  },
  updateClients: function() {
    this.socketHandler.app.get('channelService').getChannel(this.rid, false).pushMessage('serverState', this.state);
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
      this.userInput(key, this.userInputsByUID[key], elapsed);

    this.players.all.forEach(function (player) {
      player.update(elapsed);
    });
  },
  userInput: function (uid, userInput, elapsed) {
    var player = this.players.get(uid);

    if (userInput.left)
      player.bank = -90.0;
    else if (userInput.right)
      player.bank = 90.0;
    else 
      player.bank = 0;

    if (userInput.up)
      player.accelerater = 1000.0;
    else if (userInput.down)
      player.accelerater = -1000.0;
    else 
      player.accelerater = 0.0;
  },
  /*============================*\
   * Events
  \*============================*/
  socket_userInputHandler: function(msg, session) {
    if (this.players.has(session.uid))
    {
      this.userInputsByUID[session.uid] = msg;
    }
    else
    {
      throw Error('socket_userInputHandler(): no player matched session uid', session.uid);
    }
  },
  socket_startHandler: function (msg, session) {
    this.server.addPlayer(session);
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

/*===================================================*\
 * Export
\*===================================================*/
if (typeof module != 'undefined') {
  module.exports = SkyDuelServer;
} else {
  window.SkyDuelServer = SkyDuelServer;
}