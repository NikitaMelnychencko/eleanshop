// Суда буду вносить функционал
import '../../../index.js';
import myRefs from '../../refs/refs';
import deliveryfoto from '../../../js/json/delivery.json';
import delivery from '../../../views/partials/delivery/deliveryTypes.hbs';
import deliveryButton from '../../../views/partials/delivery/buttonDelivProct.hbs';
import '../../../images/img/elean62862 1.jpeg';
import '../../../images/svg/Group.svg';

const {
  mainfoto: myFoto,
  delheadnav: myButtonDeliv,
  // openModalBtn: openModal,
  // closeModalBtn: colseModal,
  // modal: modal,
} = myRefs;

const fotoMarkUp = createFotoDelivery(deliveryfoto);
const delButtonMarkUp = createButtonDelivery(deliveryfoto);

myFoto.insertAdjacentHTML('beforeend', fotoMarkUp);
myButtonDeliv.insertAdjacentHTML('beforeend', delButtonMarkUp);

function createFotoDelivery(menu) {
  return menu.map(delivery).join('');
}
function createButtonDelivery(menu) {
  return menu.map(deliveryButton).join('');
}

// Modal Blockvar
const openModal = (triggerSelector, modalDataSelector) => {
  const trigger = document.querySelector(triggerSelector);
  const modal = document.querySelector(modalDataSelector);
  if (!trigger || !modal) return;
  trigger.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.add('modal_active');
  });
};
openModal('.buttons__button_one', '.modal[data-modal="one"]');
openModal('.buttons__button_two', '.modal[data-modal="two"]');
openModal('.buttons__button_third', '.modal[data-modal="third"]');
const closeModal = () => {
  const modals = document.querySelectorAll('.modal');
  if (!modals) return;
  modals.forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('.modal__close')) {
        el.classList.remove('modal_active');
      }
      if (!e.target.closest('.modal__body')) {
        el.classList.remove('modal_active');
      }
    });
  });
};
closeModal();
