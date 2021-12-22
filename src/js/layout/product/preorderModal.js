// console.log('Hello world');
import Backdrop from '../../components/backdrop';
import preorderModal from '../../../views/components/preorderModal.hbs';
import orderForm from '../../../views/components/orderForm.hbs';
import refs from '../../refs/refs';
import { bodyUnfixPosition } from '../../components/scroll/scroll';

const { mainEL } = refs;
// create content for Pre-order Modal which placed at Body (for example)
export const preorderMark = preorderModal({ orderForm });
//const

//open modal
/* const buttonOpenModal = document.querySelector() */
/* buttonOpenModal.addEventListener('click', onButtonOpenModalClick) */

export function setEventPreorder() {
  // const buttonCloseModal = document.querySelector('.preoder__close-button');
  const preoderModal = document.querySelector('.preorder');
  const submitButton = preoderModal.querySelector('.order-form__button');
  const sizeList = preoderModal.querySelector('.sizes__list');
  // buttonCloseModal.addEventListener('click', onButtonCloseModalClick);
  sizeList.addEventListener('click', onSizeListItemClick);
  submitButton.addEventListener('click', onButtonSubmitClick);
}
/* function onButtonOpenModalClick(event){
    preoderBackdrop.classList.add('is-visible');
   buttonCloseModal.addEventListener('click', onButtonCloseModalClick);
sizeList.addEventListener('click', onSizeListItemClick);
submitButton.addEventListener('click', onButtonSubmitClick);

} */
//close modal

function onButtonCloseModalClick(event) {
  const preoderBackdrop = document.querySelector('.preoder__backdrop');
  preoderBackdrop.classList.remove('is-visible');
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
  }
  // onButtonCloseModalClick();

  // let backdropRef = document.querySelector('[data-modal]');
  // backdropRef.classList.remove('is-hidden');
  // const modalForm = document.querySelector('.ordering__form');
  // modalForm.style.display = 'block';
  // const right = (backdropRef.offsetWidth - modalForm.offsetWidth) / 2;
  // const btnCloseRef = document.querySelector('.form__button-сlose');
  // btnCloseRef.style.display = 'block';
  // btnCloseRef.style.right = `${right}px`;
  const backdrop = new Backdrop();
}
