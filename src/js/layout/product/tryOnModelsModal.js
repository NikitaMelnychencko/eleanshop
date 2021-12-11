// Try on Modal ("ХОТИТЕ ПРИМЕРИТЬ ДАННУЮ МОДЕЛЬ ПЕРЕД ПОКУПКОЙ? ЛЕГКО!")
import Backdrop from '../../components/backdrop';
import tryOnModelsModal from '../../../views/components/tryOnModelsModal.hbs';
import orderForm from '../../../views/components/orderForm.hbs';
import refs from '../../refs/refs';
import { bodyUnfixPosition } from '../../components/scroll/scroll';

const { mainEL } = refs;

// create content for Try-One Modal which placed at Body (for example)

export const tryOnModels = tryOnModelsModal({ orderForm });

//const

//open modal
export function setEventTryOnModels() {
  const tryOnBackdrop = document.querySelector('.try-on__backdrop');
  const tryOnModalEl = document.querySelector('.try-on');
  const buttonCloseModal = tryOnModalEl.querySelector('.try-on__close-button');
  const orderFormEl = tryOnModalEl.querySelector('.order-form');
  const submitButton = tryOnModalEl.querySelector('.order-form__button');
  const sizeList = tryOnModalEl.querySelector('.sizes__list');
  buttonCloseModal.addEventListener('click', onButtonCloseModalClick);
  sizeList.addEventListener('click', onSizeListItemClick);
  submitButton.addEventListener('click', onButtonSubmitClick);
  console.log('object');
}

//close modal
function onButtonCloseModalClick(event) {
  const tryOnBackdrop = document.querySelector('.try-on__backdrop');
  tryOnBackdrop.classList.remove('is-visible');
  /* buttonCloseModal.removeEventListener('click', onButtonCloseModalClick); */
  /* sizeList.removeEventListener('click', onSizeListItemClick); */
  /* submitButton.removeEventListener('click', onButtonSubmitClick); */
  bodyUnfixPosition();
}

//on size-list label click, radio-input is checked
function onSizeListItemClick(event) {
  if (event.target.nodeName !== 'LABEL') {
    return;
  }
  const sizeInput = event.target.previousElementSibling;
  sizeInput.click();
}

//on submit button click, set info into local storage
function onButtonSubmitClick(event) {
  const tryOnModalEl = document.querySelector('.try-on');
  const clientNameInput = tryOnModalEl.querySelector('#client-name');
  const clientPhoneInput = tryOnModalEl.querySelector('#client-tel');
  const clientMailInput = tryOnModalEl.querySelector('#client-email');
  const clientCommentInput = tryOnModalEl.querySelector('#client-comments');
  const orderChekbox = tryOnModalEl.querySelector('.agreement__checkbox');
  const sizeList = tryOnModalEl.querySelector('.sizes__list');
  const checkedSizeInputs = sizeList.querySelectorAll('.sizes__input');
  const checkedSizeInput = sizeList.querySelector('.sizes__input');
  if (
    clientNameInput.validity.valid &&
    clientPhoneInput.validity.valid &&
    clientMailInput.validity.valid &&
    orderChekbox.validity.valid &&
    checkedSizeInput.validity.valid
  ) {
    event.preventDefault();
    localStorage.setItem(clientNameInput.name, clientNameInput.value);
    localStorage.setItem(clientPhoneInput.name, clientPhoneInput.value);
    localStorage.setItem(clientMailInput.name, clientMailInput.value);
    localStorage.setItem(clientCommentInput.name, clientCommentInput.value);

    checkedSizeInputs.forEach(input => {
      if (input.checked === true) {
        localStorage.setItem(input.name, input.value);
      }
    });
    onButtonCloseModalClick();

    let backdropRef = document.querySelector('[data-modal]');
    backdropRef.classList.remove('is-hidden');
    const modalForm = document.querySelector('.ordering__form');
    modalForm.style.display = 'block';
    const right = (backdropRef.offsetWidth - modalForm.offsetWidth) / 2;
    const btnCloseRef = document.querySelector('.form__button-сlose');
    btnCloseRef.style.display = 'block';
    btnCloseRef.style.right = `${right}px`;
    const backdrop = new Backdrop();
  }
}
