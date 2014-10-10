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
    BANK_RATE: Math.PI / 2,
    ACCELERATION_RATE: 250,
    DECELERATION_RATE: 100
  };

  this.bulletProps = {
    fireRate: 100,
    fireVelocity: 500
  }

  this.bullets = [];

  this.charManager = new CharacteristicManager(this);
  this.charManager.add(new Characteristic_Physics(this.GLOBALS));
  this.charManager.add(new Characteristic_ScreenWrapping(world));
  this.charManager.add(new Characteristic_ShootsBullets(this.bulletProps));
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
    this.accelerater = value.accelerater;

    var bById = {};
    this.bullets.forEach(function (bullet) {
      if (bById[bullet.id])
        throw Error('Bullet with id already exists!', bullet.id);
      bById[bullet.id] = bullet;
    });

    this.bullets = value.bullets.map(function (bulletState) {
      var b = bById[bulletState.id] || new Bullet(bulletState.id, self);
      b.state = bulletState;
      delete bById[bulletState.id];
      return b;
    });

    // All remaining bullets need to be destroyed.
    for (var id in bById) bById[id].destroy();
  },
  /*=========================*\
   * Methods
  \*=========================*/
  update: function (elapsed) {
    this.charManager.applyAll(elapsed);

    this.bulletProps.fireVelocity = 500.0 + this.velocity;
  },
  updateSprite: function () {
    if (this.sprite)
    {
      this.sprite.x = this.x;
      this.sprite.y = this.y;
      this.sprite.angle = this.angle * 57.2957795;

      if (this.bank < 0)
        this.sprite.frame = 2;
      else if (this.bank > 0)
        this.sprite.frame = 1;
      else this.sprite.frame = 0;
    }
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