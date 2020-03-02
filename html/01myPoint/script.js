const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let colors = ["red", "green", "blue", "yellow", "purple", "pink", "orange"];

function getRandomNumber(max){
    return Math.floor(Math.random()*max);
  }

function spawn(){
    let myCircle = new Point(getRandomNumber(width), getRandomNumber(height),getRandomNumber(100),colors[getRandomNumber(colors.length)])
    myCircle.draw();
}

function animate(){
    spawn();
  }
  
  setInterval(animate,0);





