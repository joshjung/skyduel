/*===================================================*\
 * Globals
\*===================================================*/
var UA = require('./SkyDuelUserActions');

/*===================================================*\
 * SkyDuelUserInputReceiver()
\*===================================================*/
var SkyDuelUserInputReceiver = function(game, phaser) {
  this.game = game;
  this.phaser = phaser;
  this.input = {};
};

/*===================================================*\
 * Prototype
\*===================================================*/
SkyDuelUserInputReceiver.prototype = {
  /*===========================*\
   * Methods
  \*===========================*/
  getUserInput: function() {
    return  {
      up: (this.input.up ? this.input.up.isDown : false),
      down: (this.input.down ? this.input.down.isDown : false),
      left: (this.input.left ? this.input.left.isDown : false),
      right: (this.input.right ? this.input.right.isDown : false),
      trigger: (this.input.trigger ? this.input.trigger.isDown : false)
    };
  },
  startKeyboard: function () {
    this.input.up = this.phaser.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.input.down = this.phaser.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.input.left = this.phaser.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.input.right = this.phaser.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.input.trigger = this.phaser.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  stopKeyboard: function () {
    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.UP);
    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.DOWN);
    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.LEFT);
    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.RIGHT);
    this.phaser.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
  },
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = SkyDuelUserInputReceiver;