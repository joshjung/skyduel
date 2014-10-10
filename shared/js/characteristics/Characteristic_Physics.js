/*===================================================*\
 * Characteristic_Physics()
\*===================================================*/
var Characteristic_Physics = function(options) {
  this.options = options;
};

/*===================================================*\
 * Prototype
\*===================================================*/
Characteristic_Physics.prototype = {
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    if (typeof target.velocity == 'undefined')
      throw Error('Target velocity is undefined for ', target);
    
    var v = target.velocity;
    if (target.hasOwnProperty('accelerater'))
      v = target.velocity + (target.accelerater * elapsed);
    target.velocity = v > this.options.VELOCITY_MAX ? this.options.VELOCITY_MAX : (v < this.options.VELOCITY_MIN ? this.options.VELOCITY_MIN : v);

    if (target.hasOwnProperty('bank'))
      target.angle += target.bank * elapsed;

    target.x += Math.cos(target.angle) * target.velocity * elapsed;
    target.y += Math.sin(target.angle) * target.velocity * elapsed;
  }
};

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
if (typeof module != 'undefined') {
  module.exports = Characteristic_Physics;
} else {
  var Characteristic_Physics = window.Characteristic_Physics = Characteristic_Physics;
}