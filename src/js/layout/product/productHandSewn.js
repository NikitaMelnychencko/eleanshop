import markup from '../../../views/partials/product/productHandSewn.hbs';
import productDataHandSewn from '../../json/productHandSewn.json';

export default class HandSewn {
  constructor({ root = 'main', typeInsert = 'beforeEnd', callback }) {
    this.root = document.querySelector(root);
    this.typeInsert = typeInsert;
    this.callback = callback;
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

  onButtonClick = () => {
    this.button.addEventListener('clck', this.callback);
  };
}
