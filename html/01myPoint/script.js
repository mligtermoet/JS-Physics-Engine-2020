const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let myPoint = new Point(500,200,20,"red");
myPoint.draw(context);

let myPoint2 = new Point(100,100,40,"green");
myPoint2.draw(context);

let myPoint3 = new Point(200,400,80,"blue");
myPoint3.draw(context);
