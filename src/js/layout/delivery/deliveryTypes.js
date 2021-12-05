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

export const descriptionDelivery = deliveryfilter(deliveryfiljson);

export const mainImageDelivery = delivery(deliveryfoto);
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

function bodyFixPosition() {
  if (!document.body.hasAttribute('data-body-scroll-fix')) {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.setAttribute('data-body-scroll-fix', scrollPosition);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollPosition + 'px';
    document.body.style.width = '100%';
  }
}

function bodyUnfixPosition() {
  if (document.body.hasAttribute('data-body-scroll-fix')) {
    let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
    document.body.removeAttribute('data-body-scroll-fix');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflowY = '';
    window.scroll(0, scrollPosition);
  }
}

export function deliveryThreeModal() {
  // Modal Blockvar
  const openModal = (triggerSelector, modalDataSelector) => {
    const trigger = document.querySelector(triggerSelector);
    const modal = document.querySelector(modalDataSelector);
    if (!trigger || !modal) return;
    trigger.addEventListener('click', e => {
      e.preventDefault();
      modal.classList.add('modal_active');
      bodyFixPosition();
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
        bodyUnfixPosition();
      });
    });
  };
  closeModal();
}
