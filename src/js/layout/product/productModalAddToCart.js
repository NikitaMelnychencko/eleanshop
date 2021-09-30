import RecomendationsCategory from './recomendationsCategory.js';
import modalAddToCartMark from '../../../views/partials/product/productModalAddToCart.hbs';

export default class ProductModalAddToCart {
  constructor({ root, typeInsert = 'beforeEnd', productName }) {
    if (root) {
      this.root = document.querySelector(root);
    }
    this.typeInsert = typeInsert;
    this.productName = productName;
    this.objCatalog = new RecomendationsCategory({ countsCard: 3, buttonPagination: false });
    this._addMarkup();
    this.self = document.querySelector('.product-modal-add-cart');
    this.setSlider();
  }

  _createMarkup = () => {
    return modalAddToCartMark({
      product: this.productName,
      block: this.objCatalog.getListMarkup(),
    });
  };

  _addMarkup = () => {
    if (this.root) {
      this.root.insertAdjacentHTML(this.typeInsert, this._createMarkup());
      this.setEvent();
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
    $('.slider').slick({
      arrows: false,
      dots: false,
      slidesToShow: 2.5,
    });
  };

  _onCloseModal = () => {
    this.self.classList.add('hidden');
    if (this.buttonClose) {
      this.buttonClose.forEach(el => {
        el.removeEventListener('click', this._onCloseModal);
      });
    }
    if (this.buttonNext) {
      this.buttonNext.removeEventListener('click', this._onClickNext);
    }
  };

  _setCloseEvent = () => {
    this.buttonClose = document.querySelectorAll('.js-close-modal');
    if (this.buttonClose) {
      this.buttonClose.forEach(el => {
        el.addEventListener('click', this._onCloseModal);
      });
    }
  };

  _onClickNext = () => {
    this._onCloseModal();
    // тут прописать открітие след. модалки
  };

  _setNextBtnEvent = () => {
    this.buttonNext = document.querySelector('.js-next');
    if (this.buttonNext) {
      this.buttonNext.addEventListener('click', this._onClickNext);
    }
  };

  setEvent = () => {
    this._setCloseEvent();
    this._setNextBtnEvent();
  };

  show = () => {
    this.self.classList.remove('hidden');
    this.setEvent();
  };
}
