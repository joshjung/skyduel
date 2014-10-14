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
      <div className="panel">
        <div>
          <div id="dPhaserWrapperOutput">
            <div id="dPhaserOutput"/>
          </div>
        </div>
        <div className="instructions">
          Fly: [Arrow Keys]. Shoot: [Control]
        </div>
      </div>
    );
  },
  updateBackground: function () {
    var w = window.client.world;

    if (w && w.width && !window.client.backgroundBitmapData)
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
      window.client.txtHealth.text = 'Health: ' + Math.round(window.client.player.health) + '%';
      window.client.txtAmmo.text = 'Ammo: ' + window.client.player.ammo;
      window.client.txtKills.text = 'Kills: ' + Math.round(window.client.player.kills);
      window.client.txtDeaths.text = 'Deaths: ' + window.client.player.deaths;
      window.client.txtLatency.text = 'Latency: ' + Math.round(window.client.latencyAnalyzer.latencySample);
    }
  },
  /*=============================*\
   * Event
  \*=============================*/
  phaser_preloadHandler: function (e) {
    this.phaser.spritesByGameObjectId = {};
    this.phaser.load.spritesheet('airplane', 'images/plane1.png', 30, 30, 3);
    this.phaser.load.spritesheet('planeparts', 'images/planeparts.png', 15, 15, 5);
    this.phaser.load.spritesheet('ground', 'images/ground.png', 50, 50, 4);
    this.phaser.load.spritesheet('smoke', 'images/smoke.png', 12, 10, 4);

    this.phaser.load.image('bird', 'images/bird.png', 14, 9);
    this.phaser.load.image('bullet', 'images/bullet.png', 2, 2);
  },
  phaser_createHandler: function (e) {
    window.client.gBackground = this.phaser.add.group();
    window.client.gGameObjects = this.phaser.add.group();
    window.client.gText = this.phaser.add.group();

    var style1 =  { font: "22px Arial", fill: "#111111", align: "center" };
    var style2 =  { font: "12px Arial", fill: "#111111", align: "right" };
    
    window.client.txtHealth = this.phaser.add.text(5, 5, 'Health: 100%', style1);
    window.client.txtAmmo = this.phaser.add.text(5, 25, 'Ammo: 100', style1);
    window.client.txtKills = this.phaser.add.text(5, 45, 'Kills: 0', style1);
    window.client.txtDeaths = this.phaser.add.text(5, 65, 'Deaths: 0', style1);
    window.client.txtLatency = this.phaser.add.text(5, 580, 'Latency: -1', style2);

    window.client.gText.add(window.client.txtHealth);
    window.client.gText.add(window.client.txtAmmo);
    
    window.client.input.up = this.phaser.input.keyboard.addKey(Phaser.Keyboard.UP);
    window.client.input.down = this.phaser.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    window.client.input.left = this.phaser.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    window.client.input.right = this.phaser.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    window.client.input.trigger = this.phaser.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
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
