const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

for (let i=0; i<100;i++){
// Point.draw(x= Math.random()*width, y = Math.random()*height, radius = Math.random(10,50));
  let x = getRandomInt(0,width);
  let y = getRandomInt(0,height);
  let radius = getRandomInt(10,50);
  let myPoint = new Point(x,y,radius,getRandomColor());

  myPoint.draw(context);
}
//for (let i=0; i<100;i++;)
  // let x = getRandomInt(0,width);
  // let y = getRandomInt(0,height);
  // let radius = getRandomInt(10,50);
  // let r = x;
  // let g = y;
  // let b = radius;
  // let a = 1;
  // let color(r + "," + g + "," + b + "," + a);
