// Суда буду вносить функционал
import refs from '../../refs/refs';

import delivery from '../../../views/partials/delivery/deliveryTypes.hbs';
import deliveryButton from '../../../views/partials/delivery/buttonDelivProct.hbs';
import deliveryPage from '../../../views/layouts/delivery.hbs';
import deliveryfiljson from '../../../js/json/filter.json';
import deliveryfilter from '../../../views/partials/delivery/filter.hbs';
import formsQuestions from '../../../views/partials/delivery/formsQuestion.hbs';
import formQuestionsData from '../../../js/json/formsQuestion.json';
import renderModal from '../../components/modal/modal';
import modalDeliveryAndReturn from '../../../views/partials/delivery/modalDeliveryAndReturn.hbs';
import modalDelivery from '../../../views/partials/delivery/modalDelivery.hbs';
import modalDeliverPayment from '../../../views/partials/delivery/modalDeliverPayment.hbs';
export const descriptionDelivery = deliveryfilter(deliveryfiljson);
export const mainImageDelivery = delivery();
export const buttonsDelivery = deliveryButton();
export const questionDelivery = formsQuestions(formQuestionsData);
export const deliveryPageMarkUp = deliveryPage();

const {
  mainfoto: myFoto,
  delheadnav: myButtonDeliv,
  // openModalBtn: openModal,
  // closeModalBtn: colseModal,
  // modal: modal,
} = refs;

function createFotoDelivery(menu) {
  return menu.map(delivery).join('');
}
function createButtonDelivery(menu) {
  return menu.map(deliveryButton).join('');
}

export function deliveryThreeModal() {
  const deliveryButtonOne = document.querySelector('.buttons__button_one');
  deliveryButtonOne.addEventListener('click', e => {
    e.preventDefault();
    renderModal(modalDeliveryAndReturn(), '');
  });

  const deliveryButtonTwo = document.querySelector('.buttons__button_two');
  deliveryButtonTwo.addEventListener('click', e => {
    e.preventDefault();
    renderModal(modalDelivery(), '');
  });
  const deliveryButtonThird = document.querySelector('.buttons__button_third');
  deliveryButtonThird.addEventListener('click', e => {
    e.preventDefault();
    renderModal(modalDeliverPayment(), '');
  });
}
