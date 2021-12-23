// Try on Modal
import tryOnModelsModal from '../../../views/components/tryOnModelsModal.hbs';
import orderForm from '../../../views/components/orderForm.hbs';
import renderModal from '../../components/modal/modal';
import { modalFormMarkup, onResize } from '../../layout/checkout/thanksForOrdering';

// create content for Try-One Modal which placed at Body (for example)

export const tryOnModels = tryOnModelsModal({ orderForm });

//const

//open modal
export function setEventTryOnModels() {
  const tryOnModalEl = document.querySelector('.try-on');
  const submitButton = tryOnModalEl.querySelector('.order-form');
  const sizeList = tryOnModalEl.querySelector('.sizes__list');
  sizeList.addEventListener('click', onSizeListItemClick);
  submitButton.addEventListener('submit', onButtonSubmitClick);
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
    localStorage.setItem(clientNameInput.name, clientNameInput.value);
    localStorage.setItem(clientPhoneInput.name, clientPhoneInput.value);
    localStorage.setItem(clientMailInput.name, clientMailInput.value);
    localStorage.setItem(clientCommentInput.name, clientCommentInput.value);

    checkedSizeInputs.forEach(input => {
      if (input.checked === true) {
        localStorage.setItem(input.name, input.value);
      }
    });
    renderModal(modalFormMarkup, onResize);
  }
}
