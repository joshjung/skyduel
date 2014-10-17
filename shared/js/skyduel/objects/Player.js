/*===================================================*\
 * Requirements
\*===================================================*/
var GameObject = require('./GameObject'),
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
  getMetaData: function () {
    return {
        uid: player.uid,
        username: player.uid.split('*')[0],
        id: player._id,
        color: player.color,
        colorHex: player.getColorHex(),
        kills: player.kills,
        health: player.health,
        deaths: player.deaths
      };
  },
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
      destroyed: this.destroyed,
      children: this.getChildrenState(),
      kills: this.kills,
      deaths: this.deaths,
      color: this.color
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
    if (value.destroyed && !this.destroyed)
      this.destroy();
    this.destroyed = value.destroyed;
    this.kills = value.kills;
    this.deaths = value.deaths;
    this.color = value.color;

    this.messaging = undefined;

    this.setChildrenState(value.children);
  },
  /*=========================*\
   * Methods
  \*=========================*/
  init: function(parent, id, uid) {
    console.log('Initing player', this.uid);

    this._super(parent, id || this.getId());

    this.uid = uid;

    this.type = 'player';

    this.GLOBALS = {
      VELOCITY_MAX: 300,
      VELOCITY_MIN: 80,
      BANK_RATE: Math.PI / 2,
      ACCELERATION_RATE: 250,
      DECELERATION_RATE: 70,
      SMOKE_MAX: 20,
      SMOKE_START_HEALTH: 60,
      SMOKE_THRESHOLD: 5
    };

    this.bulletProps = {
      fireRate: 100,
      fireVelocity: 500
    };

    this.color = 0xFFFFFF;
    this.x = 400;
    this.y = 400;
    this.bank = 0;
    this.kills = 0;
    this.deaths = 0;
    this.accelerater = 0;
    this.health = 100;
    this.ammo = 1000;
    this.velocity = this.GLOBALS.VELOCITY_MIN;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = 15;

    this.smokes = 0;

    this.markedForDestroy = false;

    this.triggerDown = false;

    this.destroyed = false;

    this.charManager.add(new (require('./characteristics/Characteristic_Smokes'))(this.GLOBALS));
    this.charManager.add(new (require('./characteristics/Characteristic_Physics'))(this.GLOBALS));
    this.charManager.add(new (require('./characteristics/Characteristic_ScreenWrapping'))(this.world));
    this.charManager.add(new (require('./characteristics/Characteristic_ShootsBullets'))(this.bulletProps));
    this.charManager.add(new (require('./characteristics/Characteristic_Explodes'))(this.GLOBALS));
    this.charManager.add(new (require('./characteristics/Characteristic_Respawns'))(this.GLOBALS));
  },
  update: function (elapsed) {
    this._super(elapsed);

    this.bulletProps.fireVelocity = 500.0 + this.velocity;
  },
  respawn: function () {
    console.log('Respawning player', this.uid);

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
    this.markedForDestroy = false;

    this.exploded = false;
    this.destroyed = false;

    this.world.getChildren().add(this);
  },
  updatePhaser: function (phaser) {
    this._super(phaser);

    this.sprite.displayStatusRing(this.uid == window.client.uid, this.health);
  },
  buildSprite: function (phaser) {
    this.sprite = phaser.add.plane(0, 0);
  },
  newChildFromState: function (childState) {
    var bullet = new Bullet(this, childState.id);
    bullet.setState(childState);
    this.getChildren().add(bullet);
    return bullet;
  },
  destroy: function() {
    this._super();

    this.bullets = [];
    this.destroyed = true;

    if (this.sprite) {
      console.log('Destroying plane sprite', this.uid);
      this.sprite.destroy(true);
      this.sprite = null;
    }
  },
  getUsername: function () {
    return this.uid.split('*')[0];
  },
  getColorHex: function () {
    return this.componentToHex(this.color);
  },
  componentToHex: function(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  },
  getUsernameHTML: function () {
    return '<span style=\'color:#' + this.getColorHex() + '\'>' + this.getUsername() + '</span>';
  },
  hit: function (projectile, distance) {
    if (projectile.getParent() == this)
      return;
    
    this.health -= 1 * (projectile.velocity / 1000.0) * Math.max(15 - distance, 1);
    this.health = this.health < 0 ? 0 : this.health;

    if (projectile.getParent().type == 'player' && this.health <= 0 && !this.destroyed && !this.markedForDestroy)
    {
      projectile.getParent().kills++;
      this.deaths++;

      this.markedForDestroy = true;

      if (this.messaging)
      {
        var insults = ['humiliated', 'embarrassed', 'mortified', 'humbled', 'shamed', 'disgraced', 'chastened', 'deflated', 'squashed', 'abased', 'demeaned', 'degraded', 'demoted', 'belittled'];
        var ranInsult = insults[Math.floor(Math.random() * insults.length)];
        this.messaging.send('SKYDUEL', projectile.getParent().getUsernameHTML() + ' ' + ranInsult + ' ' + this.getUsernameHTML() + '!');
      }
    }
  }
});

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
module.exports = Player;