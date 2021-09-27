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

const $ = require('jquery');
require('../../layout/product/slick.min.js');

import cardsMarkup from '../../../views/partials/product/recomendationsCategory.hbs';
import cards from '../../json/recomendationCategory.json';

class RecomendationsCategory {
  constructor({ root, typeInsert, cardsMarkup, data }) {
    this.root = document.querySelector(root);
    this.typeInsert = typeInsert;
    this.markup = cardsMarkup;
    this.data = data;
    this.addMarkup();
    if (window.innerWidth <= 720) {
      this.addSlider();
    }
  }

  createMarkup() {
    if (this.data) {
      return this.markup(this.data);
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

const obj = new RecomendationsCategory({
  root: 'main',
  typeInsert: 'beforeEnd',
  cardsMarkup,
  data: cards.filter((el, idx) => idx <= 3),
});
// obj.addMarkup();

// const data = cardsMarkup(cards.filter((el, idx) => idx <= 3)); // формування розмітки
// document.querySelector('main').insertAdjacentHTML('beforeend', data); // Додавання розмітки в DOM
