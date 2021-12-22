const $ = require('jquery');
require('../../slider/slick.min.js');

import RecomendationsCategory from './recomendationsCategory.js';
import modalAddToCartMark from '../../../views/partials/product/productModalAddToCart.hbs';
import { checkoutRender } from '../../call-list/checkout.js';
import { scrollTo } from '../../components/scrollTo';
import renderModal from '../../components/modal/modal';
import { bodyUnfixPosition } from '../../components/scroll/scroll';
export default class ProductModalAddToCart {
  constructor({ typeInsert = 'beforeEnd', productName, objectClose }) {
    this.typeInsert = typeInsert;
    this.productName = productName;
    this.objCatalog = new RecomendationsCategory({ countsCard: 3, buttonPagination: false });
    this.objectClose = objectClose;
    this._addMarkup();
  }

  _createMarkup = () => {
    return modalAddToCartMark({
      product: this.productName,
      block: this.objCatalog.getListMarkup(),
    });
  };

  _addMarkup = () => {
    renderModal(this._createMarkup(), '');
    this.setEvent();
    this.objCatalog.setEvent();
  };

  _onCloseModal = () => {
    // document.body.classList.remove('modal-open');
    this.backdropRef = document.querySelector(`${this.objectClose.name}`);
    this.backdropRef.classList.add('is-hidden');
    bodyUnfixPosition();
  };

  _setCloseEvent = () => {
    this.buttonClose = document.querySelector('.js-close-product-modal');
    this.buttonClose.addEventListener('click', this._onCloseModal);
  };

  _onClickNext = () => {
    this._onCloseModal();
    // тут прописать открітие след. модалки
    checkoutRender();
    scrollTo(0, 700);
  };

  _setNextBtnEvent = () => {
    this.buttonNext = document.querySelector('.js-next-modal-to-cart');
    if (this.buttonNext) {
      this.buttonNext.addEventListener('click', this._onClickNext);
    }
  };

  setEvent = () => {
    this._setCloseEvent();
    this._setNextBtnEvent();
  };
}
