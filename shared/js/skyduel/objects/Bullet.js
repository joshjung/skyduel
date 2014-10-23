var GameObject = require('./GameObject');

/*===================================================*\
 * Bullet()
\*===================================================*/
var Bullet = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function() {
    return {
      id: this._id,
      x: this.x,
      y: this.y,
      angle: this.angle,
      velocity: this.velocity,
      radius: this.radius
    };
  },
  setState: function(value) {
    if (value.id != this.getId())
    {
      throw Error('The bullet ids do not match in \'set state()\'!');
    }

    this.x = value.x;
    this.y = value.y;
    this.angle = value.angle;
    this.velocity = value.velocity;
    this.radius = value.radius;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id, x, y, angle, velocity) {
    this._super(parent, id || this.getId());

    this.GLOBALS = {
      VELOCITY_MAX: 100000,
      VELOCITY_MIN: 0
    };

    this.x = x;
    this.y = y;
    this.angle = angle;
    this.velocity = velocity;
    this.sprite = undefined;
    this.radius = 2;

    this.type = 'bullet';

    this.charManager.add(new (require('./characteristics/Characteristic_Collides'))({callback: this.collideHandler.bind(this)}));
    this.charManager.add(new (require('./characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('./characteristics/Characteristic_DestroyOffScreen'))(this.world));
  },
  update: function (elapsed, tracker) {
    this._super(elapsed, tracker);
    
    this.charManager.applyAll(elapsed);
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.bullet(0, 0);
  },
  destroy: function () {
    this.destroyed = true;

    if (this.sprite)
      this.sprite.destroy(true);
  },
  collideHandler: function (target, distance) {
    if (target.hit)
      target.hit(this, distance);
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Bullet;