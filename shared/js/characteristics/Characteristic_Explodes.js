var CharacteristicBase = require('./CharacteristicBase'),
  PlanePart = require('../gameObjects/PlanePart');

/*===================================================*\
 * Characteristic_Explodes()
\*===================================================*/
var Characteristic_Explodes = CharacteristicBase.extend({
  /*=========================*\
   * Methods
  \*=========================*/
  applyToServerOnly: function (target, elapsed, cache) {
    if (target.health <= 0 && !target.exploded)
    {
      target.exploded = true;
      this.explode(target);
      target.destroy();
    }
  },
  explode: function (target) {
    for (var i = 0; i < 5; i++)
    {
      var part = new PlanePart(target.world, target.getId() + '_part' + i, target.x, target.y, target.angle, target.velocity, i);
      target.world.getChildren().add(part);
    }
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_Explodes;