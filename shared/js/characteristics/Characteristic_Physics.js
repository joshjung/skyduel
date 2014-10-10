/*===================================================*\
 * Globals
\*===================================================*/
var DEG_RAD_RATIO = Math.PI / 180.0;

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
    var v = target.velocity + (target.accelerater * elapsed);
    target.velocity = v > this.options.VELOCITY_MAX ? this.options.VELOCITY_MAX : (v < this.options.VELOCITY_MIN ? this.options.VELOCITY_MIN : v);

    target.x += Math.cos(target.angle * DEG_RAD_RATIO) * target.velocity * elapsed;
    target.y += Math.sin(target.angle * DEG_RAD_RATIO) * target.velocity * elapsed;

    target.angle += target.bank * elapsed;
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