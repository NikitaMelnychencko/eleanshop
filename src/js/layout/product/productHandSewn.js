import markup from '../../../views/partials/product/productHandSewn.hbs';
import productDataHandSewn from '../../json/productHandSewn.json';

export default class HandSewn {
  constructor({
    root = 'main',
    typeInsert = 'beforeEnd',
    modalNext,
    classModalNext = 'is-hidden',
    backdrop,
    classBackdrop = 'is-hidden',
  }) {
    this.root = document.querySelector(root);
    this.typeInsert = typeInsert;
    this.backdropRef = document.querySelector('[data-modal]');
    this.modalNext = modalNext;
    this.classModalNext = classModalNext;
    this.backdrop = backdrop;
    this.classBackdrop = classBackdrop;
    if (this.root) {
      this.addMarkup();
    }
  }

  createMarkup = () => {
    this.markup = markup(productDataHandSewn);
  };

  addMarkup = () => {
    this.createMarkup();
    if (this.root) {
      this.root.insertAdjacentHTML(this.typeInsert, this.markup);
      this.addButtonListener();
    }
  };

  addButtonListener = () => {
    this.button = document.querySelector('.js-button-product-delivery');
    this.button.addEventListener('click', this.onButtonClick.bind(this));
  };

  onNextBtnClick = () => {
    const backdropRef = document.querySelector(this.backdrop);
    const modalRef = document.querySelector(this.modalNext);
    backdropRef.classList.remove(this.classBackdrop);
    modalRef.classList.remove(this.classModalNext);
  };

  onButtonClick = () => {
    this.button.addEventListener('clck', this.onNextBtnClick);
  };
}
