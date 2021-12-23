const $ = require('jquery');
require('../../slider/slick.min.js');

import cardsMarkup from '../../../views/partials/product/recomendationsCategory.hbs';
import animateHeader from '../../components/animateHeader';
import listCards from '../../../views/partials/product/productListFromCatalog.hbs';
import { productRender } from '../../call-list/product';
import { scrollTo } from '../../components/scrollTo';
import { bodyUnfixPosition } from '../../components/scroll/scroll';
let newData;

function refs() {
  return {
    favQuantityEl: document.getElementById('js-text-fav'),
  };
}

export default class RecomendationsCategory {
  constructor({ root, typeInsert, data, countsCard = 4, buttonPagination = true }) {
    this.typeInsert = typeInsert;
    this.countsCard = countsCard;
    this.buttonPagination = buttonPagination;
    if (data) newData = data;
    this.data = this._getData(newData);
    this._getDataFavorite();
    this.cardsListEl = null;
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

  _getData(data) {
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
  }

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
    this._addSlider();
  };

  _addSlider = () => {
    $(document).ready(function () {
      $('.recomendation-category .slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 4,
        touchMove: true,
        waitForAnimate: true,
        mobileFirst: true,
        variableWidth: true,
      });
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
        name: this.data[dataId].productName,
        image: {
          srcset: `${this.data[dataId].image[0].imageProduct} 1x, ${this.data[dataId].image[0].imageProductHigherResolution} 2x`,
          'srcset-mobile': `${this.data[dataId].image[0].imageProduct} 1x, ${this.data[dataId].image[0].imageProductHigherResolution} 2x`,
          src: this.data[dataId].image[0].imageProduct,
          alt: this.data[dataId].image[0].imageDescriprion,
        },
        price: this.data[dataId].productPrice,
        size: '',
        description: this.data[dataId].description,
        color: '',
      };
      ls.fav.push(elem);
      localStorage.setItem('favorites', JSON.stringify(ls));
      if (refs().favQuantityEl) {
        refs().favQuantityEl.innerHTML = ls.fav.length;
      }
    }
  };

  _removeFromFavorite = (id, dataId) => {
    let ls = JSON.parse(localStorage.getItem('favorites'));
    const lsid = ls.fav.findIndex(el => el.id === id);
    ls.fav.splice(lsid, 1);
    localStorage.setItem('favorites', JSON.stringify(ls));
    if (refs().favQuantityEl) {
      refs().favQuantityEl.innerHTML = ls.fav.length;
    }
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
    animateHeader('js-text-fav');
  };

  _cardToProduct = e => {
    if (e.target.nodeName !== 'use' && e.target.nodeName !== 'svg') {
      let id = '';
      if (!e.target.getAttribute('product-id')) {
        let el = e.target.parentElement;
        while (!id && el) {
          if (el.getAttribute('product-id')) {
            id = el.getAttribute('product-id');
          } else {
            el = el.parentElement;
          }
        }
      } else {
        id = e.currentTarget.getAttribute('product-id');
      }
      this.data.forEach(el => {
        if (el.id === id) {
          localStorage.setItem('productInfoData', JSON.stringify(el));
        }
      });
      this.removeEvent();
      bodyUnfixPosition();
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
    this.cardsListEl.forEach(el => {
      el.removeEventListener('click', this._onClickCards);
      el.removeEventListener('touch', this._onClickCards);
    });
  };

  setEvent = selector => {
    if (!selector) {
      this.cardsListEl = document.querySelectorAll('.recomendation-category__list');
    }
    this.cardsListEl.forEach(el => {
      el.addEventListener('click', this._onClickCards);
      el.addEventListener('touch', this._onClickCards);
    });
  };
}
