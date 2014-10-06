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
var SkyDuelController = function() {};

/*===================================================*\
 * Methods
\*===================================================*/
SkyDuelController.prototype = {
  startServer: function(handler) {
    this.isServer = true;
    this.handler = handler;

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
      height: 800
    };

    if (!this.isServer) {
      this.fpsIntervalHandler = (function() {
        this._update();
      }).bind(this);
      setInterval(this.fpsIntervalHandler, 1000 / FPS);
    } else {
      this.clientUpdateIntervalHandler = (function() {
        this.updateClients();
      }).bind(this);

      setInterval(this.fpsIntervalHandler, 1000 / FPS);
      setInterval(this.clientUpdateIntervalHandler, 1000 / CLIENT_UPDATE_INTERVAL);
    }
  },
  updateClients: function() {
    if (this.rid)
      this.app.get('channelService').getChannel(this.rid, false).pushMessage('onUpdate', this.player);
  },
  _update: function() {
    this.player.update(1.0);
  }
};

/*===================================================*\
 * Export
\*===================================================*/
if (typeof module != 'undefined') {
  module.exports = new SkyDuelController();
} else {
  window.skyDuelController = new SkyDuelController();
}