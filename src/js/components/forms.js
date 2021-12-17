import formsMarkUp from '../../views/components/forms.hbs';
import forms from '../json/forms.json';
import { postUserData, userId } from '../data/firebase_Servise';
import { nanoid } from 'nanoid';

export class Forms {
  constructor(option) {
    this.box = null;
    this.option = option;
  }

  init() {
    this.box = null;
    this.classInit();
    this.listenerSubmit();
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
  }

  classInit() {
    if (this.option === 'reviews') {
      this.querySelector('form-reviews');
      this.moreString('formReviews');
    } else if (this.option === 'delivery') {
      this.querySelector('form-delivery');
      this.moreString('formDelivery');
    } else if (this.option === 'fittingForm' || this.option === 'fittingPage') {
      this.querySelector('form-fitting-showroom');
      this.moreString('formFitting');
    }
  }

  moreString(name) {
    this.nameData = `${name}`;
  }

  querySelector(option) {
    this.box = document.querySelector(`.${option}__form`);
  }

  listenerSubmit() {
    if (this.box) {
      let object = {};
      this.box.onsubmit = e => {
        e.preventDefault();
        let formData = new FormData(this.box);
        formData.forEach(function (value, key) {
          object[key] = value;
        });
        if (this.option === 'reviews') {
          postUserData(userId, `userReviews`, nanoid(), object, 'database/formData/');
          return;
        } else {
          postUserData(userId, `${this.nameData}`, nanoid(), object, 'formData/');
        }
      };
    }
  }
}
