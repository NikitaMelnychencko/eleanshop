import '../../../images/svg/icon-product-delivery.svg';
import '../../../images/img/product/recomend-category/product-mobile-1.jpg';
import '../../../images/img/product/recomend-category/product-mobile-2.jpg';
import '../../../images/img/product/recomend-category/product-mobile-3.jpg';
import '../../../images/img/product/recomend-category/product-mobile-1@2x.jpg';
import '../../../images/img/product/recomend-category/product-mobile-2@2x.jpg';
import '../../../images/img/product/recomend-category/product-mobile-3@2x.jpg';
import '../../../images/img/product/recomend-category/product-desktop-1.jpg';
import '../../../images/img/product/recomend-category/product-desktop-2.jpg';
import '../../../images/img/product/recomend-category/product-desktop-3.jpg';
import '../../../images/img/product/recomend-category/product-desktop-4.jpg';
import '../../../images/img/product/recomend-category/product-desktop-1@2x.jpg';
import '../../../images/img/product/recomend-category/product-desktop-2@2x.jpg';
import '../../../images/img/product/recomend-category/product-desktop-3@2x.jpg';
import '../../../images/img/product/recomend-category/product-desktop-4@2x.jpg';

// window.jQuery = window.$ = require('jquery');
// require('../../layout/product/slick.min.js');

import cardsMarkup from '../../../views/partials/product/recomendationsCategory.hbs';
import cards from '../../json/recomendationCategory.json';

class RecomendationsCategory {
  constructor({ root = 'main', typeInsert = 'beforend', cardsMarkup, data }) {
    this.root = root;
    this.typeInsert = typeInsert;
    this.markup = cardsMarkup;
    this.data = data;
    this.addMarkup();
  }

  createMarkup() {
    if (this.data) {
      return this.markup(data);
    }
  }

  addMarkup() {
    const mark = this.createMarkup();
    if (mark) {
      this.root.insertAdjacentHTML(this.typeInsert, mark);
    }
  }
}
const obj = new RecomendationsCategory(
  'main',
  'beforend',
  cardsMarkup,
  cards.filter((el, idx) => idx <= 3),
);
// obj.addMarkup();

// const data = cardsMarkup(cards.filter((el, idx) => idx <= 3)); // формування розмітки
// document.querySelector('main').insertAdjacentHTML('beforeend', data); // Додавання розмітки в DOM
