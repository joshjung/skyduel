/** @jsx React.DOM */
var FPS = 60,
  PLANE_GLOBALS = Player.prototype.GLOBALS;

var rjSkydual = React.createClass({
  checkKeyboard: function () {
    this.turnDelta = this.cursors.left.isDown * PLANE_GLOBALS.LEFT;
    this.turnDelta = this.cursors.right.isDown * PLANE_GLOBALS.RIGHT;

    this.acceleration = this.cursors.up.isDown * PLANE_GLOBALS.ACCEL;
    this.acceleration = this.cursors.down.isDown * PLANE_GLOBALS.DECEL;
  },
  sendInputToServer: function () {
    this.pomeloInput('plane', {
      turnDelta: this.turnDelta,
      acceleration: this.acceleration
    });
  },
  update: function() {
    this.checkKeyboard();
    this.sendInputToServer();
    this.player.update(1.0);
  },
  handleScreenWrap: function(){
    if(this.player.x < 0) {
      this.player.x = this.gameInfo.width;
    }
    if(this.player.x > this.gameInfo.width) {
      this.player.x = this.player.x % this.gameInfo.width;
    }
    if(this.player.y < 0) {
      this.player.y = this.gameInfo.height;
    }
    if(this.player.y > this.gameInfo.height) {
      this.player.y = this.player.y % this.gameInfo.height;
    }
  },
  componentDidMount: function () {
    this.gameInfo = undefined;

    this.controller = new window.SkyDuelController();
    this.player = new window.Player(this.controller);

    this.controller.startClient();

    window.skyduel = this;

    this.phaserCreated = false;

    this.phaser = new Phaser.Game(800,600,Phaser.AUTO, 'dPhaserOutput', {
      preload: this.phaser_preloadHandler,
      create: this.phaser_createHandler,
      update: this.phaser_updateHandler
    });

    var self = this;

    pomelo.on('onUpdate', function(data) {
      console.log('update from server!', data);
      self.player.x = data.x;
      self.player.y = data.y;
      self.player.angle = data.angle;
      self.player.velocity = data.velocity;
    });

    this.turnDelta = 0;
    this.acceleration = 0;

    setInterval(this.intervalHandler.bind(this), 1000/FPS);
  },
  start : function (gameInfo) {
    this.gameInfo = gameInfo;

    pomelo.request('skyduel.skyduelHandler.start', {
        rid: rid
      },
      function(data) {
        console.log('Pomelo skyduelHandler started up');
      });
  },
  pomeloInput: function (type, data) {
    var route = "skyduel.skyduelHandler.update";

    pomelo.request(route, {
      rid: rid,
      type: type,
      data: data
    }, function(data) {});
  },
  render: function() {
    return (
      <div id="dPhaserWrapperOutput">
        <div id="dPhaserOutput"/>
      </div>
    );
  },
  intervalHandler: function () {
    if (this.phaserCreated && this.gameInfo)
      this.update();  
  },
  phaser_preloadHandler: function (e) {
    this.phaser.load.spritesheet('aircraft', 'image/aircraft_sprite.png', 70, 63, 18);
  },
  phaser_createHandler: function (e) {
    this.cursors = this.phaser.input.keyboard.createCursorKeys();
    this.graphics = this.phaser.add.graphics(0, 0);
    this.player.sprite = this.phaser.add.sprite(100, 100, 'aircraft');
    this.phaserCreated = true;
  },
  phaser_updateHandler: function (e) {
    this.player.sprite.x = this.player.x;
    this.player.sprite.y = this.player.y;
    this.player.sprite.angle = this.player.angle + 90;
  }
});