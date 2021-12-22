import { onButtonClosePhoneModalClick, onButtonCloseChatModalClick } from './modals';

//======================user not active
const no_active_delay = 60;
let now_no_active = 0;
function counter() {
  now_no_active += 1;
}

function activeUser() {
  now_no_active = 0;
}
let counterId;
let update;
function startModalsTimerNoActive() {
  counterId = setInterval(counter, 1000);
  update = setInterval(updateChat, 1000);
  function updateChat() {
    if (now_no_active >= no_active_delay) {
      onButtonClosePhoneModalClick();
      onButtonCloseChatModalClick();
      stopCounter();
    }
  }
}
function stopCounter() {
  setTimeout(() => {
    clearInterval(counterId);
  }, 1000);
  setTimeout(() => {
    clearInterval(update);
  }, 1000);
}

export { startModalsTimerNoActive, stopCounter, activeUser };
