import { getRefs } from './refs';
//====================timer coundown
  let timer;
  let x = 30;
export  function countdown() {
    getRefs().timerText.innerHTML = x;
    x -= 1;
    if (x < 0) {
      clearTimeout(timer);
      x = 30;
    } else {
      timer = setTimeout(countdown, 1000);
    }
  }