const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
// begin hier met jouw code voor deze opdracht

let A, B, C;
let lAB, lBC, lCA;
let MAB, MBC,MAC;
let lAMBC, lBMCA, lCMAB;
let MABC;

A = new Point (100,100,50,"red", true, "A");
B = new Point (600,150,50,"green", true, "B");
C = new Point (300,300,50,"blue", true, "C");

lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);
lCA = new LinearFunction(1,1);

MAB = new Point(0,0,25,"orange", false, "AB");
MBC = new Point(0,0,25,"purple", false, "BC");
MAC = new Point(0,0,25,"pink", false, "AC");

lAMBC = new LinearFunction(2,100);
lBMCA = new LinearFunction(2,100);
lCMAB = new LinearFunction(2,100);

MABC = new Point (0,0,12.5,"black", false,"It's as easy as 123");




function anime(){
  context.clearRect(0,0,width,height);
  MAB.x = (A.x + B.x)/2;
  MAB.y = (A.y + B.y)/2;

  MBC.x = (B.x + C.x)/2;
  MBC.y = (B.y + C.y)/2;

  MAC.x = (A.x + C.x)/2;
  MAC.y = (A.y + C.y)/2;

  MABC.x = (A.x + B.x + C.x)/3;
  MABC.y = (A.y + B.y + C.y)/3;

  lAB.slope = (A.y - B.y)/(A.x - B.x);
  lAB.intercept = A.y - A.x *lAB.slope;

  lBC.slope = (B.y - C.y)/(B.x - C.x);
  lBC.intercept = B.y - B.x *lBC.slope;

  lCA.slope = (C.y - A.y)/(C.x - A.x);
  lCA.intercept = C.y - C.x *lCA.slope;

  lAB.draw(context);
  lBC.draw(context);
  lCA.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);

  MAB.draw(context);
  MBC.draw(context);
  MAC.draw(context);

  MABC.draw(context);


}

setInterval(anime, 1);
