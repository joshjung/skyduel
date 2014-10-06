/*===================================================*\
 * Globals
\*===================================================*/
var DEG_RAD_RATIO = Math.PI / 180;

/*===================================================*\
 * Player()
\*===================================================*/
var Player = function(controller) {
  this.id = Math.random();

  this.controller = controller;
  console.log('NEW PLAYER()');
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
  input: undefined,
  x: 400,
  y: 400,
  angle: 0,
  velocity: 6,
  turn: 0,
  accel: 0,
  update: function (elapsed) {
    if (this.input) // For server only
    {
      this.turn = this.input.leftDown ? this.GLOBALS.LEFT : 0;
      this.turn = this.input.rightDown ? this.GLOBALS.RIGHT : this.turn;

      this.accel = this.input.upDown ? this.GLOBALS.ACCEL : 0;
      this.accel = this.input.downDown ? this.GLOBALS.DECEL : this.accel;
    }

    var v = this.velocity + (this.accel * elapsed);
    this.velocity = v > this.GLOBALS.VELOCITY_MAX ? this.GLOBALS.VELOCITY_MAX : (v < this.GLOBALS.VELOCITY_MIN ? this.GLOBALS.VELOCITY_MIN : v);

    this.x += Math.cos(this.angle * DEG_RAD_RATIO) * this.velocity * elapsed;
    this.y += Math.sin((this.angle) * DEG_RAD_RATIO) * this.velocity * elapsed;

    console.log('turn', this.turn);

    this.angle += this.turn;

    this.wrap();
  },
  wrap: function() {
    this.x = this.x < 0 ? this.controller.bounds.width : this.x;
    this.x = this.x > this.controller.bounds.width ? this.x % this.controller.bounds.width : this.x;
    this.y = this.y < 0 ? this.controller.bounds.height : this.y;
    this.y = this.y > this.controller.bounds.height ? this.y % this.controller.bounds.height : this.y;
  },
  serialize: function () {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      angle: this.angle,
      velocity: this.velocity,
      turn: this.turn,
      accel: this.accel
    };
  },
  deserialize: function (data) {
    this.x = data.x;
    this.y = data.y;
    this.angle = data.angle;
    this.velocity = data.velocity;
    this.turn = data.turn;
    this.accel = data.accel;
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