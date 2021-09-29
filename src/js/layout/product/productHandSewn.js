import markup from '../../../views/partials/product/productHandSewn.hbs';

export default class HandSewn {
  constructor({ root = 'main', typeInsert = 'beforeEnd' }) {
    this.root = document.querySelector(root);
    this.typeInsert = typeInsert;
    this.addMarkup();
  }

  createMarkup() {
    this.markup = markup();
  }

  addMarkup() {
    this.createMarkup();
    if (this.root) {
      this.root.insertAdjacentHTML(this.typeInsert, this.markup);
      this.addButtonListener();
    }
  }

  addButtonListener() {
    this.button = document.querySelector('.js-button-product-delivery');
    this.button.addEventListener('click', this.onButtonClick.bind(this));
  }

  onButtonClick() {
    // here will be a call to the backdrop and frame24
  }
}
