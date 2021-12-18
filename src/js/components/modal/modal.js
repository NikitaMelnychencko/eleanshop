import modal from '../../../views/components/modal.hbs';
import Backdrop from '../backdrop';
import { backdropMarkup } from '../../layout/checkout/thanksForOrdering';

export const mainModal = modal(backdropMarkup);
console.log(mainModal);
export default function renderModal(markup, callback) {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.innerHTML = markup;
  console.log(markup);
  console.log(modalContainer);
  const newBackdrop = new Backdrop();
  callback();
}
