/*===================================================*\
 * Requires (server only)
\*===================================================*/
var Player = (typeof module == 'undefined' ? Player : require('./Player')),
  HashArray = (typeof module == 'undefined' ? HashArray : require('./lib/HashArray'));

/*===================================================*\
 * Globals
\*===================================================*/
var FPS = 60.
  CLIENT_UPDATE_INTERVAL = 0.1;

/*===================================================*\
 * SkyDuelController()
\*===================================================*/
var SkyDuelController = function(rid) {
  this.rid = rid;
};

/*===================================================*\
 * Methods
\*===================================================*/
SkyDuelController.prototype = {
  lastTime: undefined,
  elapsed: undefined,
  clientUpdateTimer: 0,
  startServer: function(handler, session) {
    this.isServer = true;
    this.handler = handler;
    this.rid = handler.rid;

    this.start(session);
  },
  startClient: function() {
    this.isServer = false;

    this.start();
  },
  start: function(session) {
    this.players = new HashArray(['uid', 'id']);

    this.bounds = {
      width: 800,
      height: 600
    };

    this.fpsIntervalHandler = (function() {
        this.update();
      }).bind(this);

    setInterval(this.fpsIntervalHandler, 1000 / FPS);
  },
  addPlayer: function(session) {
    this.players.add(new Player(this, session ? session.uid : -1));
  },
  updateClients: function() {
    if (this.rid)
    {
      var all =this.players.all.map(function (player) {
        return player.serialize();
      });

      this.handler.app.get('channelService').getChannel(this.rid, false).pushMessage('onUpdate', 
          {
            players: all
          }
        );
    }
  },
  get now() {
    return (new Date()).getTime();
  },
  update: function() {
    var self = this;

    if (!this.lastTime)
    {
      this.lastTime = this.now;

      return;
    }

    this.elapsed = 1000.0 / (this.now - this.lastTime);
    this.elapsed = (this.elapsed > 0.2 ? 0.2 : this.elapsed);

    this.clientUpdateTimer += this.elapsed;

    this.players.all.forEach(function (player) {
      player.update(self.elapsed);
    })

    if (this.isServer && this.clientUpdateTimer > CLIENT_UPDATE_INTERVAL)
    {
      this.updateClients();
      this.clientUpdateTimer = 0;
    }

    this.lastTime = new Date().time;
  }
};

/*===================================================*\
 * Export
\*===================================================*/
if (typeof module != 'undefined') {
  module.exports = SkyDuelController;
} else {
  window.skyDuelController = new SkyDuelController();
}