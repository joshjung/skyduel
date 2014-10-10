/** @jsx React.DOM */
/*======================================================*\
 * rjSkyDuel
\*======================================================*/
var rjSkyduel = React.createClass({
  /*=============================*\
   * Methods
  \*=============================*/
  componentDidMount: function () {
    this.phaser = new Phaser.Game(800,600,Phaser.AUTO, 'dPhaserOutput', {
      preload: this.phaser_preloadHandler,
      create: this.phaser_createHandler,
      update: this.phaser_updateHandler
    });
  },
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="dPhaserWrapperOutput" className="col-sm-6 col-md-8 col-md-offset-2">
            <div id="dPhaserOutput"/>
          </div>
        </div>
      </div>
    );
  },
  updateBackground: function () {
    var w = window.client.world;

    if (w && !window.client.backgroundBitmapData)
    {
      var bgs = window.client.backgroundBitmapData = this.phaser.add.bitmapData(w.width, w.height);
      bgs.addToWorld();
      var ground = this.phaser.make.sprite(0, 0, 'ground');

      for (var x = 0; x < w.width / w.tileWidth; x ++)
      {
        for (var y = 0; y < w.height / w.tileHeight; y++)
        {
          ground.frame = w.tiles[x][y];
          bgs.draw(ground, x * w.tileWidth, y * w.tileHeight);
        }
      }
    }
  },
  updatePlayers: function () {
    var self = this;

    window.client.players.all.forEach(function (player) {
        if (!player.sprite)
        {
          player.sprite = self.phaser.add.sprite(0,0, 'aircraft');
          player.sprite.anchor.set(0.5);
        }

        player.bullets.forEach(function (bullet) {
          var bs = bullet.sprite;
          if (!bs)
          {
            bullet.sprite = bs = self.phaser.add.sprite(0, 0, 'bullet');
            bs.anchor.set(0.5);
          }
          
          bs.x = bullet.x;
          bs.y = bullet.y;
        });

        player.updateSprite();
      });
  },
  /*=============================*\
   * Event
  \*=============================*/
  phaser_preloadHandler: function (e) {
    this.phaser.load.spritesheet('aircraft', 'images/plane1.png', 30, 30, 3);
    this.phaser.load.spritesheet('ground', 'images/ground.png', 50, 50, 4);
    this.phaser.load.image('bullet', 'images/bullet.png', 2, 2);
  },
  phaser_createHandler: function (e) {
    window.client.input.up = this.phaser.input.keyboard.addKey(Phaser.Keyboard.UP);
    window.client.input.down = this.phaser.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    window.client.input.left = this.phaser.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    window.client.input.right = this.phaser.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    window.client.input.trigger = this.phaser.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  phaser_updateHandler: function (e) {
    if (window.client.started)
    {
      this.updateBackground();
      this.updatePlayers();
    }
  }
});