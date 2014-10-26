var GameObject = require('./GameObject');

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
    this.type = value.type;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id, x, y, angle, velocity, radius) {
    this._super(parent, id || this.getId());

    this.type = 'wind';

    this.x = x;
    this.y = y;
    this.angle = angle;
    this.velocity = velocity;
    this.radius = 3;
  },
  apply: function (target, elapsed) {
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var dis = Math.sqrt(dx * dx + dy * dy);
    var strength = Math.min(0, radius - dis);

    var velX = this.velocity * Math.cos(this.angle);
    var velY = this.velocity * Math.sin(this.angle);

    var tVelX = target.velocity * Math.cos(this.angle);
    var tVelY = target.velocity * Math.sin(this.angle);

    var dot = velX * tVelX + velY * tVelY;

  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Wind;
