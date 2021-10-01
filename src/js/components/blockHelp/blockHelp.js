import blockHelp_blockHelpTemplate from '../../../views/components/blockHelp.hbs';

import refs from '../../refs/refs';

const { mainEL } = refs;

mainEL.insertAdjacentHTML('beforeend', blockHelp_blockHelpTemplate());

//variables
//help buttons
const helpButtonChat = document.querySelector('.button-chat');
const helpButtonScroll = document.querySelector('.button-scroll');
const helpButtonPhone = document.querySelector('.button-phone');

//help modals
const helpPhoneModal = document.querySelector('.help__phone-modal');
const helpChatModal = document.querySelector('.help__chat-modal');
// buttons close modals
const buttonClosePhoneModal = helpPhoneModal.querySelector('.help__button-close-modal');
const buttonCloseChatModal = helpChatModal.querySelector('.help__button-close-modal');

//inputs

const phoneInput = helpPhoneModal.querySelector('.client-number__input');
const messageInput = helpChatModal.querySelector('.client-message__textarea');

//submit buttons
const phoneSubmitButton = helpPhoneModal.querySelector('.help__form-button');
const messageSubmitButton = helpChatModal.querySelector('.help__form-button');
//timer
const timerThumb = helpPhoneModal.querySelector('.client-number__timer-text');
const timerText = helpPhoneModal.querySelector('.client-number__timer-number');

//messages-amount
const chatMessagesAmount = helpButtonChat.querySelector('.button-chat__messages-amount');

//functions

//
//open  modal
helpButtonPhone.addEventListener('click', onButtonPhoneClick);
helpButtonChat.addEventListener('click', onButtonChatClick);

function openModal(
  modal,
  buttonClose,
  onButtonCloseModalClick,
  submitButton,
  onSubmitClick,
  inputEl,
) {
  modal.classList.add('isActive');
  buttonClose.addEventListener('click', onButtonCloseModalClick);
  helpButtonPhone.removeEventListener('click', onButtonPhoneClick);
  helpButtonChat.removeEventListener('click', onButtonChatClick);
  submitButton.addEventListener('click', onSubmitClick);
  inputEl.addEventListener('input', activeUser);
  startModalsTimerNoActive();
}

// close modal
function closeHelpModal(
  buttonClose,
  onButtonCloseModalClick,
  modal,
  submitButton,
  onSubmitClick,
  inputEl,
) {
  buttonClose.removeEventListener('click', onButtonCloseModalClick);
  modal.classList.remove('isActive');
  helpButtonPhone.addEventListener('click', onButtonPhoneClick);
  helpButtonChat.addEventListener('click', onButtonChatClick);
  submitButton.removeEventListener('click', onSubmitClick);

  inputEl.removeEventListener('input', activeUser);
  stopCounter();
}

//============ open & close Phonemodal
function onButtonPhoneClick(event) {
  openModal(
    helpPhoneModal,
    buttonClosePhoneModal,
    onButtonClosePhoneModalClick,
    phoneSubmitButton,
    onPhoneSubmitClick,
    phoneInput,
  );
}

function onButtonClosePhoneModalClick(event) {
  closeHelpModal(
    buttonClosePhoneModal,
    onButtonClosePhoneModalClick,
    helpPhoneModal,
    phoneSubmitButton,
    onPhoneSubmitClick,
    phoneInput,
  );
}
// phoneModal submit
function onPhoneSubmitClick(event) {
  if (phoneInput.validity.valid) {
    timerThumb.classList.add('visible');
    countdown();
    localStorage.setItem(phoneInput.name, phoneInput.value);
    event.preventDefault();
  }
}

//============ open & close Chat modal
function onButtonChatClick(event) {
  openModal(
    helpChatModal,
    buttonCloseChatModal,
    onButtonCloseChatModalClick,
    messageSubmitButton,
    onMessageSubmitClick,
    messageInput,
  );
}
function onButtonCloseChatModalClick(event) {
  closeHelpModal(
    buttonCloseChatModal,
    onButtonCloseChatModalClick,
    helpChatModal,
    messageSubmitButton,
    onMessageSubmitClick,
    messageInput,
  );
}
// messageModal submit
function onMessageSubmitClick(event) {
  if (messageInput.validity.valid) {
    event.preventDefault();
    localStorage.setItem(messageInput.name, messageInput.value);
    const clientSendedMessage = localStorage.getItem(messageInput.name);

    const messageThumb = document.querySelector('.help__chat-messages-thumb');
    messageThumb.insertAdjacentHTML(
      'beforeend',
      `<p class="help__chat-message client-message">${clientSendedMessage}</p>`,
    );
    messageInput.value = '';
  }
}
//count messages
countMessagesAmount();
function countMessagesAmount() {
  const adviserMessages = helpChatModal.querySelectorAll('.adviser-message');
  let amount = 0;
  adviserMessages.forEach(message => {
    amount += 1;
  });
  if (amount > 0) {
    chatMessagesAmount.textContent = `${amount}`;
  }
}

//
//====================timer coundown
let timer;
let x = 30;
function countdown() {
  timerText.innerHTML = x;
  x -= 1;
  if (x < 0) {
    clearTimeout(timer);
    x = 30;
  } else {
    timer = setTimeout(countdown, 1000);
  }
}

//
//======================user not active
const no_active_delay = 60;
let now_no_active = 0;
function counter() {
  now_no_active += 1;
  // console.log(now_no_active);
}
document.addEventListener('mousemove', activeUser);
function activeUser() {
  now_no_active = 0;
  // console.log('active');
}
let counterId;
let update;
function startModalsTimerNoActive() {
  counterId = setInterval(counter, 1000);
  update = setInterval(updateChat, 1000);
  function updateChat() {
    if (now_no_active >= no_active_delay) {
      // console.log('Пользователь не активен');
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

//
//===========make visible help-button-scroll
function auditYOffset() {
  /* console.log(window.pageYOffset) */
  if (window.pageYOffset > 400) {
    helpButtonScroll.classList.add('isVisible');
    helpButtonScroll.addEventListener('click', onButtonScrollClick);
  }
  if (window.pageYOffset < 400) {
    helpButtonScroll.classList.remove('isVisible');
    helpButtonScroll.removeEventListener('click', onButtonScrollClick);
  }
}
setInterval(auditYOffset, 1000);

//
//====================Smooth scroll
helpButtonScroll.addEventListener('click', onButtonScrollClick);
function onButtonScrollClick(event) {
  event.preventDefault();
  // Вызываем функцию, первый аргумент - отступ, второй - скорость скролла, чем больше значение, тем медленнее скорость прокрутки
  scrollTo(0, 700);
}
function scrollTo(to, duration = 700) {
  const element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}
