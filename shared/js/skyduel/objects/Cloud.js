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
      windId: this.windId,
      rotation: this.rotation
    }, s);
    return s;
  },
  setState: function (value) {
    this._super(value);

    this.windId = value.windId;
    this.rotation = value.rotation;
  },
  /*=========================*\ 
   * Methods
  \*=========================*/
  init: function(parent, id, x, y, windId) {
    this.physicsProps = {
      VELOCITY_MAX: 200,
      VELOCITY_MIN: 0
    };
		
    this.windId = windId;

    this._super(parent, (id || this.getId()), x, 0, 0, 0);

    this.scale = 0.5 + (Math.random() * 1.0);

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