/*===================================================*\
 * Requirements
\*===================================================*/
var GameObject = require('../GameObject'),
  Bullet = require('./Bullet'),
  Smoke = require('./Smoke'),
  playerCount = 0;

/*===================================================*\
 * Player()
\*===================================================*/
var Player = GameObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getState: function() {
    if (!this.inited)
      return {};

    return {
      uid: this.uid,
      id: this._id,
      x: this.x,
      y: this.y,
      bank: this.bank,
      accelerater: this.accelerater,
      turn: this.turn,
      accel: this.accel,
      angle: this.angle,
      health: this.health,
      velocity: this.velocity,
      ammo: this.ammo,
      type: this.type,
      radius: this.radius,
      smokes: this.smokes,
      children: this.getChildrenState()
    };
  },
  setState: function(value) {
    var self = this;

    if (value.id != this.getId())
    {
      throw Error('The plane ids do not match in \'set state()\'!');
    }

    this.uid = value.uid;
    this.x = value.x;
    this.y = value.y;
    this.angle = value.angle;
    this.velocity = value.velocity;
    this.bank = value.bank;
    this.health = value.health;
    this.accelerater = value.accelerater;
    this.ammo = value.ammo;
    this.radius = value.radius;
    this.smokes = value.smokes;

    this.setChildrenState(value.children);
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function(parent, id, uid) {
    this._super(parent, id || this.getId());

    this.uid = uid;

    this.type = 'player';

    this.GLOBALS = {
      VELOCITY_MAX: 600,
      VELOCITY_MIN: 90,
      BANK_RATE: Math.PI / 2,
      ACCELERATION_RATE: 250,
      DECELERATION_RATE: 100
    };

    this.bulletProps = {
      fireRate: 100,
      fireVelocity: 500
    };

    this.x = 400;
    this.y = 400;
    this.bank = 0;
    this.accelerater = 0;
    this.health = 100;
    this.ammo = 1000;
    this.velocity = this.GLOBALS.VELOCITY_MIN;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = 15;

    this.smokes = 0;

    this.triggerDown = false;

    this.charManager.add(new (require('../characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('../characteristics/Characteristic_ScreenWrapping'))(this.world));
    this.charManager.add(new (require('../characteristics/Characteristic_ShootsBullets'))(this.bulletProps));
  },
  attemptSmokeDrop: function (elapsed) {
    var self= this;
    // Smoke drops are ONLY performed by the server
    if (typeof isClient === 'undefined' || isClient)
      return;

    if (this.health < 60 && this.smokes < 20)
    {
      var smokeDrop = (Math.random() * this.health) < 5.0;

      if (smokeDrop)
      {
        console.log('smoke', this.smokes)
        this.smokes++;
        var smoke = new Smoke(this, 'smoke' + this.randomId(), this.x, this.y, this.angle, function () {
          self.smokes--;
        });
        this.world.getChildren().add(smoke);
      }
    }
  },
  update: function (elapsed) {
    this.bulletProps.fireVelocity = 500.0 + this.velocity;

    if (typeof this.x == 'undefined' || this.x === null)
      throw Error('x is ',this.x);

    this.attemptSmokeDrop(elapsed);
    
    this._super(elapsed);
  },
  updatePhaser: function (phaser) {
    this._super(phaser);

    this.sprite.displayStatusRing(true, this.health);
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.plane(0, 0);

    window.client.gGameObjects.add(this.sprite);
  },
  newChildFromState: function (childState) {
    var bullet = new Bullet(this, childState.id);
    bullet.setState(childState);
    this.getChildren().add(bullet);
    return bullet;
  },
  destroy: function() {
    this.bullets = [];
    this.destroyed = true;

    if (this.sprite) {
      this.sprite.destroy(true);
      this.sprite = null;
    }
  },
  hit: function (projectile, distance) {
    this.health -= 1 * (projectile.velocity / 1000.0) * Math.max(15 - distance, 1);
    this.health = this.health < 0 ? 0 : this.health;
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Player;