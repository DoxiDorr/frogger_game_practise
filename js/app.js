// global values

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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

};

// function to call drawBackground

function draw () {
  drawBackground();

  requestAnimationFrame(draw);
}
draw();
