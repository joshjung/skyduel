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
          Fly: [Arrow Keys]. Shoot: [Space]
        </div>
      </div>
    );
  },
  updateBackground: function () {
    var w = window.client.game.world;

    if (w && w.width && !window.client.backgroundBitmapData)
    {
      console.log('RENDERING background');
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
  updateText: function () {
    if (window.client.player)
    {
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
    
    window.client.txtLatency = this.phaser.add.text(5, 580, 'Latency: -1', style2);

    window.client.setPhaser(this.phaser);
  },
  phaser_updateHandler: function (e) {
    if (window.client.isShowing())
    {
      this.updateText();
      this.updateBackground();
    }
  }
});
