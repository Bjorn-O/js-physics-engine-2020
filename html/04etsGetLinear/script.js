const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
// begin hier met jouw code voor deze opdracht

let myPoint0 = new Point(250,250,25,getRandomColor(),true);

let myPoint1 = new Point(500,500,25,getRandomColor(),true);

let myLine = new LinearFunction(0.5,300)

console.log(myPoint1.x, myPoint0.y);

function animate() {
	context.clearRect(0,0,width,height);
	myPoint0.draw(context);
  myPoint1.draw(context);
  myLine.slope = (myPoint1.y - myPoint0.y)/(myPoint1.x - myPoint0.x);
  myLine.intercept = myPoint1.y - myLine.slope*myPoint1.x;
  myLine.draw(context);
}

setInterval(animate, 10);
