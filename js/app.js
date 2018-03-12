// global values

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// set up game character

var frog = new Image(); frog.src = "frogger.png";
var sx = 0;
var sy = 0;
var swidth = 40;
var sheight = 40;
var x = 50;
var y = 444;
var width = 30;
var height = 30;

// set up boolean variables for pressed buttons

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var up = true;
var down = true;
var right = true;
var left = true;

// set up event listener to listen for a press on a button

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// central function to handle the event listener

function keyDownHandler(e) {
  if(e.keyCode == 39) {rightPressed = true;}
  if(e.keyCode == 37) {leftPressed = true;}
  if(e.keyCode == 38) {upPressed = true;}
  if(e.keyCode == 40) {downPressed = true;}
}


function keyUpHandler(e) {
  if(e.keyCode == 39) {rightPressed = false;}
  if(e.keyCode == 37) {leftPressed = false;}
  if(e.keyCode == 38) {upPressed = false;}
  if(e.keyCode == 40) {downPressed = false;}
}

// central function to draw canvas again and again

function drawBackground() {

  // drawing two stripes of grass

  ctx.fillStyle = "lime";
  ctx.fillRect(0, 440, 570, 45);
  ctx.fillRect(0, 220, 570, 45);

  ctx.beginPath();
  ctx.moveTo(0, 395);
  ctx.lineTo(570, 395);
  ctx.strokeStyle = "white";
  ctx.setLineDash([5]);
  ctx.strokeWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 350);
  ctx.lineTo(570, 350);
  ctx.strokeStyle = "white";
  ctx.setLineDash([5]);
  ctx.strokeWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 305);
  ctx.lineTo(570, 305);
  ctx.strokeStyle = "white";
  ctx.setLineDash([5]);
  ctx.strokeWidth = 2;
  ctx.stroke();

  // draw the water on top of the canvas - above the street

  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 570, 220);
}

// function to draw the game character

function drawFrog() {
  ctx.drawImage(frog, sx, sy, swidth, sheight, x, y, width, height);
}

// function to call drawBackground

function draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawFrog();

  if (upPressed == true && up == true) {
    y = y - 44;
    up = false;
  }
  if (upPressed == false) {
    up = true;
  }


  requestAnimationFrame(draw);
}
draw();
