"use strict"; //this라는것은 class안에 있는 함수를 다른 callback 함수에 전달할때 class안에 있는 정보는 사라진다 this와 함수를 묶어주기 위해서 binding을 해준다
import * as sound from "./sound.js";
const CARROT_SIZE = 80;

export const ItemType = Object.freeze({
  carrot: "carrot",
  bug: "bug",
});

export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick); // 자바스크립트에서 클래스정보는 콜백으로 전달되지 않는다 그래서 클래스정보를 전달하기 위해서는 함수를 클래스와 바인딩 해줘야한다.
  }
  init() {
    this.field.innerHTML = "";
    this._addItem(
      "carrot",
      this.carrotCount,
      "/Projects/findCarrotgame/carrot/img/carrot.png"
    );
    this._addItem(
      "bug",
      this.bugCount,
      "/Projects/findCarrotgame/carrot/img/bug.png"
    );
  }

  setClickLister(onItemClick) {
    // field에서 클릭이되면 onclick을 호출
    this.onItemClick = onItemClick; // class안에 있는 멤버변수 onClick에게 전달받은 onClick인자를 넘겨준다
  }

  _addItem(className, count, imgPath) {
    // 자바스크립트에서는 private이 통용적으로 쓰여지지 않기 떄문에 underbar_를 변수명 앞에 붙인다
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imgPath);
      item.style.position = "absolute";
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }
  onClick = (event) => {
    //클래스 안에 있는 어떤 함수를 다른 콜백으로 전달할떄는 멤버변수로 만들고 이멤버 변수는 onclick을 가르킨다
    const target = event.target;
    if (target.matches(".carrot")) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick(ItemType.carrot);
    } else if (target.matches(".bug")) {
      this.onItemClick && this.onItemClick(ItemType.bug);
    }
  };
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
