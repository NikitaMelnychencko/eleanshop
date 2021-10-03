const $ = require('jquery');
require('../../slick/slick.min.js');

import cardsMarkup from '../../../views/partials/product/recomendationsCategory.hbs';
import listCards from '../../../views/partials/product/productListFromCatalog.hbs';
import cards from '../../json/catalog.json';

export default class RecomendationsCategory {
  constructor({ root, typeInsert, data = cards, countsCard = 4, buttonPagination = true }) {
    this.typeInsert = typeInsert;
    this.countsCard = countsCard;
    this.buttonPagination = buttonPagination;
    this.data = this._getData(data);
    if (root) {
      this.root = document.querySelector(root);
      this._addMarkup();
      this.setSlider();
    }
  }

  _getRandom = max => {
    return Math.floor(Math.random() * (max + 1));
  };

  _getData = data => {
    const arr = [];
    let num = -1;
    for (let i = 0; i < this.countsCard; i++) {
      if (i === 0) {
        arr.push(this._getRandom(data.length - 1));
      } else {
        num = arr[0];
        while (arr.includes(num)) {
          num = this._getRandom(data.length - 1);
        }
        arr.push(num);
      }
    }

    return arr.map(el => data[el]);
  };

  _createMarkup = () => {
    if (this.data) {
      return cardsMarkup({ list: listCards(this.data) });
    }
  };

  _addMarkup = () => {
    const mark = this._createMarkup();
    console.log(mark);
    if (mark) {
      this.root.insertAdjacentHTML(this.typeInsert, mark);
    }
  };

  getListMarkup = () => {
    if (this.data) {
      return listCards(this.data);
    }
  };

  getMarkup = () => {
    return this._createMarkup();
  };

  setSlider = () => {
    if (window.innerWidth <= 720) {
      this._addSlider();
    }
  };

  _addSlider = () => {
    $('.recomendation-category .slider').slick({
      arrows: false,
      dots: this.buttonPagination,
      infinite: true,
      slidesToShow: 2.5,
      focusOnSelect: true,
    });
  };
}
