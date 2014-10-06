/** @jsx React.DOM */
var gameFPS = 30,
  DegRadRatio = Math.PI/180,
  plane = {
    Left: -5,
    Right: 5,
    None: 0,
    Accelerate: 1,
    Decelerate: -1
  };

var rjSkydual = React.createClass({
 update: function() {
    this.player.y += Math.round(Math.sin((this.player.angle) * DegRadRatio) * this.player.velocity);
    this.player.x += Math.round(Math.cos(this.player.angle * DegRadRatio) * this.player.velocity);

    this.player.angle += this.turnDelta;

    this.player.changeVelocity(this.speedDelta);

    this.handleScreenWrap();
  },
  draw: function() {
    this.clearCanvas();
    this.drawImage(this.img, this.player.x, this.player.y, this.player.angle);
  },
  drawImage: function(img, x, y, angle) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate((angle+135) * DegRadRatio);
    this.ctx.scale(0.1,0.1);
    this.ctx.drawImage(this.img, this.img.width/2, this.img.height/2);
    this.ctx.restore();
  },
  handleScreenWrap: function(){
    if(this.player.x < 0) {
      this.player.x = this.canvas.width;
    }
    if(this.player.x > this.canvas.width) {
      this.player.x = this.player.x % this.canvas.width;
    }
    if(this.player.y < 0) {
      this.player.y = this.canvas.height;
    }
    if(this.player.y > this.canvas.height) {
      this.player.y = this.player.y % this.canvas.height;
    }
  },
  clearCanvas: function() {
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.restore();
  },
  componentDidMount: function () {
    window.skyduel = this;

    var self = this;

    pomelo.on('onUpdate', function(data) {
      console.log('update from server!', data);
      self.player.x = data.x;
      self.player.y = data.y;
      self.player.angle = data.angle;
      self.player.velocity = data.velocity;
    });

    this.canvas = document.getElementById("skyCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();

    this.img.src = 'image/plane.png';

    this.img.addEventListener("load", function() {
      self.ctx.drawImage(self.img, 0, 0);
    }, false);

    this.player = {
      x: 400,
      y: 400,
      angle: 45,
      velocity:6,
      'changeVelocity': function (delta) {
        this.velocity += delta;

        if (this.velocity > 50) {
          this.velocity = 50;
        }
        else if (this.velocity < 3) {
          this.velocity = 3;
        }
      }
    }

    this.turnDelta = 0;
    this.speedDelta = 0;

    setInterval(this.intervalHandler.bind(this), 1000/gameFPS);

    $(document).keydown(this.document_keydownHandler.bind(this));
    $(document).keyup(this.document_keyupHandler.bind(this));
  },
  start : function () {
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
    return (<canvas id="skyCanvas" width="800" height="800"> </canvas>);
  },
  intervalHandler: function () {
    this.update();
    this.draw();
  },
  document_keydownHandler: function (e) {
    this.pomeloInput(e.type, e.keyCode);

    switch (e.keyCode) {
      case 65: //Turn left
        this.turnDelta = plane.Left;
        break;
      case 68: //Turn right
        this.turnDelta = plane.Right;
        break;
      case 83: //Slow Down or D
        this.speedDelta = plane.Decelerate;
        break;
      case 87: //Speed Up or W
        this.speedDelta = plane.Accelerate;
        break;
    }
  },
  document_keyupHandler: function (e) {
    this.pomeloInput(e.type, e.keyCode);

    switch (e.keyCode) {
      case 65: //End Turn left
      case 68: //End Turn right
        this.turnDelta = plane.None;
        break;
      case 83: //Slow Down or D
      case 87: //Speed Up or W
        this.speedDelta = plane.None;
        break;
    }
  }
});