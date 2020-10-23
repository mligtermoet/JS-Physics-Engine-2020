const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let dice,sw,sh,roll_1,roll_2,score,scoreList;

dice = {};
dice.image = new Image();
dice.image.src = "images/dice.png";

scoreList = [];
for(let i = 2; i<=12;i++){
    scoreList.push(0)
    scoreList[i] = 0;
}

dice.image.addEventListener('load',()=>{
    sw = dice.image.width/6;
    sh = dice.image.height;

    setInterval(animate,500);
})

function animate(){
    roll_1 = Math.floor(Math.random()*6)+1;
    roll_2 = Math.floor(Math.random()*6)+1;


    score = roll_1 + roll_2;

    context.drawImage(dice.image,(roll_1-1)*sw,0,sw,sh,200,200,sw,sh);
    context.drawImage(dice.image,(roll_2-1)*sw,0,sw,sh,400,200,sw,sh);


    scoreList[score-2]++
    console.log(score,scoreList);
}

function Loop(Ammount) {
    for (let i = 0; i < Ammount; i++) {
        animate();
        UpdateScores();
    }
}

function UpdateScores() {
    document.getElementById("Twee").innerHTML = scoreList[1];
    document.getElementById("Drie").innerHTML = scoreList[2];
    document.getElementById("Vier").innerHTML = scoreList[3];
    document.getElementById("Vijf").innerHTML = scoreList[4];
    document.getElementById("Zes").innerHTML = scoreList[5];
    document.getElementById("Zeven").innerHTML = scoreList[6];
    document.getElementById("Acht").innerHTML = scoreList[7];
    document.getElementById("Negen").innerHTML = scoreList[8];
    document.getElementById("Tien").innerHTML = scoreList[9];
    document.getElementById("Elf").innerHTML = scoreList[10];
    document.getElementById("Twaalf").innerHTML = scoreList[11];
}