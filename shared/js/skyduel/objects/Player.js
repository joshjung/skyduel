/*===================================================*\
 * Requirements
\*===================================================*/
var PhysicsObject = require('./PhysicsObject'),
  Bullet = require('./Bullet'),
  Smoke = require('./Smoke'),
  playerCount = 0;

/*===================================================*\
 * Player()
\*===================================================*/
var Player = PhysicsObject.extend({
  /*=========================*\
   * Properties
  \*=========================*/
  getMetaData: function () {
    return {
        username: this.username.split('*')[0],
        id: this._id,
        color: this.color,
        colorHex: this.getColorHex(),
        kills: this.kills,
        health: this.health,
        deaths: this.deaths,
        latency: this.latency
      };
  },
  getState: function() {
    if (!this.inited)
      return {};

		var state = this._super({
      username: this.username,
      health: this.health,
      ammo: this.ammo,
      smokes: this.smokes,
      destroyed: this.destroyed,
      kills: this.kills,
      deaths: this.deaths,
      color: this.color
    });
		
    return state;
  },
  setState: function(value) {
    var self = this;
		
		this._super(value);

    if (value.id != this.getId())
    {
      throw Error('The plane ids do not match in \'set state()\'!');
    }

    this.username = value.username;
    this.health = value.health;
    this.ammo = value.ammo;
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
  init: function(parent, id, username) {
    if (!username)
      throw Error('Username is not provided to new player!', this);

    this.physicsProps = {
      VELOCITY_MAX: 200,
      VELOCITY_MIN: 70,
      BANK_RATE: Math.PI / 2,
      ACCELERATION_RATE: 250,
      DECELERATION_RATE: 70,
    };
			
    this._super(parent, (id || this.getId()), 400, 400, Math.random() * Math.PI * 2, 0, 15);

    this.username = username;

    this.type = 'player';
		
    this.bulletProps = {
      fireRate: 100,
      fireVelocity: 500
    };

    this.color = 0xFFFFFF;
    this.bank = this.kills = this.deaths = this.accelerater = this.smokes = 0;
    this.health = 100;
    this.ammo = 1000;

    this.markedForDestroy = this.triggerDown = this.destroyed = false;

    this.charManager.add(new (require('./characteristics/Characteristic_Smokes'))({
				SMOKE_MAX: 20,
	      SMOKE_START_HEALTH: 60,
	      SMOKE_THRESHOLD: 5
			}));
    this.charManager.add(new (require('./characteristics/Characteristic_ScreenWrapping'))(this.world));
    this.charManager.add(new (require('./characteristics/Characteristic_ShootsBullets'))(this.bulletProps));
    this.charManager.add(new (require('./characteristics/Characteristic_Explodes'))());
    this.charManager.add(new (require('./characteristics/Characteristic_Respawns'))());
  },
  update: function (elapsed, tracker) {
    this._super(elapsed, tracker);

    this.bulletProps.fireVelocity = 500.0 + this.velocity;
  },
  respawn: function () {
    this.x = this.y = 400;
    this.bank = this.accelerater = this.smokes = 0;
    this.health = 100;
    this.ammo = 1000;
    this.velocity = this.physicsProps.VELOCITY_MIN;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = 15;

    this.markedForDestroy = this.exploded = this.destroyed = false;

    this.world.getChildren().add(this);
  },
  updatePhaser: function (phaser) {
    this._super(phaser);

    this.sprite.displayStatusRing(this.username == window.client.username, this.health);
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
      console.log('Destroying plane sprite', this.username);
      this.sprite.destroy(true);
      this.sprite = null;
    }
  },
  getUsername: function () {
    return this.username.split('*')[0];
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