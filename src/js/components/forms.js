import formsMarkUp from '../../views/components/forms.hbs';
import forms from '../json/forms.json';

export class Forms {
  constructor(option) {
    this.option = option;
  }

  init() {
    this.nameData = null;
    this.classInit();
    this.listenerSubmit();
    this.error = 'unkown type form';
  }

  insertForm() {
    if (this.option === 'reviews') {
      return formsMarkUp(forms.reviews);
    } else if (this.option === 'delivery') {
      return formsMarkUp(forms.delivery);
    } else if (this.option === 'fittingForm') {
      return formsMarkUp(forms.fittingForm);
    } else if (this.option === 'fittingPage') {
      return formsMarkUp(forms.fittingPage);
    }
    console.error(this.error);
  }

  classInit() {
    if (this.option === 'reviews') {
      this.querySelector('form-reviews');
      this.nameData = 'formReviews';
    } else if (this.option === 'delivery') {
      this.querySelector('form-delivery');
      this.nameData = 'formDelivery';
    } else if (this.option === 'fittingForm') {
      this.querySelector('form-fitting-showroom');
      this.nameData = 'formFitting';
    } else if (this.option === 'fittingPage') {
      this.querySelector('form-fitting-showroom');
      this.nameData = 'formFitting';
    }
  }

  querySelector(option) {
    this.box = document.querySelector(`.${option}__form`);
  }

  listenerSubmit() {
    if (this.box) {
      let object = {};
      this.box.onsubmit = e => {
        let formData = new FormData(this.box);
        e.preventDefault();
        formData.forEach(function (value, key) {
          object[key] = value;
        });
        localStorage.setItem(`${this.nameData}`, object); //----------send this object
      };
    }
  }
}
