var GameObject = require('./GameObject'),
$Math = require('../math/math.js');

/*===================================================*\
 * Wind()
\*===================================================*/
var Wind = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function() {
    return {
      id: this._id,
      x: this.x,
      y: this.y,
      type: this.type,
      radius: this.radius,
      velocity: this.velocity,
      angle: this.angle
    };
  },
  setState: function(value) {
    var self = this;

    if (value.id != this._id)
    {
      throw Error('The wind\'s ids do not match in \'set state()\'!');
    }

    this.x = value.x;
    this.y = value.y;
    this.angle = value.angle;
    this.velocity = value.velocity;
    this.radius = value.radius;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id, x, y, angle, velocity, radius, targetTypes) {
    this._super(parent, id || this.getId());

    this.type = 'wind';

    this.targetTypes = targetTypes || ['player', 'cloud'];
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.velocity = velocity;
    this.radius = radius;
  },
  update: function (elapsed, tracker) {
    var targets = this.getParent().getChildren().getAll(this.targetTypes),
    self = this;

    targets.forEach(function (target) {
      var windToTarget = new $Math.Point(target.x - self.x, target.y - self.y),
        strength = 1.0 - (windToTarget.length() / self.radius),
        vel = (new $Math.Point(self.angle)).multiply(self.velocity);
				
				if (strength < 0)
					return;

					console.log(strength);
				target.force(vel.multiply(strength));
    });
  },
  destroy: function (){
    console.log('wind is being destroyed');
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Wind;