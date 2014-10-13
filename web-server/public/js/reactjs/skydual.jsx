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
      window.client.backgroundSprite = this.phaser.add.sprite(0,0,bgs);
      var ground = this.phaser.make.sprite(0, 0, 'ground');

      for (var x = 0; x < w.width / w.tileWidth; x ++)
      {
        for (var y = 0; y < w.height / w.tileHeight; y++)
        {
          ground.frame = w.tiles[x][y];
          bgs.draw(ground, x * w.tileWidth, y * w.tileHeight);
        }
      }

      window.client.gBackground.add(window.client.backgroundSprite);
    }
  },
  updateWorld: function () {
    window.client.world.updatePhaser(this.phaser);
  },
  updateText: function () {
    if (window.client.player)
    {
      window.client.txtHealth.text = 'Health: ' + window.client.player.health + '%';
      window.client.txtAmmo.text = 'Ammo: ' + window.client.player.ammo;
    }
  },
  /*=============================*\
   * Event
  \*=============================*/
  phaser_preloadHandler: function (e) {
    this.phaser.spritesByGameObjectId = {};
    this.phaser.load.spritesheet('airplane', 'images/plane1.png', 30, 30, 3);
    this.phaser.load.spritesheet('ground', 'images/ground.png', 50, 50, 4);
    this.phaser.load.image('bird', 'images/bird.png', 14, 9);
    this.phaser.load.image('bullet', 'images/bullet.png', 2, 2);
  },
  phaser_createHandler: function (e) {
    window.client.gBackground = this.phaser.add.group();
    window.client.gGameObjects = this.phaser.add.group();
    window.client.gText = this.phaser.add.group();

    var style1 =  { font: "25px Arial", fill: "#333333", align: "center" };
    
    window.client.txtHealth = this.phaser.add.text(5, 5, 'Health: 100%', style1);
    window.client.txtAmmo = this.phaser.add.text(5, 55, 'Ammo: 100', style1);

    window.client.gText.add(window.client.txtHealth);
    window.client.gText.add(window.client.txtAmmo);
    
    window.client.input.up = this.phaser.input.keyboard.addKey(Phaser.Keyboard.UP);
    window.client.input.down = this.phaser.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    window.client.input.left = this.phaser.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    window.client.input.right = this.phaser.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    window.client.input.trigger = this.phaser.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  phaser_updateHandler: function (e) {
    if (window.client.started)
    {
      this.updateText();
      this.updateBackground();
      this.updateWorld();
    }
  }
});
