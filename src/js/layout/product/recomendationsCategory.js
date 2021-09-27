const $ = require('jquery');
require('../../slick/slick.min.js');

import cardsMarkup from '../../../views/partials/product/recomendationsCategory.hbs';

export default class RecomendationsCategory {
  constructor({ root, typeInsert, data }) {
    this.root = document.querySelector(root);
    this.typeInsert = typeInsert;
    this.data = data;
    this.addMarkup();
    if (window.innerWidth <= 720) {
      this.addSlider();
    }
  }

  createMarkup() {
    if (this.data) {
      return cardsMarkup(this.data);
    }
  }

  addMarkup() {
    const mark = this.createMarkup();
    if (mark) {
      this.root.insertAdjacentHTML(this.typeInsert, mark);
    }
  }

  addSlider() {
    $('.slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 2.5,
      focusOnSelect: true,
    });
  }
}
