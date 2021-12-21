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

// const fotoMarkUp = createFotoDelivery(deliveryfoto);
// const delButtonMarkUp = createButtonDelivery(deliveryfoto);

// myFoto.insertAdjacentHTML('beforeend', fotoMarkUp);
// myButtonDeliv.insertAdjacentHTML('beforeend', delButtonMarkUp);

function createFotoDelivery(menu) {
  return menu.map(delivery).join('');
}
function createButtonDelivery(menu) {
  return menu.map(deliveryButton).join('');
}

export function deliveryThreeModal() {
  // Modal Blockvar
  // const openModal = (triggerSelector, modalDataSelector) => {
  //   const trigger = document.querySelector(triggerSelector);
  //   const modal = document.querySelector(modalDataSelector);
  //   if (!trigger || !modal) return;
  //   trigger.addEventListener('click', e => {
  //     e.preventDefault();
  //     modal.classList.add('modal_active');
  //   });
  const deliveryButtonOne = document.querySelector('.buttons__button_one');
  deliveryButtonOne.addEventListener('click', e => {
    e.preventDefault();
    console.log('deliveryButtonOne');
    renderModal(modalDeliveryAndReturn(), '');
  });

  const deliveryButtonTwo = document.querySelector('.buttons__button_two');
  deliveryButtonTwo.addEventListener('click', e => {
    e.preventDefault();
    console.log('deliveryButtonOne');
    renderModal(modalDelivery(), '');
  });
  const deliveryButtonThird = document.querySelector('.buttons__button_third');
  deliveryButtonThird.addEventListener('click', e => {
    e.preventDefault();
    console.log('deliveryButtonOne');
    renderModal(modalDeliverPayment(), '');
  });
}

// openModal('.buttons__button_one', '.modal[data-modal="one"]');
// openModal('.buttons__button_two', '.modal[data-modal="two"]');
// openModal('.buttons__button_third', '.modal[data-modal="third"]');

// const closeModal = () => {
//   const modals = document.querySelectorAll('.modal');
//   if (!modals) return;
//   modals.forEach(el => {
//     el.addEventListener('click', e => {
//       if (e.target.closest('.modal__close')) {
//         el.classList.remove('modal_active');
//       }
//       if (!e.target.closest('.modal__body')) {
//         el.classList.remove('modal_active');
//       }
//     });
//   });
// };
// closeModal();
// }
