const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
// begin hier met jouw code voor deze opdracht

let A, B, C, l, m;

A = new Point(25,25,20,getRandomColor(), true);
B = new Point(1200,900,20,getRandomColor(), true);
C = new Point(1600,450,20,getRandomColor(), true);
l = new LinearFunction(-0.5,0);

m = new LinearFunction(1,1);

function anime(){
context.clearRect(0,0,width,height);
A.draw(context);
B.draw(context);
C.draw(context);

m.Draw(context);

m.slope = -1/l.slope;
m.intercept = C.y - C.x * m.slope;

l.slope = (B.y - A.y)/(B.x - A.x);
l.intercept = B.y - B.x * l.slope;
l.Draw(context);
}


setInterval(anime, .5);
