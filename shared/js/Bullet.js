/*===================================================*\
 * Requirements
\*===================================================*/
var CharacteristicManager = (typeof module == 'undefined' ? CharacteristicManager : require('./characteristics/CharacteristicManager')),
Characteristic_Physics = (typeof module == 'undefined' ? Characteristic_Physics : require('./characteristics/Characteristic_Physics')),
Characteristic_ScreenWrapping = (typeof module == 'undefined' ? Characteristic_ScreenWrapping : require('./characteristics/Characteristic_ScreenWrapping'))

/*===================================================*\
 * Bullet()
\*===================================================*/
var Bullet = function(id, ownerId, x, y, angle) {
  this.id = id || Math.round(Math.random() * 1000).toString(16);
  this.ownerId=ownerId;

  this.GLOBALS = {
    VELOCITY_MAX: 600,
    VELOCITY_MIN: 90,
    BANK_RATE: 160,
    ACCELERATION_RATE: 250,
    DECELERATION_RATE: 100,
    LEFT: -30,
    RIGHT: 30,
    ACCEL: 15,
    DECEL: -10
  };

  this.x = x;
  this.y = y;
  this.angle = angle;
  
  this.charManager = new CharacteristicManager(this);
  this.charManager.add(new Characteristic_Physics(this.GLOBALS));
};

/*===================================================*\
 * Prototype
\*===================================================*/
Bullet.prototype = {
  /*=========================*\
   * Variables
  \*=========================*/
  velocity: -50,
  /*=========================*\
   * Properties
  \*=========================*/
  get state() {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      angle: this.angle,
      velocity: this.velocity
    };
  },
  set state(value) {
    if (value.id != this.id)
    {
      throw Error('The bullet ids do not match in \'set state()\'!');
    }

    this.x = value.x;
    this.y = value.y;
    this.angle = value.angle;
    this.velocity = value.velocity;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  update: function (elapsed) {
    //this.charManager.applyAll(elapsed);
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
if (typeof module != 'undefined') {
  module.exports = Bullet;
} else {
  var Bullet = window.Bullet = Bullet;
}