import RecomendationsCategory from './recomendationsCategory.js';
import modalAddToCartMark from '../../../views/partials/product/productModalAddToCart.hbs';

export default class ProductModalAddToCart {
  constructor({ productName, callback }) {
    this.productName = productName;
    this.callback = callback;
    this.objCatalog = new RecomendationsCategory({ countsCard: 3, buttonPagination: false });
  }

  _createMarkup = () => {
    console.log({
      productName: this.productName,
      block: this.objCatalog.getListMarkup(),
    });
    return modalAddToCartMark({
      product: this.productName,
      block: this.objCatalog.getListMarkup(),
    });
  };

  getMarkup = () => {
    return this._createMarkup();
  };

  setSlider = () => {
    this.objCatalog.setSlider();
  };

  onCloseModal = () => {
    document.querySelector('.product-modal-add-cart').remove();
    if (this.buttonClose) {
      this.buttonClose.forEach(el => {
        el.removeEventListener('click', this.onCloseModal);
      });
    }
    if (this.buttonNext) {
      this.buttonNext.removeEventListener('click', this.callback);
    }
  };

  setCloseEvent = () => {
    this.buttonClose = document.querySelectorAll('.js-close-modal');
    if (this.buttonClose) {
      this.buttonClose.forEach(el => {
        el.addEventListener('click', this.onCloseModal);
      });
    }
  };

  setCallbackEvent = () => {
    if (this.callback) {
      this.buttonNext = document.querySelector('.js-next');
      if (this.buttonNext) {
        this.buttonNext.addEventListener('click', this.callback);
      }
    }
  };
}
