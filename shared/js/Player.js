/*===================================================*\
 * Globals
\*===================================================*/
var DEG_RAD_RATIO = Math.PI / 180;

/*===================================================*\
 * Player()
\*===================================================*/
var Player = function(world, uid, id) {
  this.uid = uid;
  this.id = id || Math.round(Math.random() * 1000).toString(16);

  this.world = world;
};

/*===================================================*\
 * Prototype
\*===================================================*/
Player.prototype = {
  /*=========================*\
   * Variables
  \*=========================*/
  GLOBALS: {
    VELOCITY_MAX: 300,
    VELOCITY_MIN: 100,
    LEFT: -30,
    RIGHT: 30,
    ACCEL: 15,
    DECEL: -10
  },
  x: 400,
  y: 400,
  angle: 0,
  velocity: 6,
  bank: 0,
  accelerater: 0,
  /*=========================*\
   * Properties
  \*=========================*/
  get state() {
    return {
      uid: this.uid,
      id: this.id,
      x: this.x,
      y: this.y,
      bank: this.bank,
      accelerater: this.accelerater,
      turn: this.turn,
      accel: this.accel,
      angle: this.angle,
      velocity: this.velocity
    };
  },
  set state(value) {
    if (value.id != this.id)
    {
      throw Error('The plane ids do not match in \'set state()\'!');
    }

    this.uid = value.uid;
    this.x = value.x;
    this.y = value.y;
    this.angle = value.angle;
    this.velocity = value.velocity;
    this.bank = value.bank;
    this.accelerater = value.accelerater;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  update: function (elapsed) {
    var v = this.velocity + (this.accelerater * elapsed);
    this.velocity = v > this.GLOBALS.VELOCITY_MAX ? this.GLOBALS.VELOCITY_MAX : (v < this.GLOBALS.VELOCITY_MIN ? this.GLOBALS.VELOCITY_MIN : v);

    this.x += Math.cos(this.angle * DEG_RAD_RATIO) * this.velocity * elapsed;
    this.y += Math.sin(this.angle * DEG_RAD_RATIO) * this.velocity * elapsed;

    this.angle += this.bank * elapsed;

    this.wrap();
  },
  wrap: function() {
    this.x = this.x < 0 ? this.world.width : this.x;
    this.x = this.x > this.world.width ? this.x % this.world.width : this.x;
    this.y = this.y < 0 ? this.world.height : this.y;
    this.y = this.y > this.world.height ? this.y % this.world.height : this.y;
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