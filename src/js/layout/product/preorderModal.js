import preorderModal from '../../../views/components/preorderModal.hbs';
import orderForm from '../../../views/components/orderForm.hbs';
import refs from '../../refs/refs';
import { bodyUnfixPosition } from '../../components/scroll/scroll';
const { mainEL } = refs;

export const preorderMark = preorderModal({ orderForm });
export function setEventPreorder() {
  const preoderModal = document.querySelector('.preorder');
  const submitButton = preoderModal.querySelector('.order-form__button');
  const sizeList = preoderModal.querySelector('.sizes__list');

  sizeList.addEventListener('click', onSizeListItemClick);
  submitButton.addEventListener('click', onButtonSubmitClick);
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
  event.preventDefault();
  const preoderModal = document.querySelector('.preorder');
  const sizeList = preoderModal.querySelector('.sizes__list');
  const orderFormEl = preoderModal.querySelector('.order-form');
  const clientNameInput = preoderModal.querySelector('#client-name');
  const clientPhoneInput = preoderModal.querySelector('#client-tel');
  const clientMailInput = preoderModal.querySelector('#client-email');
  const clientCommentInput = preoderModal.querySelector('#client-comments');
  const orderChekbox = preoderModal.querySelector('.agreement__checkbox');
  const checkedSizeInputs = sizeList.querySelectorAll('.sizes__input');
  const checkedSizeInput = sizeList.querySelector('.sizes__input');
  if (
    clientNameInput.validity.valid &&
    clientPhoneInput.validity.valid &&
    clientMailInput.validity.valid &&
    orderChekbox.validity.valid &&
    checkedSizeInput.validity.valid
  ) {
    localStorage.setItem(clientNameInput.name, clientNameInput.value);
    localStorage.setItem(clientPhoneInput.name, clientPhoneInput.value);
    localStorage.setItem(clientMailInput.name, clientMailInput.value);
    localStorage.setItem(clientCommentInput.name, clientCommentInput.value);
    checkedSizeInputs.forEach(input => {
      if (input.checked === true) {
        localStorage.setItem(input.name, input.value);
      }
    });
    bodyUnfixPosition();
  }
}
