/*===================================================*\
 * Requires
\*===================================================*/
var GameControllerBase = require('./GameControllerBase'),
	Bird = require('../objects/Bird'),
  Cloud = require('../objects/Cloud'),
  Wind = require('../objects/Wind');

/*===================================================*\
 * GameControllerArcade()
\*===================================================*/
var GameControllerArcade = module.exports = GameControllerBase.extend({
  generateWorld: function() {
    var self = this;

    this.world.setState({
      width: 1400,
      height: 1400,
      tileWidth: 50,
      tileHeight: 50,
      tiles: []
    });

    // build the world tiles
    for (var x = 0; x < this.world.width; x+= this.world.tileWidth)
    {
      this.world.tiles[x / this.world.tileWidth] = [];

      for (var y = 0; y < this.world.height; y += this.world.tileHeight)
      {
        this.world.tiles[x / this.world.tileWidth][y / this.world.tileHeight] = Math.floor(Math.random() * 3.9999);
      }
    }

    // insert fixed entities
    console.log('adding wind')
    this.world.getChildren().add(new Wind(
      this.world, 'wind-1', 
      ranX(), 
      ranY(), 
      Math.random() * Math.PI * 2, 
      Math.random() * 60 + 15, 
			3000));
			
		for (var i = 0; i < 5; i++)
	    this.world.getChildren().add(new Wind(
	      this.world, 'wind' + i, 
	      ranX(), 
	      ranY(), 
	      Math.random() * Math.PI * 2, 
	      Math.random() * 20 + 15, 
	      Math.random() * 500 + 500));

    for(var i=0; i < 20; i++)
      this.world.getChildren().add(new Bird(this.world, 'bird' + i));

    for(var i=0; i < 10; i++)
      this.world.getChildren().add(new Cloud(this.world, 'cloud' + i, ranX(), ranY()));

    function ranX() {
      return self.world.width * Math.random();
    }

    function ranY() {
      return self.world.height * Math.random();
    }
  },
	updatePhaser: function (phaser) {
		if (this.player)
		{
			this._super(phaser);
	    phaser.camera.follow(this.player.sprite);
		}
    //phaser.camera.deadzone = new Phaser.Rectangle(200, 200, 400, 200);
	}
});