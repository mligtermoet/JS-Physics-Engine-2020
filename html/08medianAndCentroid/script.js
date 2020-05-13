const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespaces
let A,B,C;
let lAB,lBC,lCA;
let MAB,MBC,MCA;
let lAMBC,lBMCA,lCMAB;
let s;

// create points
A = new Point(100,100,20,"red",true);
B = new Point(600,150,20,"green",true);
C = new Point(300,300,20,"blue",true);
S = new Point(0,0,10,"purple",false)

MAB = new Point(50,50,10,"white",false);
MBC = new Point(50,50,10,"white",false);
MCA = new Point(50,50,10,"white",false);

lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);
lCA = new LinearFunction(1,1);
lAMBC = new LinearFunction(2,100);
lBMCA = new LinearFunction(2,100);
lCMAB = new LinearFunction(2,300);

function animate(){
  context.clearRect(0,0,width,height);

  // Calculate Avarage of the points
  MAB.x = (A.x + B.x)/2;
  MAB.y = (A.y + B.y)/2;
  MBC.x = (B.x + C.x)/2;
  MBC.y = (B.y + C.y)/2;
  MCA.x = (C.x + A.x)/2;
  MCA.y = (C.y + A.y)/2;

  // Calculate Lines betweeen points
  lAB.slope = (B.y - A.y)/(B.x - A.x);
  lAB.intercept = B.y - B.x * lAB.slope;
  lBC.slope = (C.y - B.y)/(C.x - B.x);
  lBC.intercept = C.y - C.x * lBC.slope;
  lCA.slope = (A.y - C.y)/(A.x - C.x);
  lCA.intercept = A.y - A.x * lCA.slope;

  // Calculate Lines between points and avarage points
  lAMBC.slope = (A.y - MBC.y)/(A.x - MBC.x);
  lAMBC.intercept = A.y - A.x * lAMBC.slope;
  lBMCA.slope = (B.y - MCA.y)/(B.x - MCA.x);
  lBMCA.intercept = B.y - B.x * lBMCA.slope;
  lCMAB.slope = (C.y - MAB.y)/(C.x - MAB.x);
  lCMAB.intercept = C.y - C.x * lCMAB.slope;

  // Calculate Centroid
  S.x = lAMBC.intersection(lBMCA).x;
  S.y = lAMBC.intersection(lBMCA).y;


  // Draw everything
  lAB.draw(context,"black");
  lBC.draw(context,"black");
  lCA.draw(context,"black");
  lAMBC.draw(context,"gray");
  lBMCA.draw(context,"gray");
  lCMAB.draw(context,"gray");
  S.draw(context);
  A.draw();
  B.draw();
  C.draw();
  MAB.draw();
  MBC.draw();
  MCA.draw();
}


setInterval(animate,10);
