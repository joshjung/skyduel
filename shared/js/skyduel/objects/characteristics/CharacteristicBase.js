var JClass = require('jclass');

/*===================================================*\
 * CharacteristicBase()
\*=================================================*/
var CharacteristicBase = JClass.extend({
  /*=======================*\
   * Properties
  \*=========================*/
  isServer: function () {
    return !(typeof isClient === 'undefined' || isClient)
  },
  /*=======================*\
   * Constructor
  \*=========================*/
  init: function(options) {
    this.options = options;
  },
  /*=======================*\
   * Methods
  \*=======================*/
	verifyHas: function (target, props) {
		for (var key in props)
		{
			var prop = props[key];

			if (!target.hasOwnProperty(prop))
				throw Error('Target ' + target.type + ' does not have \'' + prop +'\'');
		}
	},
	verifyNotNaN: function (target, props) {
		for (var key in props)
		{
			var prop = props[key];

			if (isNaN(target[prop]))
				throw Error('Target ' + target.type + ' has NaN prop \'' + prop +'\'');
		}
	},
  applyTo: function () {
    if (this.applyToServerOnly && this.isServer)
    {
      this.applyToServerOnly.apply(this, arguments);
      return;
    }
    
    if (this.applyToClientOnly && !this.isServer)
    {
      this.applyToClientOnly.apply(this, arguments);
      return;
    }

    console.log('Please override CharacteristicBase::applyTo', this);
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = CharacteristicBase;