const button = document.querySelector("button");
const play = document.querySelector(".play");
const timer = document.querySelector(".timer");
const monRat = document.querySelector(".monrat");
const bug = document.querySelector(".bug");
const carrotLeft = document.querySelector(".carrot-left");
const lose = document.querySelector(".lose");
const win = document.querySelector(".win");
const reset = document.querySelectorAll(".reset");
const gameBox = document.querySelector(".gamebox");
const stopBtn = document.querySelector(".stop");
const replay = document.querySelector(".replay");
const paintBox = document.querySelector(".paintbox");

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
    paintBox.appendChild(paintImg);
    paintImg.addEventListener("click",(event)=>{
      event.target.remove();
      audioFileMonRat.play();
      if(carrotLeft.innerText === '1'){
        carrotLeft.innerText = 0;
        audioFileBc.pause();
        win.classList.toggle("active");
        stopBtn.classList.toggle("hidden");
        clearInterval(timerInterval);
        audioFileWin.play();
        return;
      }
      carrotLeft.innerText = carrotLeft.innerText - 1;
    })
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
    paintBox.appendChild(paintImg);
    paintImg.addEventListener("click",()=>{
      audioFileBug.play();
      //화면이 나오면서 졌다고
      lose.classList.toggle("active");
      audioFileBc.pause();
      stopBtn.classList.toggle("hidden");
      clearInterval(timerInterval);
    })
  }
}


function paintGames(){
  carrotPainting();
  bugPainting();
}



play.addEventListener("click",()=>{
  paintGames();
  play.classList.toggle("hidden");
  stopBtn.classList.toggle("active");
  audioFileBc.play();
  carrotLeft.innerText = 10;
  let currentSecond = 10;
  timer.innerText = `0:${currentSecond}`
  timerInterval = setInterval(clocks,1000);
  timerInterval;
  function clocks(){
    if(currentSecond<=0){
      lose.classList.add("active");
      audioFileBc.pause();
      stopBtn.classList.add("hidden")
      return;
    }
    currentSecond = currentSecond-1;
    timer.innerText = `0:${currentSecond}`

  }})

stopBtn.addEventListener("click",()=>{
  clearInterval(timerInterval);// 지역변수 안에 있는 timerinterval을 어케끄지 ?
  audioFileBc.pause();
  replay.classList.toggle("active");
})

for (let i = 0; i < reset.length; i++){
  reset[i].addEventListener("click",(event)=>{
    paintBox.innerHTML = "";
    if(event.target.parentNode !== button){
      event.target.parentNode.parentNode.classList.toggle("active");
    }else{
      event.target.parentNode.classList.toggle("active");
    }
    paintGames();
    play.classList.toggle("hidden");
    stopBtn.classList.toggle("active");
    audioFileBc.play();
    carrotLeft.innerText = 10;
    let currentSecond = 10;
    timer.innerText = `0:${currentSecond}`
    timerInterval = setInterval(clocks,1000);
    timerInterval;
    function clocks(){
      if(currentSecond<=0){
        lose.classList.add("active");
        audioFileBc.pause();
        stopBtn.classList.add("hidden")
        return;
      }
      currentSecond = currentSecond-1;
      timer.innerText = `0:${currentSecond}`
    }
  })
}