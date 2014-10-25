var CharacteristicBase = require('./CharacteristicBase'),
  Smoke = require('../Smoke');

/*===================================================*\
 * Characteristic_WorldEdgeWind()
\*===================================================*/
var Characteristic_WorldEdgeWind = CharacteristicBase.extend({
	init: function (settings) {
		this._super(settings);
		
		this.settings = settings || {};
		
		this.settings.applyToTypes = ['player'];
	},
  /*=========================*\
   * Methods
  \*=========================*/
  applyTo: function (target, elapsed, cache) {
		if (target.type != "world")
			throw Error('Characteristic_WorldEdgeWind can only be applied to the World object.');
		
		target.forEach(function (windee) {
			windee.
		}, this.settings.applyToTypes)
  }
})

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Characteristic_WorldEdgeWind;