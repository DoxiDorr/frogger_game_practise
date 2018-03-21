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

// variables for moving the cars

var carX1 = 100;
var carSX1 = 0;
var carY1 = 400;
var carWidth = 60;
var carHeight = 35;
var carX2 = 500;
var carSX2 = 60;
var carY2 = 400;
var carX3 = 460;
var carSX3 = 120;
var carY3 = 355;
var carX4 = 400;
var carSX4 = 180;
var carY4 = 310;
var carX5 = 360;
var carSX5 = 0;
var carY5 = 265;
var carX6 = 60;
var carSX6 = 120;
var carY6 = 355;
var carX7 = 100;
var carSX7 = 180;
var carY7 = 310;
var carX8 = 160;
var carSX8 = 0;
var carY8 = 265;

// variables for live Counter

var lives = 3;
var livesLost = 0;


// variable car and linked picture

var car = new Image(); car.src = "froggercars.png";

// variable to set up the goal area

var logX1 = 0;
var logY1 = 220;
var logWidth = 570;
var logHeight = 45;

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

function moveFrog() {

    // element to move frog upwards

    if (upPressed == true && up == true && y > 240) {
      y = y - 44;
      up = false;
    }
    if (upPressed == false) {
      up = true;
    }

    // element to move frog backwards

    if (downPressed == true && down == true && y + height < canvas.height - 80) {
      y = y + 44;
      down = false;
    }
    if (downPressed == false) {
      down = true;
    }

    // element to move frog to the right

    if (rightPressed == true && right == true && x + width < canvas.width -20) {
      x = x + 44;
      right = false;
    }
    if (rightPressed == false) {
      right = true;
    }

    // element to move frog to the left

    if (leftPressed == true && left == true && x > 20) {
      x = x - 44;
      left = false;
    }
    if (leftPressed == false) {
      left = true;
    }

}

// function to draw cars

function drawCars () {

  var carsSX = [carSX1, carSX2, carSX3, carSX4, carSX5, carSX6, carSX7, carSX8];
  var carsX = [carX1, carX2, carX3, carX4, carX5, carX6, carX7, carX8];
  var carsY = [carY1, carY2, carY3, carY4, carY5, carY6, carY7, carY8];

  for (i = 0; i < carsX.length; i++) {
    ctx.drawImage(car, carsSX[i], 0, 60, 35, carsX[i], carsY[i], carWidth, carHeight);
  }
}

// function to move cars around the streets

// X1,X2,X3 && X6 are cars on the first two lines

function moveCars () {
  if (carX1 < canvas.width + 100) {
    carX1 = carX1 +5;
  }
  else {
    carX1 = -100;
    carSX1 = (Math.floor(Math.random() *4)) *60;
  }

  if (carX2 < canvas.width + 100) {
    carX2 = carX2 +5;
  }
  else {
    carX2 = -100;
    carSX2 = (Math.floor(Math.random() *4)) *60;
  }

  if (carX3 < canvas.width + 100) {
    carX3 = carX3 +5;
  }
  else {
    carX3 = -100;
    carSX3 = (Math.floor(Math.random() *4)) *60;
  }

  if (carX6 < canvas.width + 100) {
    carX6 = carX6 +5;
  }
  else {
    carX6 = -100;
    carSX6 = (Math.floor(Math.random() *4)) *60;
  }

// X4,X5,X7 && X8 are cars on the second two lines in reversed direction

 if (carX4 > -100) {
   carX4 = carX4 -5;
 }
 else {
   carX4 = canvas.width + 100;
   carSX4 = (Math.floor(Math.random() *4)) *60;
 }

 if (carX5 > -100) {
   carX5 = carX5 -5;
 }
 else {
   carX5 = canvas.width + 100;
   carSX5 = (Math.floor(Math.random() *4)) *60;
 }

 if (carX7 > -100) {
   carX7 = carX7 -5;
 }
 else {
   carX7 = canvas.width + 100;
   carSX7 = (Math.floor(Math.random() *4)) *60;
 }

 if (carX8 > -100) {
   carX8 = carX8 -5;
 }
 else {
   carX8 = canvas.width + 100;
   carSX8 = (Math.floor(Math.random() *4)) *60;
 }

}

// function to handle game over

function gameOver() {
  alert("You loose! Wanna play again? Press ok!");
}

// function to implement collision

function runOver () {

  var carsX = [carX1, carX2, carX3, carX4, carX5, carX6, carX7, carX8];
  var carsY = [carY1, carY2, carY3, carY4, carY5, carY6, carY7, carY8];

  for (i = 0; i < carsX.length; i++) {
    if (carsX[i] <= x + width &&
    carsX[i] + carWidth >=  x &&
    carsY[i] + carHeight >= y &&
    carsY[i] <= y + height) {
      y = 450;
      lives -= 1;
  }
}
}

// function to count lives. Every "crash" with a car makes -1 one life

function drawLives () {
  if (lives > 0) {
    ctx.fillStyle ="white";
    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + (lives-livesLost), (canvas.width/2)-70, 525);
  } else {
    gameOver();
    window.location.reload();
  }
}

// function to draw rectangle which the frog will need to reach in order to win

function drawLogs() {
  ctx.fillStyle = "tan";
  ctx.fillRect(logX1, logY1, logWidth, logHeight);
}

// function to call drawBackground

function draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawLogs();
  drawFrog();
  moveFrog();
  drawCars();
  moveCars();
  runOver();
  requestAnimationFrame(draw);
  drawLives();
}
draw();
