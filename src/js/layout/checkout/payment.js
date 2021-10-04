import payment_payment from '../../../views/partials/checkout/payment.hbs';
import method from '../../json/method.json';
import {onBtnClick} from './thanksForOrdering'
require('geteventlisteners');
export const createPayment = payment_payment({ method });


export class ModalData {
  constructor({ idInput, idList }) {
    this._refs = this._getRefs(idInput, idList);
    this._addEventDelivery();
    this._addEventInput();
    this._addEventList();
    this._addEventPayment();
    this._addEventBasicInformation();
    this._updateTotalPrice();
    this._addEventFormSubmit();
  }
  _getRefs(idInput, idList) {
    const refs = {
      input: document.getElementById(`${idInput}`),
      list: document.getElementById(`${idList}`),
      formDay: document.querySelector('.showroom-method'),
      delivery: document.querySelector('.delivery-method'),
      payment: document.querySelector('.payment'),
      infoEL: document.querySelector('.basic-information'),
      totalPriceEl: document.querySelector('.total__value'),
      orderingTotalboxEl: document.querySelector('.ordering__total'),
      orderingForm: document.querySelector('.js-form'),
    };
    refs.arrInputDelivery = refs.delivery.querySelectorAll('input');
    refs.arrInputPayment = refs.payment.querySelectorAll('input');
    refs.arrInputInf = refs.infoEL.querySelectorAll('input');
    refs.textareaInfo = refs.infoEL.querySelector('textarea');
    return refs;
  }
  _addEventInput() {
    this._refs.input.addEventListener('click', event => {
      this._refs.list.classList.toggle('showroom-list--hide');
      document.body.classList.toggle('extra');
    });
  }
  _addEventList() {
    this._refs.list.addEventListener('click', event => {
      this._refs.input.value = event.target.innerText;
      this._refs.list.classList.toggle('showroom-list--hide');
      this._addLocalStorage(this._refs.input.name, event.target.innerText);
    });
  }
  _addEventDelivery() {
    this._updateValueDelivery();
    if (!this._refs.delivery.getEventListeners('click')) {
      this._refs.delivery.addEventListener('click', event => {
        if (event.target.nodeName !== 'INPUT') {
          return;
        }
        
        if (event.target.value === 'Showroom'||event.target.value === 'By_courier_in_Kiev' && event.target.checked === true) {
          this._refs.formDay.classList.add('showroom-method--hide');
        } else {
          this._refs.formDay.classList.remove('showroom-method--hide');
          console.log(this._refs.input.name);
        }
        if (event.target.checked === true) {
          this._addLocalStorage(event.target.name, event.target.value);
        }
      });
    }
  }
  _addEventPayment() {
    this._updatePayment();
    this._refs.payment.addEventListener('click', event => {
      if (event.target.nodeName !== 'INPUT') {
        return;
      }
      if (event.target.checked === true) {
        this._addLocalStorage(event.target.name, event.target.value);
      }
    });
  }
  _addEventBasicInformation() {
    this._updateValueBasicInformation();
    this._refs.arrInputInf.forEach(elem => {
      elem.addEventListener('blur', event => {
        this._addLocalStorage(event.target.name, event.target.value);
      });
    });
    this._refs.textareaInfo.addEventListener('blur', event => {
      this._addLocalStorage(event.target.name, event.target.value);
    });
  }
  _addEventFormSubmit() {
    this._refs.orderingForm.addEventListener('submit', e => {
      e.preventDefault();
      onBtnClick()
     
    });
  }
  _addLocalStorage(name, value) {
    localStorage.setItem(`${name}`, `${value}`);
  }
  _updateValueDelivery() {
    const delivery = this._updateValueInLocal('delivery-method');
    this._refs.arrInputDelivery.forEach(el => {
      if (el.value === delivery) {
        el.checked = true;
        if (el.value === 'Showroom'||el.value === 'By_courier_in_Kiev') {
          this._refs.formDay.classList.add('showroom-method--hide');
        } else {
          localStorage.removeItem(`${this._refs.input.name}`);
        }
      }
    });
  }
  _updateValueBasicInformation() {
    this._refs.arrInputInf.forEach(elem => {
      elem.value = this._updateValueInLocal(elem.name);
    });
    this._refs.textareaInfo.value = this._updateValueInLocal(this._refs.textareaInfo.name);
  }
  _updatePayment() {
    const payment = this._updateValueInLocal('payment-method');
    this._refs.arrInputPayment.forEach(el => {
      if (el.value === payment) {
        el.checked = true;
      }
    });
  }
  _updateTotalPrice() {
    this._refs.totalPriceEl.textContent = this._refs.orderingTotalboxEl.textContent;
    this._refs.orderingForm.addEventListener('click', e => {
      if (e.target.nodeName !== 'BUTTON') {
        return;
      }
      this._refs.totalPriceEl.textContent = this._refs.orderingTotalboxEl.textContent;
    });
  }
  _updateValueInLocal(name) {
    return localStorage.getItem(`${name}`);
  }

}
