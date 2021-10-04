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
    this._getDataFavorite();
    if (root) {
      this.root = document.querySelector(root);
      this._addMarkup();
      this.setSlider();
    }
  }

  _getRandom = max => {
    return Math.floor(Math.random() * (max + 1));
  };

  _getDataFavorite = () => {
    const datas = JSON.parse(localStorage.getItem('favorites'));
    if (datas) {
      this.data.map(el => {
        for (let { id } of datas.fav) {
          el.likes = id === el.id ? true : false;
        }
      });
    } else {
      this.data.map(el => (el.likes = false));
    }
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

  _insertIntoLSFavorite = (id, dataId) => {
    let ls = JSON.parse(localStorage.getItem('favorites'));
    let newEl = true;
    if (ls) {
      ls.fav.forEach(el => {
        if (el.id === id) {
          newEl = false;
        }
      });
    } else {
      ls = { fav: [] };
    }
    if (newEl) {
      const elem = {
        id: this.data[dataId].id,
        name: this.data[dataId].name,
        image: {
          srcset: this.data[dataId].image.srcset,
          'srcset-mobile': '',
          src: this.data[dataId].image.src,
          alt: this.data[dataId].image.alt,
        },
        price: this.data[dataId].price,
        size: 0,
        description: this.data[dataId].description,
        color: '',
      };
      ls.fav.push(elem);
      localStorage.setItem('favorites', JSON.stringify(ls));
    }
  };

  _removeFromFavorite = (id, dataId) => {
    let ls = JSON.parse(localStorage.getItem('favorites'));
    const lsid = ls.fav.findIndex(el => el.id === id);
    ls.fav.splice(lsid, 1);
    localStorage.setItem('favorites', JSON.stringify(ls));
  };

  _onClickLike = el => {
    const id = el.currentTarget.dataset.id;
    const dataId = this.data.findIndex(el => el.id === id);
    if (this.data[dataId].likes) {
      this.data[dataId].likes = false;
      this._removeFromFavorite(id, dataId);
    } else {
      this.data[dataId].likes = true;
      this._insertIntoLSFavorite(id, dataId);
    }
    el.currentTarget.classList.toggle('active');
  };

  setEvent = selector => {
    if (!selector) {
      this.buttonLike = document.querySelectorAll('.recomendation-category .js-btn-like');
    } else {
      const str = selector + ' .js-btn-like';
      this.buttonLike = document.querySelectorAll(str);
    }
    this.buttonLike.forEach(el => el.addEventListener('click', this._onClickLike));
  };
}
