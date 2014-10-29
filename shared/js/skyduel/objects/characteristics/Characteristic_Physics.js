var CharacteristicBase = require('./CharacteristicBase');

/*===================================================*\
 * Characteristic_Physics()
\*===================================================*/
var Characteristic_Physics = CharacteristicBase.extend({
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
		this.verifyHas(target, ['x', 'y', 'velocity', 'angle']);
		this.verifyNotNaN(target, ['x', 'y', 'velocity', 'angle']);
		
    var res = this.applyTemp(target, elapsed);
    target.x = res.x;
    target.y = res.y;
    target.velocity = res.velocity;
    target.angle = res.angle;
  },
  applyTemp: function (target, elapsed) {
    var res = {};

    if (typeof target.velocity == 'undefined')
      throw Error('Target velocity is undefined for ', target);
    
    var v = target.velocity;
    
    if (target.hasOwnProperty('accelerater'))
      v = target.velocity + (target.accelerater * elapsed);

    res.velocity = v > this.options.VELOCITY_MAX ? this.options.VELOCITY_MAX : (v < this.options.VELOCITY_MIN ? this.options.VELOCITY_MIN : v);

    if (target.hasOwnProperty('bank'))
      res.angle = target.angle + (target.bank * elapsed);
    else
      res.angle = target.angle;

    res.x = target.x + Math.cos(res.angle) * res.velocity * elapsed;
    res.y = target.y + Math.sin(res.angle) * res.velocity * elapsed;

		if (target._force)
		{
			res.x += target._force.x * elapsed;
			res.y += target._force.y * elapsed;
		}
		
    if (isNaN(res.x))
    {
      console.log(target.type);
      console.log(elapsed);
      throw Error(res);
    }

    return res;
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Physics;