"use strict";

import Popup from "../src/popup.js";
import { gameBuilder, Reason } from "../src/game.js";
import * as sound from "./sound.js";

const gameFinishBanner = new Popup(); //게임이 끝났을떄 나오는 팝업창이므로 조금더 의미있는 네이밍
gameFinishBanner.setClickLister(() => {
  game.start();
});

const game = new gameBuilder()
  .withCarrotCount(3)
  .withBugCount(3)
  .withGameDuration(5)
  .build();
game.setGameStopLister((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay ?";
      sound.playAlert();
      break;
    case Reason.win:
      message = "YOU WON 🎉";
      sound.playWin();
      break;
    case Reason.lose:
      message = "YOU LOST 💩";
      sound.playBug();
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});
