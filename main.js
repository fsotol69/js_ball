let canvas = document.getElementById('canvas');
let idInterval;

let ctx = canvas.getContext('2d');

let x = 50;
let y = 150;
let vel = 2;
let date = new Date();
let time1 = 0;

canvas.width = 500;
canvas.height = 500;

function calculaPosicion() {
  let date2 = new Date();
  let time2 = date2.getMilliseconds();

  console.log(`time1 = ${time1}  time2 = ${time2}`);

  let incr = (time2 - time1) / 1000;
  x = x + vel * incr;
  y = y + 0.5 * 9.81 * incr * incr;

  console.log(`x = ${x}  y = ${y}`);
}

function pintarCirculo() {
  ctx.strokeStyle = 'greenyellow';
  ctx.lineWidth = 20;

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  calculaPosicion();
  idInterval = setInterval(pintarCirculo, 1000);
}

function start() {
  time1 = date.getMilliseconds();
  //   calculaPosicion();
  //pintarCirculo();
  //setInterval(dibuja, 1000);
}

function stop() {
  clearInterval(idInterval);
}
