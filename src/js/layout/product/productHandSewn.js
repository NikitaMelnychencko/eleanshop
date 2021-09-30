import markup from '../../../views/partials/product/productHandSewn.hbs';
import productDataHandSewn from '../../json/productHandSewn.json';

export default class HandSewn {
  constructor({ root = 'main', typeInsert = 'beforeEnd' }) {
    this.root = document.querySelector(root);
    this.typeInsert = typeInsert;
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
    // тут прописати відкриття модального вікна
  };

  onButtonClick = () => {
    this.button.addEventListener('clck', this.onNextBtnClick);
  };
}
