/** @jsx React.DOM */
var FPS = 60,
  PLANE_GLOBALS = Player.prototype.GLOBALS;

var rjSkydual = React.createClass({
  checkKeyboard: function () {
    if (this.player) {
      this.player.angleDelta = this.cursors.left.isDown ? PLANE_GLOBALS.LEFT : 0;
      this.player.angleDelta = this.cursors.right.isDown ? PLANE_GLOBALS.RIGHT : this.player.angleDelta;

      this.player.acceleration = this.cursors.up.isDown ? PLANE_GLOBALS.ACCEL : 0;
      this.player.acceleration = this.cursors.down.isDown ? PLANE_GLOBALS.DECEL : this.player.acceleration;
    }
  },
  sendInputToServer: function () {
    this.pomeloInput('plane', {
      leftDown: this.cursors.left.isDown,
      rightDown: this.cursors.right.isDown,
      upDown: this.cursors.up.isDown,
      downDown: this.cursors.down.isDown
    });
  },
  update: function() {
    this.checkKeyboard();
    this.sendInputToServer();

    this.controller.update();
  },
  componentDidMount: function () {
    this.gameInfo = undefined;

    this.controller = new window.SkyDuelController();
    this.player = undefined;

    this.controller.startClient();

    window.skyduel = this;

    this.phaserCreated = false;

    this.phaser = new Phaser.Game(800,600,Phaser.AUTO, 'dPhaserOutput', {
      preload: this.phaser_preloadHandler,
      create: this.phaser_createHandler,
      update: this.phaser_updateHandler
    });

    var self = this;

    pomelo.on('onUpdate', this.pomelo_onUpdateHandler.bind(this));

    this.angleDelta = 0;
    this.acceleration = 0;

    setInterval(this.intervalHandler.bind(this), 1000/FPS);
  },
  start : function (gameInfo) {
    var self = this;

    this.gameInfo = gameInfo;

    pomelo.request('skyduel.skyduelHandler.start', {
        rid: rid
      },
      function(data) {
        self.uid = data.uid;
        console.log('Pomelo skyduelHandler started up', data);
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
  pomelo_onUpdateHandler: function (data) {
    var self = this;

    data.players.forEach(function (player) {
      if (self.controller.players.has(player.id))
      {
        self.controller.players.get(player.id).deserialize(player);
        self.player = (player.uid == self.uid ? _player : self.player);
      }
      else
      {
        var _player = new Player(self.controller, undefined, player.id);
        _player.deserialize(player);
        _player.sprite = self.phaser.add.sprite(_player.x, _player.y, 'aircraft');
        self.controller.players.add(_player);

        // If the server says we are controlling one of the players, assign it!
        self.player = (player.uid == self.uid ? _player : self.player);
      }
    });
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
    
    this.phaserCreated = true;
  },
  phaser_updateHandler: function (e) {
    this.controller.players.all.forEach(function (player) {
      player.sprite.x = player.x;
      player.sprite.y = player.y;
      player.sprite.angle = player.angle + 90;
    });
  }
});