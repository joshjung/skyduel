/*===================================================*\
 * Globals
\*===================================================*/
var DEG_RAD_RATIO = Math.PI / 180;

/*===================================================*\
 * Player()
\*===================================================*/
var Player = function(controller) {
  this.controller = controller;
};

/*===================================================*\
 * Methods
\*===================================================*/
Player.prototype = {
  GLOBALS: {
    VELOCITY_MAX: 50,
    VELOCITY_MIN: 10,
    LEFT: -5,
    RIGHT: 5,
    ACCEL: 1,
    DECEL: -1
  },
  x: 400,
  y: 400,
  angle: 0,
  velocity: 6,
  angleDelta: 0,
  acceleration: 0,
  update: function (elapsed) {
    var v = this.velocity + (this.acceleration * elapsed);
    this.velocity = v > this.GLOBALS.VELOCITY_MAX ? this.GLOBALS.VELOCITY_MAX : (v < this.GLOBALS.VELOCITY_MIN ? this.GLOBALS.VELOCITY_MIN : v);

    this.x += Math.round(Math.cos(this.angle * DEG_RAD_RATIO) * this.velocity) * elapsed;
    this.y += Math.round(Math.sin((this.angle) * DEG_RAD_RATIO) * this.velocity) * elapsed;

    this.angle += this.angleDelta;

    this.wrap();
  },
  wrap: function() {
      this.x = this.x < 0 ? this.controller.bounds.width : this.x;
      this.x = this.x > this.controller.bounds.width ? this.x % this.controller.bounds.width : this.x;
      this.y = this.y < 0 ? this.controller.bounds.height : this.y;
      this.y = this.y > this.controller.bounds.height ? this.y % this.controller.bounds.height : this.y;
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
if (typeof module != 'undefined') {
  module.exports = Player;
} else {
  var Player = window.Player = Player;
}