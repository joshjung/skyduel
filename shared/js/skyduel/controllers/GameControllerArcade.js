/*===================================================*\
 * Requires
\*===================================================*/
var GameControllerBase = require('./GameControllerBase'),
	Bird = require('../objects/Bird');

/*===================================================*\
 * GameControllerArcade()
\*===================================================*/
var GameControllerArcade = module.exports = GameControllerBase.extend({
  generateWorld: function() {
    this.world.setState({
      width: 2000,
      height: 2000,
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
    for(var i=0; i < 20; i++)
      this.world.getChildren().add(new Bird(this.world, 'bird' + i));
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