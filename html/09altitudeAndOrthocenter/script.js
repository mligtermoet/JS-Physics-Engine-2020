const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespaces
let A,B,C,ab,bc,ca,altitudebc,altitudeab,altitudeca,S;


// create points
A = new Point(100,100,20,"red",true,"A");
B = new Point(600,150,20,"green",true,"B");
C = new Point(300,300,20,"blue",true,"C");
S = new Point(300,300,10,"purple",false,"S")

ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ca = new LinearFunction(1,1);
altitudebc = new LinearFunction(1,1);
altitudeab = new LinearFunction(1,1);
altitudeca = new LinearFunction(1,1);


function animate(){
  context.clearRect(0,0,width,height);

  context.fillStyle = "rgba(255,255,0,0.4)";
  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath()
  context.stroke();
  context.fill();
  

  ab.slope = (B.y - A.y)/(B.x - A.x);
  ab.intercept = B.y - B.x*ab.slope;
  ab.draw(context);

  bc.slope = (C.y - B.y)/(C.x - B.x);
  bc.intercept = C.y - C.x*bc.slope;
  bc.draw(context);

  ca.slope = (A.y - C.y)/(A.x - C.x);
  ca.intercept = A.y - A.x*ca.slope;
  ca.draw(context);

  altitudebc.slope = -1/bc.slope;
  altitudebc.intercept= A.y - A.x*altitudebc.slope;
  altitudebc.draw(context);

  altitudeab.slope = -1/ab.slope;
  altitudeab.intercept= C.y - C.x*altitudeab.slope;
  altitudeab.draw(context);

  altitudeca.slope = -1/ca.slope;
  altitudeca.intercept= B.y - B.x*altitudeca.slope;
  altitudeca.draw(context);

  S.x = altitudebc.intersection(altitudeab).x;
  S.y = altitudebc.intersection(altitudeab).y;
  S.draw(context);
  A.draw();
  B.draw();
  C.draw();

}


setInterval(animate,10);
