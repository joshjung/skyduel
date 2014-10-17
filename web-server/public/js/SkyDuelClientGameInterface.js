var GameControllerFactory = require('../../../shared/js/skyduel/controllers/GameControllerFactory'),
  SkyDuelServerInterface = require('../../../shared/js/network/SkyDuelServerInterface');

/*======================================================*\
 * Globals
\*======================================================*/
var FPS = 60;

/*===================================================*\
 * SkyDuelClientGameInterface()
\*===================================================*/
var SkyDuelClientGameInterface = function() {
  this.game                   = GameControllerFactory.newInstanceOf();
  this.serverInterface        = new SkyDuelServerInterface(this.game);

  this.errorText = undefined;
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelClientGameInterface.prototype = {
  /*===========================*\
   * Methods
  \*===========================*/
  startWithRid: function (rid) {
    this.serverInterface.start(rid);
  },
  error: function (reason) {
    this.errorText = reason;

    this.game.pause();
  }
};

window.client = new SkyDuelClientGameInterface();