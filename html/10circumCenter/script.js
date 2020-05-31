const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let A,B,C,ab,bc,ca,mAB,mBC,mCA,lAB,lBC,lCA,circumCenter,distance;
A = new Point(0.10 * width,0.10*height,20,"red",true,"A");
B = new Point(0.90 * width,0.10*height,20,"green",true,"B");
C = new Point(0.50 * width,0.90*height,20,"blue",true,"C");
ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ca = new LinearFunction(1,1);

mAB = new Point(10,10,10,"black",false,"mAB");
mBC = new Point(10,10,10,"black",false,"mBC");
mCA = new Point(10,10,10,"black",false,"mCA");

lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);
lCA = new LinearFunction(1,1);

circumCenter = new Point(10,10,10,"grey",false,"circumCenter")


function animate(){
  context.clearRect(0,0,width,height);
  context.beginPath();
  context.fillStyle = "rgba(255,255,0,0.2)";
  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath();
  context.stroke();
  context.fill();

  ab.slope = (B.y - A.y) / (B.x - A.x);
  ab.intercept = B.y - B.x*ab.slope;
  ab.draw(context);

  bc.slope = (B.y - C.y) / (B.x -C.x);
  bc.intercept = B.y - B.x*bc.slope;
  bc.draw(context);

  ca.slope = (C.y - A.y) / (C.x - A.x);
  ca.intercept = C.y - C.x*ca.slope;
  ca.draw(context);

  A.draw();
  B.draw();
  C.draw();

  mAB.x = (A.x + B.x)/2;
  mAB.y = (A.y + B.y)/2;
  mAB.draw(context);

  mBC.x = (B.x + C.x)/2;
  mBC.y = (B.y + C.y)/2;
  mBC.draw(context);

  mCA.x = (C.x + A.x)/2;
  mCA.y = (C.y + A.y)/2;
  mCA.draw(context);

  lAB.slope = -1/ab.slope;
  lAB.intercept = mAB.y - mAB.x*lAB.slope;
  lAB.draw(context);

  lBC.slope = -1/bc.slope;
  lBC.intercept = mBC.y - mBC.x*lBC.slope;
  lBC.draw(context);

  lCA.slope = -1/ca.slope;
  lCA.intercept = mCA.y - mCA.x*lCA.slope;
  lCA.draw(context);

  circumCenter.x = lAB.intersection(lBC).x;
  circumCenter.y = lAB.intersection(lBC).y;

  let dx = circumCenter.x - A.x;
  let dy = circumCenter.y - A.y;
  distance = Math.sqrt(dx*dx + dy*dy);

  circumCenter.draw();
  context.beginPath();
  context.arc(circumCenter.x,circumCenter.y,distance,0,2*Math.PI);
  context.stroke();
}

setInterval(animate,10);