"use strict";

export default class Popup {
  //export 이 클래스를 바깥으로 노출시키곘다, 외부에서도 이클래스를 볼 수 있고 만들수 있게
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpText = document.querySelector(".pop-up__message");
    this.popUpRefresh = document.querySelector(".pop-up__refresh");
    this.popUpRefresh.addEventListener("click", () => {
      this.onClick && this.onClick(); // this.onClick이 존재할때 this.onClick을 실행해줘라
      this.hide();
    });
  }
  setClickLister(onClick) {
    // 팝업창에서 클릭이되면 onclick을 호출
    this.onClick = onClick; // class안에 있는 멤버변수 onClick에게 전달받은 onClick인자를 넘겨준다
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove("pop-up--hide");
  }

  hide() {
    this.popUp.classList.add("pop-up--hide");
  }
}
