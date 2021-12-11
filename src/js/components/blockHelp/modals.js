import { startModalsTimerNoActive, stopCounter, activeUser } from './activityTimer';
import { countdown } from './countdownTimer';
import { getRefs } from './refs';

export function openModals() {
  getRefs().helpButtonPhone.addEventListener('click', onButtonPhoneClick);
  getRefs().helpButtonChat.addEventListener('click', onButtonChatClick);
}

//open modal
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
  getRefs().helpButtonPhone.removeEventListener('click', onButtonPhoneClick);
  getRefs().helpButtonChat.removeEventListener('click', onButtonChatClick);
  submitButton.addEventListener('click', onSubmitClick);
  inputEl.addEventListener('input', activeUser);
  startModalsTimerNoActive();
  helpButtonsThumbIsHidden();
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
  getRefs().helpButtonPhone.addEventListener('click', onButtonPhoneClick);
  getRefs().helpButtonChat.addEventListener('click', onButtonChatClick);
  submitButton.removeEventListener('click', onSubmitClick);

  inputEl.removeEventListener('input', activeUser);
  stopCounter();
  helpButtonsThumbIsVisible();
}

//=========== helpButtonsThumb is hidden
function helpButtonsThumbIsHidden() {
  getRefs().helpBtnThumb.classList.add('is-hidden');
}
function helpButtonsThumbIsVisible() {
  getRefs().helpBtnThumb.classList.remove('is-hidden');
}

//============ open & close Phonemodal
function onButtonPhoneClick(event) {
  openModal(
    getRefs().helpPhoneModal,
    getRefs().buttonClosePhoneModal,
    onButtonClosePhoneModalClick,
    getRefs().phoneSubmitButton,
    onPhoneSubmitClick,
    getRefs().phoneInput,
  );
}

export function onButtonClosePhoneModalClick(event) {
  closeHelpModal(
    getRefs().buttonClosePhoneModal,
    onButtonClosePhoneModalClick,
    getRefs().helpPhoneModal,
    getRefs().phoneSubmitButton,
    onPhoneSubmitClick,
    getRefs().phoneInput,
  );
}
// phoneModal submit
function onPhoneSubmitClick(event) {
  if (getRefs().phoneInput.validity.valid) {
    event.preventDefault();
    getRefs().timerThumb.classList.add('visible');
    countdown();
    localStorage.setItem(getRefs().phoneInput.name, getRefs().phoneInput.value);
  }
}

//============ open & close Chat modal
function onButtonChatClick(event) {
  openModal(
    getRefs().helpChatModal,
    getRefs().buttonCloseChatModal,
    onButtonCloseChatModalClick,
    getRefs().messageSubmitButton,
    onMessageSubmitClick,
    getRefs().messageInput,
  );
}
export function onButtonCloseChatModalClick(event) {
  closeHelpModal(
    getRefs().buttonCloseChatModal,
    onButtonCloseChatModalClick,
    getRefs().helpChatModal,
    getRefs().messageSubmitButton,
    onMessageSubmitClick,
    getRefs().messageInput,
  );
}
// messageModal submit
function onMessageSubmitClick(event) {
  if (getRefs().messageInput.validity.valid) {
    event.preventDefault();
    localStorage.setItem(getRefs().messageInput.name, getRefs().messageInput.value);
    const clientSendedMessage = localStorage.getItem(getRefs().messageInput.name);

    getRefs().messageThumb.insertAdjacentHTML(
      'beforeend',
      `<p class="help__chat-message client-message">${clientSendedMessage}</p>`,
    );
    getRefs().messageInput.value = '';
  }
}
