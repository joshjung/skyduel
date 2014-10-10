/*===================================================*\
 * Requirements
\*===================================================*/
var CharacteristicManager = (typeof module == 'undefined' ? CharacteristicManager : require('./characteristics/CharacteristicManager')),
Characteristic_Physics = (typeof module == 'undefined' ? Characteristic_Physics : require('./characteristics/Characteristic_Physics')),
Characteristic_ScreenWrapping = (typeof module == 'undefined' ? Characteristic_ScreenWrapping : require('./characteristics/Characteristic_ScreenWrapping')),
Characteristic_ShootsBullets = (typeof module == 'undefined' ? Characteristic_ShootsBullets : require('./characteristics/Characteristic_ShootsBullets')),
Bullet = (typeof module == 'undefined' ? Bullet : require('./Bullet'));


/*===================================================*\
 * Player()
\*===================================================*/
var Player = function(world, uid, id) {
  this.uid = uid;
  this.id = id || Math.round(Math.random() * 1000).toString(16);

  this.world = world;

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

  this.charManager = new CharacteristicManager(this);
  this.charManager.add(new Characteristic_Physics(this.GLOBALS));
  this.charManager.add(new Characteristic_ScreenWrapping(world));
  this.charManager.add(new Characteristic_ShootsBullets(world));
};

/*===================================================*\
 * Prototype
\*===================================================*/
Player.prototype = {
  /*=========================*\
   * Variables
  \*=========================*/
  x: 400,
  y: 400,
  angle: 0,
  velocity: 6,
  bank: 0,
  accelerater: 0,
  bullets: [],
  triggerDown: false,
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
      velocity: this.velocity,
      bullets: this.bullets.map(function (bullet) {
        return bullet.state;
      })
    };
  },
  set state(value) {
    var self = this;

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
    this.accelerater = value.accelerater,
    this.bullets = value.bullets.map(function (bulletState) {
      return new Bullet(bulletState.id, self.id, bulletState.x, bulletState.y, bulletState.angle);
    });
  },
  /*=========================*\
   * Methods
  \*=========================*/
  update: function (elapsed) {
    this.charManager.applyAll(elapsed);
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