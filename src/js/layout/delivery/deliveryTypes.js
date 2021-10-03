// Суда буду вносить функционал
import refs from '../../refs/refs';
import deliveryfoto from '../../../js/json/deliveryImage.json';
import delivery from '../../../views/partials/delivery/deliveryTypes.hbs';
import deliveryButton from '../../../views/partials/delivery/buttonDelivProct.hbs';
import deliveryPage from '../../../views/layouts/delivery.hbs';
import deliveryfiljson from '../../../js/json/filter.json';
import deliveryfilter from '../../../views/partials/delivery/filter.hbs';
import formsQuestions from '../../../views/partials/delivery/formsQuestion.hbs';
import formQuestionsData from '../../../js/json/formsQuestion.json';

const descriptionDelivery = deliveryfilter(deliveryfiljson);

const mainImageDelivery = delivery(deliveryfoto);
const buttonsDelivery = deliveryButton();
const questionDelivery = formsQuestions(formQuestionsData);
const deliveryPageMarkUp = deliveryPage({
  mainImageDelivery,
  buttonsDelivery,
  descriptionDelivery,
  questionDelivery,
});
refs.mainEL.insertAdjacentHTML('beforeend', deliveryPageMarkUp);

// const myRefs = {
//   mainfoto: document.querySelector('.js-mainfoto'),,
//   delheadnav: myButtonDeliv,
//   openModalBtn: openModal,
//   closeModalBtn: colseModal,
//   modal: modal,
// };

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
