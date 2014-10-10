var Bullet = (typeof module == 'undefined' ? Bullet : require('../Bullet'));

/*===================================================*\
 * Characteristic_ShootsBullets()
\*===================================================*/
var Characteristic_ShootsBullets = function(options) {
  this.options = options;
  this.options.fireRate = options.fireRate || 200;
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
  fire: function (target, x, y, angle)
  {
    console.log('Bullet!');
    var bullet = new Bullet(undefined, target.id, x, y, angle);
    target.bullets.push(bullet);

    this.lastBulletTime = this.now;
  },
  applyTo: function (target, elapsed, cache) {
    if (!this.lastBulletTime)
      this.lastBulletTime = this.now;

    if (target.triggerDown)
    {
      var t = this.lastBulletTime + this.options.fireRate;
      while (t < this.now)
      {
        this.fire(target, target.x, target.y, target.angle);

        console.log(this.options.fireRate);
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