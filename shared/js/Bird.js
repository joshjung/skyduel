/*===================================================*\
 * Requirements
\*===================================================*/
var CharacteristicManager         = (typeof module == 'undefined' ? CharacteristicManager         : require('./characteristics/CharacteristicManager')),
    Characteristic_Physics        = (typeof module == 'undefined' ? Characteristic_Physics        : require('./characteristics/Characteristic_Physics')),
    Characteristic_ScreenWrapping = (typeof module == 'undefined' ? Characteristic_ScreenWrapping : require('./characteristics/Characteristic_ScreenWrapping'));

/*===================================================*\
 * Bird()
\*===================================================*/
var Bird = function (world, id) {
  this.world = world;

  this.id = id || Math.round(Math.random() * 1000).toString(16);

  this.x = Math.random() * world.width;
  this.y = Math.random() * world.height;
  this.angle = Math.random() * Math.PI * 2;
  this.bank = this.randomizedBank();
  this.velocity = 25 + Math.random() * 10;
  this.scale = (Math.random() * 0.4) + 0.1;

  this.GLOBALS = {
    VELOCITY_MAX: Bird.velocity,
    VELOCITY_MIN: Bird.velocity,
  };

  this.charManager = new CharacteristicManager(this);
  this.charManager.add(new Characteristic_Physics(this.GLOBALS));
  this.charManager.add(new Characteristic_ScreenWrapping(world));
};

/*===================================================*\
 * Prototype
\*===================================================*/
Bird.prototype = {
  /*=========================*\
   * Variables
  \*=========================*/
  angle: 0,
  bank: 0,
  /*=========================*\
   * Properties
  \*=========================*/
  get state() {
    return {
      id: this.id,
      x: this.x,
      y: this.y,
      bank: this.bank,
      angle: this.angle,
      velocity: this.velocity,
      scale: this.scale
    };
  },
  set state(value) {
    var self = this;

    if (value.id != this.id)
    {
      throw Error('The bird\'s ids do not match in \'set state()\'!');
    }

    this.x = value.x;
    this.y = value.y;
    this.angle = value.angle;
    this.velocity = value.velocity;
    this.bank = value.bank;
    this.scale = value.scale;
  },
  /*=========================*\
   * Methods
  \*=========================*/
  update: function (elapsed) {
    this.charManager.applyAll(elapsed);
    
    // TODO: encapsulate bird AI
    
    // birds have a 1/200 chance of changing the bank every frame
    if(Math.random() < 0.005)
      this.bank = this.randomizedBank();
  },

  updateSprite: function () {
    if (this.sprite)
    {
      this.sprite.x = this.x;
      this.sprite.y = this.y;
      this.sprite.angle = this.angle * 57.2957795;
      this.sprite.scale.x = this.sprite.scale.y = this.scale;
      // TODO: need a spritesheet 
      //if (this.bank < 0)
        //this.sprite.frame = 2;
      //else if (this.bank > 0)
        //this.sprite.frame = 1;
      //else this.sprite.frame = 0;
    }
  },

  randomizedBank: function() {
    // value in the range [-1.0, 1.0] 
    var bankFactor = (Math.random() - 0.5) * 2.0;
    // the maximum bank angle 
    var bankMagnitude = Math.PI / 2.0;
    // scale the magnitude by the randomized factor
    return bankFactor * bankMagnitude; 
  }
}

/*===================================================*\
 * Export (nodejs and browser agent)
\*===================================================*/
if (typeof module != 'undefined') {
  module.exports = Bird;
} else {
  var Bird = window.Bird = Bird;
}