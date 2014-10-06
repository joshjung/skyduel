var gameFPS = 30;
var DegRadRatio = Math.PI/180;
var plane = {
  Left: -5,
  Right: 5,
  None: 0,
  Accelerate: 1,
  Decelerate: -1
}

$(document).ready(function() {
  var canvas = document.getElementById("skyCanvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = 'image/plane.png';
  img.addEventListener("load", function() {
    ctx.drawImage(img, 0, 0);
  }, false);

  var player = {
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

  var turnDelta = 0;
  var speedDelta = 0;

  setInterval(function(){
    update();
    draw();
  }, 1000/gameFPS);

  $(document).keydown(function(e) {
    switch (e.keyCode) {
      case 65: //Turn left
        turnDelta = plane.Left;
        break;
      case 68: //Turn right
        turnDelta = plane.Right;
        break;
      case 83: //Slow Down or D
        speedDelta = plane.Decelerate;
        break;
      case 87: //Speed Up or W
        speedDelta = plane.Accelerate;
        break;
    }
  });
  $(document).keyup(function(e) {
    switch (e.keyCode) {
      case 65: //End Turn left
      case 68: //End Turn right
        turnDelta = plane.None;
        break;
      case 83: //Slow Down or D
      case 87: //Speed Up or W
        speedDelta = plane.None;
        break;
    }
  });


  function update() {
    player.y += Math.round(Math.sin((player.angle) * DegRadRatio) * player.velocity);
    player.x += Math.round(Math.cos(player.angle * DegRadRatio) * player.velocity);
    player.angle += turnDelta;
    player.changeVelocity(speedDelta);
    handleScreenWrap();
  }

  function draw() {
    clearCanvas();
    drawImage(img, player.x, player.y, player.angle);
  }

  function handleScreenWrap(){
    if(player.x < 0) {
      player.x = canvas.width;
    }
    if(player.x > canvas.width) {
      player.x = player.x % canvas.width;
    }
    if(player.y < 0) {
      player.y = canvas.height;
    }
    if(player.y > canvas.height) {
      player.y = player.y % canvas.height;
    }
  }

  function drawImage(img, x, y, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((angle+135) * DegRadRatio);
    ctx.scale(0.1,0.1);
    ctx.drawImage(img, -(img.width/2), -(img.height/2));
    ctx.restore();
  }
  function clearCanvas() {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }
});



      