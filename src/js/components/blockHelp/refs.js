export function getRefs() {
  const refs = {
    helpBtnThumb: document.querySelector('.help__button-thumb'),
    helpButtonPhone: document.querySelector('.button-phone'),
    helpButtonScroll: document.querySelector('.button-scroll'),
    helpButtonChat: document.querySelector('.button-chat'),
    helpPhoneModal: document.querySelector('.help__phone-modal'),
    helpChatModal: document.querySelector('.help__chat-modal'),
    buttonClosePhoneModal: document.querySelector('.help__button-close-phone-modal'),

    buttonCloseChatModal: document.querySelector('.help__button-close-chat-modal'),
    phoneInput: document.querySelector('.client-number__input'),
    messageInput: document.querySelector('.client-message__textarea'),
    phoneSubmitButton: document.querySelector('.client-number__button'),
    messageSubmitButton: document.querySelector('.client-message__button'),
    timerThumb: document.querySelector('.client-number__timer-text'),

    timerText: document.querySelector('.client-number__timer-number'),
    chatMessagesAmount: document.querySelector('.button-chat__messages-amount'),
    messageThumb: document.querySelector('.help__chat-messages-thumb'),
  };
  return refs;
}
