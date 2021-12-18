import modal from '../../../views/components/modal.hbs';
import Backdrop from '../backdrop';
import backdropMarkup from '../../../views/components/backdrop.hbs';
export const mainModal = backdropMarkup(modal);
export default function renderModal(component, callback) {
  const modalContainer = document.querySelector('.modal__container');
  modalContainer.innerHTML = component;
  const newBackdrop = new Backdrop();
  console.log(modalContainer);
  callback();
}
