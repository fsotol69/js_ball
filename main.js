let canvas = document.getElementById('canvas');
let idInterval;

let ctx = canvas.getContext('2d');

let x = 50;
let y = 100;
// let ang = -45;
// let angulo = (ang * Math.PI) / 180;
let m = 0.2;
let incrX = 5;
let incrY = 5 * m;

let x_min = 10;
let x_max = 480;
let y_min = 10;
let y_max = 490;

canvas.width = 490;
canvas.height = 500;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function calculaPosicion() {
  if (x + incrX > x_max || x + incrX < x_min) {
    incrX *= -1.1;
    incrY *= 1.2;
  } else if (y + incrY < y_min || y + incrY > y_max) {
    incrX *= (1/1.2);
    incrY *= -(1/1.3);
  }
  x += incrX;
  y += incrY;
}

function pintaCirculo() {
  calculaPosicion();
  clearCanvas();

  ctx.strokeStyle = 'greenyellow';
  ctx.lineWidth = 20;

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function start() {
  idInterval = setInterval(pintaCirculo, 10);
}

function stop() {
  clearInterval(idInterval);
}
