var CharacteristicBase = require('./CharacteristicBase'),
  Smoke = require('../gameObjects/Smoke');

/*===================================================*\
 * Characteristic_Smokes()
\*===================================================*/
var Characteristic_Smokes = CharacteristicBase.extend({
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
    this.attemptSmokeDrop(target, elapsed);
  },
  attemptSmokeDrop: function (target, elapsed) {
    var self= this;
    // Smoke drops are ONLY performed by the server
    if (typeof isClient === 'undefined' || isClient)
      return;

    if ((isNaN(this.options.SMOKE_START_HEALTH) || target.health < this.options.SMOKE_START_HEALTH) && target.smokes < this.options.SMOKE_MAX)
    {
      var compare = isNaN(this.options.SMOKE_START_HEALTH) ? 1.0 : target.health,
        smokeDrop = (Math.random() * compare) < this.options.SMOKE_THRESHOLD;

      if (smokeDrop)
      {
        var smoke = new Smoke(target, 'smoke' + target.randomId(), target.x, target.y, target.angle, this.smokeFadeHandler.bind(this, target));
        target.smokes++;
        target.world.getChildren().add(smoke);
      }
    }
  },
  smokeFadeHandler: function (target) {
    target.smokes--;
  }
})

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Smokes;