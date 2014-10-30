var GameObject = require('./GameObject');

/*===================================================*\
 * PlanePart()
\*===================================================*/
var PlanePart = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function() {
    return {
      id: this._id,
      x: this.x,
      y: this.y,
      duration: this.duration,
      timeStart : this.timeStart,
      type: this.type,
      angle: this.angle,
      bank: this.bank,
      smokes: this.smokes,
      velocity: this.velocity,
      index: this.index
    };
  },
  setState: function(value) {
    if (value.id != this.getId())
    {
      throw Error('The PlanePart ids do not match in \'set state()\'!');
    }

    this.x = value.x;
    this.y = value.y;
    this.duration = value.duration;
    this.timeStart = value.timeStart;
    this.type = value.type;
    this.angle = value.angle;
    this.bank = value.bank;
    this.velocity = value.velocity;
    this.smokes = value.smokes;
    this.index = value.index;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function (parent, id, x, y, angle, velocity, index) {
    this._super(parent, id || this.getId());

    this.GLOBALS = {
      VELOCITY_MAX: 600,
      VELOCITY_MIN: 0,
      SMOKE_MAX: 5,
      SMOKE_START_HEALTH: NaN,
      SMOKE_THRESHOLD: 3
    };

    this.timeStart = (new Date()).getTime();
    this.duration = (Math.random() * 3.0 + 1.0) * 1000.0;
    this.bank = -0.3 + (Math.random() * 0.6);
    this.velocity = velocity;
    this.accelerater = -70 * Math.random();
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.health = 0;
    this.smokes = 0;
    this.index = index;
    this.rotation = 0;
    this.rotationSpeed = Math.random() * 100;

    this.sprite = undefined;

    this.type = 'planepart';

    this.charManager.add(new (require('./characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('./characteristics/Characteristic_Smokes'))(this.GLOBALS));
  },
  update:function (elapsed) {
    this._super(elapsed);

    this.rotation += this.rotationSpeed * elapsed;

    var elapsed = (new Date()).getTime() - this.timeStart,
      ratio = 1.0 - (elapsed / this.duration);

    if (ratio < 0.1)
      this.destroy();
  },
  updatePhaser: function (phaser) {
    this._super(phaser);

    var elapsed = (new Date()).getTime() - this.timeStart,
      ratio = 1.0 - (elapsed / this.duration);

    if (ratio < 0.1)
      this.destroy();
  },
  buildSprite: function (phaser) {
    console.log('plane part sprite');
    this.sprite = phaser.add.planePart(this.x, this.y, this.index);
  },
  destroy: function () {
    if (this.callback)
      this.callback();

    this.destroyed = true;

    if (this.sprite)
    {
      this.sprite.destroy(true);
      this.sprite = null;
    }
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = PlanePart;