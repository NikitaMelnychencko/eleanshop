const $ = require('jquery');
require('../../slider/slick.min.js');

import cardsMarkup from '../../../views/partials/product/recomendationsCategory.hbs';
import listCards from '../../../views/partials/product/productListFromCatalog.hbs';
import cards from '../../json/catalog.json';
import { productRender } from '../../call-list.js';
import { scrollTo } from '../../components/blockHelp/blockHelp.js';

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

  _onClickLike = e => {
    let id = '';
    let elemLike = null;
    if (!e.target.dataset.id) {
      let el = e.target.parentElement;
      while (!id) {
        if (el.dataset.id) {
          id = el.dataset.id;
          elemLike = el;
        } else {
          el = el.parentElement;
        }
      }
    } else {
      id = e.target.dataset.id;
      elemLike = e.target;
    }
    const dataId = this.data.findIndex(el => el.id === id);
    if (this.data[dataId].likes) {
      this.data[dataId].likes = false;
      this._removeFromFavorite(id, dataId);
    } else {
      this.data[dataId].likes = true;
      this._insertIntoLSFavorite(id, dataId);
    }
    elemLike.classList.toggle('active');
  };

  _cardToProduct = e => {
    if (e.target.nodeName !== 'use' && e.target.nodeName !== 'svg') {
      let id = '';
      if (!e.target.getAttribute('id')) {
        let el = e.target.parentElement;
        while (!id) {
          if (el.getAttribute('id')) {
            id = el.getAttribute('id');
          } else {
            el = el.parentElement;
          }
        }
      } else {
        id = e.currentTarget.getAttribute('id');
      }
      cards.forEach(el => {
        if (el.id === id) {
          localStorage.setItem('productInfoData', JSON.stringify(el));
        }
      });
      this.removeEvent();
      productRender();
      scrollTo(0, 700);
    }
  };

  _onClickCards = e => {
    if (e.target.nodeName !== 'use' && e.target.nodeName !== 'svg') {
      this._cardToProduct(e);
    } else {
      this._onClickLike(e);
    }
  };

  removeEvent = () => {
    this.cardsListEl.removeEventListener('click', this._onClickCards);
    this.cardsListEl.removeEventListener('touch', this._onClickCards);
  };

  setEvent = selector => {
    if (!selector) {
      this.cardsListEl = document.querySelector(
        '.recomendation-category .recomendation-category__list',
      );
    } else {
      const strCard = selector + ' .recomendation-category__list';
      this.cardsListEl = document.querySelector(strCard);
    }
    this.cardsListEl.addEventListener('click', this._onClickCards);
    this.cardsListEl.addEventListener('touch', this._onClickCards);
  };
}
