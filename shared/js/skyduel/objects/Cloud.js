/*===================================================*\
 * Requirements
\*===================================================*/
var PhysicsObject = require('./PhysicsObject');

/*===================================================*\
 * Cloud()
\*===================================================*/
var Cloud = PhysicsObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function (mergeWith) {
    var s = this._super(mergeWith);
    s = this.merge.recursive(true, {
      rotation: this.rotation
    }, s);
    return s;
  },
  setState: function (value) {
    this._super(value);

    this.rotation = value.rotation;
  },
  /*=========================*\ 
   * Methods
  \*=========================*/
  init: function(parent, id, x, y) {
    this.physicsProps = {
      VELOCITY_MAX: 200,
      VELOCITY_MIN: 0
    };
		
    this._super(parent, (id || this.getId()), x, y, 0, 0);

    this.scale = 0.6 + (Math.random() * 0.5);

    this.rotation = Math.random() * Math.PI * 2;

    this.type = 'cloud';

    this.charManager.add(new (require('./characteristics/Characteristic_ScreenWrapping'))(this.world));
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.cloud(0, 0);
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Cloud;