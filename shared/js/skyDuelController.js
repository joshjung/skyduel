/*===================================================*\
 * Requires (server only)
\*===================================================*/
var Player = (typeof module == 'undefined' ? Player : require('./Player'));

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
  startServer: function(handler) {
    this.isServer = true;
    this.handler = handler;
    this.rid = handler.rid;

    this.start();
  },
  startClient: function() {
    this.isServer = false;

    this.start();
  },
  start: function() {
    this.player = new Player(this);

    this.bounds = {
      width: 800,
      height: 600
    };

    this.fpsIntervalHandler = (function() {
        this._update();
      }).bind(this);

    setInterval(this.fpsIntervalHandler, 1000 / FPS);
  },
  updateClients: function() {
    if (this.rid)
    {
      this.handler.app.get('channelService').getChannel(this.rid, false).pushMessage('onUpdate', this.player.serialize());
    }
  },
  _update: function() {
    this.player.update(1.0);

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