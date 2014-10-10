/*===================================================*\
 * Requirements
\*===================================================*/
var CharacteristicManager = (typeof module == 'undefined' ? CharacteristicManager : require('./characteristics/CharacteristicManager')),
Characteristic_Physics = (typeof module == 'undefined' ? Characteristic_Physics : require('./characteristics/Characteristic_Physics')),
Characteristic_DestroyOffScreen = (typeof module == 'undefined' ? Characteristic_DestroyOffScreen : require('./characteristics/Characteristic_DestroyOffScreen'))

/*===================================================*\
 * Bullet()
\*===================================================*/
var Bullet = function(id, parent, x, y, angle, velocity) {
  this.id = id || Math.round(Math.random() * 100000).toString(16);
  this.parent = parent;

  this.GLOBALS = {
    VELOCITY_MAX: 100000,
    VELOCITY_MIN: 0
  };

  this.x = x;
  this.y = y;
  this.angle = angle;
  this.velocity = velocity;
  this.sprite = undefined;
  this.exists = true;

  this.charManager = new CharacteristicManager(this);
  this.charManager.add(new Characteristic_Physics(this.GLOBALS));
  this.charManager.add(new Characteristic_DestroyOffScreen(this.parent.world));
};

/*===================================================*\
 * Prototype
\*===================================================*/
Bullet.prototype = {
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
    this.charManager.applyAll(elapsed);
  },
  destroy: function () {
    this.exists = false;

    if (this.sprite)
      this.sprite.destroy(true);
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