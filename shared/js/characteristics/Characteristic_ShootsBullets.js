var Bullet = require('../gameObjects/Bullet');

/*===================================================*\
 * Characteristic_ShootsBullets()
\*===================================================*/
var Characteristic_ShootsBullets = function(options) {
  this.options = options;
  this.options.fireRate = options.fireRate || 100.0;
  this.options.fireVelocity = options.fireVelocity || 700.0;
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
    if (target.ammo <= 0)
      return;
    
    var bullet = new Bullet(target, undefined, x, y, angle, velocity);
    target.getChildren().add(bullet);
    target.ammo--;
    this.lastBulletTime = this.now;
  },
  applyTo: function (target, elapsed, cache) {
    if (!this.lastBulletTime)
      this.lastBulletTime = this.now;

    if (target.triggerDown)
    {
      var t = 0;
      
      while (t < elapsed)
      {
        this.fire(target, target.x, target.y, target.angle, this.options.fireVelocity);

        t += this.options.fireRate / 1000.0;
      }
    }
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_ShootsBullets;