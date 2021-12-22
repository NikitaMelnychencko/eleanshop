require('geteventlisteners');
import renderModal from '../../components/modal/modal';
import { modalFormMarkup, onResize } from './thanksForOrdering';
export class ModalData {
  constructor({ idInputDay, idListDay, idInputTime, idListTime }) {
    this._refs = this._getRefs(idInputDay, idListDay, idInputTime, idListTime);
    this._addEventDelivery();
    this._addEventInput();
    this._addEventList();
    this._addEventPayment();
    this._addEventBasicInformation();
    this._updateTotalPrice();
    this._addEventFormSubmit();
  }
  _getRefs(idInputDay, idListDay, idInputTime, idListTime) {
    const refs = {
      inputDay: document.getElementById(`${idInputDay}`),
      listDay: document.getElementById(`${idListDay}`),
      inputTime: document.getElementById(`${idInputTime}`),
      listTime: document.getElementById(`${idListTime}`),
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
    this._refs.inputDay.addEventListener('click', event => {
      this._refs.listDay.classList.toggle('showroom-list--hide');
      document.body.classList.toggle('extra');
    });
    this._refs.inputTime.addEventListener('click', event => {
      this._refs.listTime.classList.toggle('showroom-list--hide');
      document.body.classList.toggle('extra');
    });
    this._refs.inputDay.addEventListener('blur', event => {
      this._addLocalStorage(event.target.name, event.target.value);
    });
    this._refs.inputTime.addEventListener('blur', event => {
      this._addLocalStorage(event.target.name, event.target.value);
    });
  }
  _addEventList() {
    this._refs.listDay.addEventListener('click', event => {
      this._refs.inputDay.value = event.target.innerText;
      this._refs.listDay.classList.toggle('showroom-list--hide');
      this._addLocalStorage(this._refs.inputDay.name, event.target.innerText);
    });
    this._refs.listTime.addEventListener('click', event => {
      this._refs.inputTime.value = event.target.innerText;
      this._refs.listTime.classList.toggle('showroom-list--hide');
      this._addLocalStorage(this._refs.inputTime.name, event.target.innerText);
    });
  }
  _addEventDelivery() {
    this._updateValueDelivery();

    this._refs.delivery.addEventListener('click', event => {
      if (event.target.nodeName !== 'INPUT') {
        return;
      }

      if (
        event.target.value === 'Showroom' ||
        (event.target.value === 'By_courier_in_Kiev' && event.target.checked === true)
      ) {
        this._refs.formDay.classList.add('showroom-method--hide');
        this._toggleInput(false, true);
      } else {
        this._refs.formDay.classList.remove('showroom-method--hide');
        this._toggleInput(true, false);
      }
      if (event.target.checked === true) {
        this._addLocalStorage(event.target.name, event.target.value);
      }
      this._disableButton(event.target.value);
    });
  }
  _toggleInput(valueFirst, valueSecond) {
    this._refs.inputDay.disabled = valueFirst;
    this._refs.inputTime.disabled = valueFirst;
    this._refs.inputDay.required = valueSecond;
    this._refs.inputTime.required = valueSecond;
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
      renderModal(modalFormMarkup, onResize);

      this._refs.arrInputInf.forEach(el => {
        (el.value = ''), (el.checked = false);
      });
      this._refs.textareaInfo.value = '';
    });
  }
  _addLocalStorage(name, value) {
    localStorage.setItem(`${name}`, `${value}`);
  }
  _disableButton(value) {
    if (value === 'Showroom' || value === 'By_courier_abroad') {
      this._refs.arrInputPayment.forEach((el, indx) => {
        if (indx === 1 || indx === 2) {
          el.disabled = true;
          el.checked = false;
        }
      });
    } else {
      this._refs.arrInputPayment.forEach((el, indx) => {
        el.disabled = false;
      });
    }
  }
  _updateValueDelivery() {
    const delivery = this._updateValueInLocal('delivery-method');
    this._refs.arrInputDelivery.forEach(el => {
      if (el.value === delivery) {
        el.checked = true;
        if (el.value === 'Showroom' || el.value === 'By_courier_in_Kiev') {
          this._refs.formDay.classList.add('showroom-method--hide');
        } else {
          localStorage.removeItem(`${this._refs.inputDay.name}`);
          localStorage.removeItem(`${this._refs.inputTime.name}`);
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
