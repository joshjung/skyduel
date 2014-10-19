var GameControllerFactory = require('../../../shared/js/skyduel/controllers/GameControllerFactory'),
  SkyDuelServerInterface = require('../../../shared/js/network/SkyDuelServerInterface'),
  UserInputReceiver = require('../../../shared/js/input/SkyDuelUserInputReceiver');

/*======================================================*\
 * Globals
\*======================================================*/
var FPS = 60;

/*===================================================*\
 * SkyDuelClientGameInterface()
\*===================================================*/
var SkyDuelClientGameInterface = function() {
  this.game                   = GameControllerFactory.newInstanceOf('0');
  this.serverInterface        = new SkyDuelServerInterface(this);

  this.errorText = undefined;
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelClientGameInterface.prototype = {
  setUID: function (value) {
    this.uid = value;
    this.game.setUsername(value);
  },
  /*===========================*\
   * Methods
  \*===========================*/
  error: function (reason) {
    this.errorText = reason;

    this.game.pause();
  },
  setPhaser: function (phaser) {
    this.phaser = phaser;
    this.game.setPhaser(phaser);
  },
  enterGame: function (rid) {
    this.serverInterface.start(rid);
  },
  pomelo_disconnectHandler: function () {
    // Reset all.
    this.game.setState(null);
  },
  setPhaser: function(phaser) {
    this.userInputReceiver = new UserInputReceiver(this, phaser);
    this.userInputReceiver.startKeyboard();
  },
  getUserInput: function () {
    return this.userInputReceiver.getUserInput();
  },
  setState: function (value) {
    this.game.setState(value);
  },
  simulateUpdate: function (userInput, elapsed) {
    this.game.clientUpdate(userInput, elapsed);
  }
};

window.client = new SkyDuelClientGameInterface();