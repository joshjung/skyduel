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
  /*=============================*\
   * Event
  \*=============================*/
  phaser_preloadHandler: function (e) {
    this.phaser.load.spritesheet('aircraft', 'image/aircraft_sprite.png', 70, 63, 18);
  },
  phaser_createHandler: function (e) {
    window.client.input.up = this.phaser.input.keyboard.addKey(Phaser.Keyboard.UP);
    window.client.input.down = this.phaser.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    window.client.input.left = this.phaser.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    window.client.input.right = this.phaser.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    this.graphics = this.phaser.add.graphics(0, 0);
  },
  phaser_updateHandler: function (e) {
    var self = this;

    if (window.client.started)
    {
      window.client.players.all.forEach(function (player) {
        if (!player.sprite)
          player.sprite = self.phaser.add.sprite(0,0, 'aircraft');

        player.sprite.x = player.x;
        player.sprite.y = player.y;
        //player.sprite.rotation = player.angle + 90;
      });
    }
  }
});