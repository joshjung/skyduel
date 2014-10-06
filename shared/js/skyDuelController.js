/*===================================================*\
 * Requires (server only)
\*===================================================*/
var Player = (typeof module == 'undefined' ? Player : require('./Player')),
  HashArray = (typeof module == 'undefined' ? HashArray : require('./lib/HashArray'));

/*===================================================*\
 * Globals
\*===================================================*/
var CLIENT_UPDATE_INTERVAL = 5,
  FPS = 60;

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
        this._update();
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
  _update: function() {
    this.players.all.forEach(function (player) {
      player.update(1.0);
    })

    if (this.isServer)
      this.updateClients();
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