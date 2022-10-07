const carrotSound = new Audio(
  "/Projects/findCarrotgame/carrot/sound/carrot_pull.mp3"
);
const alertSound = new Audio("/Projects/findCarrotgame/carrot/sound/alert.wav");
const bgSound = new Audio("/Projects/findCarrotgame/carrot/sound/bg.mp3");
const bugSound = new Audio(
  "/Projects/findCarrotgame/carrot/sound/bug_pull.mp3"
);
const winSound = new Audio(
  "/Projects/findCarrotgame/carrot/sound/game_win.mp3"
);

export function playCarrot() {
  playSound(carrotSound);
}

export function playBug() {
  playSound(bugSound);
}

export function playAlert() {
  playSound(alertSound);
}

export function playBackGround() {
  playSound(bgSound);
}

export function playWin() {
  playSound(winSound);
}

export function stopBackGround() {
  stopSound(bgSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
