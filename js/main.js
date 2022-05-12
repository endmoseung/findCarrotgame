const play = document.querySelector(".play");
const timer = document.querySelector(".timer");
const monRat = document.querySelector(".monrat");
const bug = document.querySelector(".bug");
const carrotLeft = document.querySelector(".carrot-left");
const lose = document.querySelector(".lose");
const win = document.querySelector(".win");
const reset = document.querySelector(".reset");
const gameBox = document.querySelector(".gamebox")


let audioFileBc = new Audio('carrot/sound/bg.mp3');
let audioFileBug = new Audio('carrot/sound/bug_pull.mp3');
let audioFileMonRat = new Audio('carrot/sound/carrot_pull.mp3');
let audioFileWin = new Audio('carrot/sound/game_win.mp3');

function carrotPainting(){
  for (var i = 0; i < 10; i++) {
    let bottom = Math.random();
    bottom=bottom*250;
    let left = Math.random();
    left = left *700;
    const paintImg = document.createElement("img");
    paintImg.src = "carrot/img/괴물쥐.jpeg";
    paintImg.setAttribute('class',"monrat")
    paintImg.style.bottom = bottom+'px';
    paintImg.style.left = left+'px';
    gameBox.appendChild(paintImg);

  }
}
function bugPainting(){
  for (var i = 0; i < 7; i++) {
    let bottom = Math.random();
    bottom=bottom*250;
    let left = Math.random();
    left = left *700;
    const paintImg = document.createElement("img");
    paintImg.src = "carrot/img/bug.png";
    paintImg.setAttribute('class',"bug")
    paintImg.style.bottom = bottom+'px';
    paintImg.style.left = left+'px';
    gameBox.appendChild(paintImg);

  }
}


function paintGames(){
  carrotPainting();
  bugPainting();
}



play.addEventListener("click",()=>{
  paintGames();
  
  audioFileBc.play();
  carrotLeft.innerText = 10;
  let currentSecond = 10;
  timer.innerText = `0:${currentSecond}`
  setInterval(clocks,1000);
  function clocks(){
    if(currentSecond<=0){
      lose.classList.add("active");
      audioFileBc.pause();
      return;
    }
    currentSecond = currentSecond-1;
    timer.innerText = `0:${currentSecond}`

  }
})

bug.addEventListener("click",()=>{
  audioFileBug.play();
  //화면이 나오면서 졌다고
  lose.classList.add("active");
  audioFileBc.pause();
})

monRat.addEventListener("click",()=>{
  audioFileMonRat.play();
  if(carrotLeft.innerText === 0){
    win.classList.add("active");
    return;
  }
  carrotLeft.innerText = carrotLeft.innerText - 1;
})

reset.addEventListener("click",()=>{
  
  audioFileBc.play();
  carrotLeft.innerText = 10;
  let currentSecond = 10;
  timer.innerText = `0:${currentSecond}`
  setInterval(clocks,1000);
  function clocks(){
    if(currentSecond<=0){
      lose.classList.add("active");
      audioFileBc.pause();
      return;
    }
    currentSecond = currentSecond-1;
    timer.innerText = `0:${currentSecond}`;
  }
})