var Bullet = (typeof module == 'undefined' ? Bullet : require('../Bullet'));

/*===================================================*\
 * Characteristic_ShootsBullets()
\*===================================================*/
var Characteristic_ShootsBullets = function(options) {
  this.options = options;
  this.options.fireRate = options.fireRate || 200;
  this.options.fireVelocity = options.fireVelocity || 500.0;
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_ShootsBullets.prototype = {
  /*=========================*\
   * Variables
  \*=========================*/
  lastBulletTime: undefined,
  /*=========================*\
   * Properties
  \*=========================*/
  get now() {
    return (new Date()).getTime();
  },
  /*=========================*\
   * Methods
  \*=========================*/
  fire: function (target, x, y, angle, velocity)
  {
    var bullet = new Bullet(undefined, target, x, y, angle, velocity);
    console.log('Bullet!', velocity, bullet.id);
    target.bullets.push(bullet);

    this.lastBulletTime = this.now;
  },
  applyTo: function (target, elapsed, cache) {
    target.bullets = target.bullets.filter(function (bullet) {
      return bullet.exists;
    });

    target.bullets.forEach(function (bullet) {
      bullet.update(elapsed);
    });

    if (!this.lastBulletTime)
      this.lastBulletTime = this.now;

    if (target.triggerDown)
    {
      var t = this.lastBulletTime + this.options.fireRate;
      
      while (t < this.now)
      {
        this.fire(target, target.x, target.y, target.angle, this.options.fireVelocity);

        t += this.options.fireRate;
      }
    }
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
if (typeof module != 'undefined') {
  module.exports = Characteristic_ShootsBullets;
} else {
  var Characteristic_ShootsBullets = window.Characteristic_ShootsBullets = Characteristic_ShootsBullets;
}