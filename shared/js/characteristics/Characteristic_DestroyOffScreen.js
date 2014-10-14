var CharacteristicBase = require('./CharacteristicBase');

/*===================================================*\
 * Characteristic_DestroyOffScreen()
\*===================================================*/
var Characteristic_DestroyOffScreen = CharacteristicBase.extend({
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    var destroy = target.x < 0 || target.x > this.options.width || target.y < 0 || target.y > this.options.height;
    if (destroy)
      target.destroy();
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_DestroyOffScreen;