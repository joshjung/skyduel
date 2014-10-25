/*===================================================*\
 * Requirements
\*===================================================*/
var GameObject = require('./GameObject');

/*===================================================*\
 * PhysicsObject()
\*===================================================*/
var PhysicsObject = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function(mergeMe) {
    if (!this.inited)
      return {};

		var obj = this.merge.recursive(true, {
      x: this.x,
      y: this.y,
			radius: this.radius,
      bank: this.bank,
      accelerater: this.accelerater,
      accel: this.accel,
      angle: this.angle,
      velocity: this.velocity
    }, mergeMe);
		
    return this._super(obj);
  },
  setState: function(value) {
		this._super(value);
		
    this.x = value.x;
    this.y = value.y;
		this.radius = value.radius;
    this.angle = value.angle;
    this.velocity = value.velocity;
    this.bank = value.bank;
    this.accelerater = value.accelerater;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function(parent, id, x, y, angle, velocity, radius) {
		this._super(parent, id);
		
    this.physicsProps = this.physicsProps || {
      VELOCITY_MAX: 10000,
      VELOCITY_MIN: 0
    };
		
    this.x = x;
    this.y = y;
    this.bank = this.accelerater = 0;
    this.velocity = Math.max(this.physicsProps.VELOCITY_MIN, velocity);
    this.angle = angle;
		this.radius = radius;

		this.charManager.add(new (require('./characteristics/Characteristic_Physics'))(this.physicsProps));
  },
  update: function (elapsed, tracker) {
    this._super(elapsed, tracker);
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = PhysicsObject;