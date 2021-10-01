import markup from '../../../views/partials/product/productHandSewn.hbs';
import productDataHandSewn from '../../json/productHandSewn.json';

export default class HandSewn {
  constructor({ root = 'main', typeInsert = 'beforeEnd', object }) {
    this.root = document.querySelector(root);
    this.typeInsert = typeInsert;
    this.backdropRef = document.querySelector('[data-modal]');
    this.object = object;
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
    if (this.object) {
      this.object.forEach(el => {
        if (el.name) {
          document.querySelector(el.name).classList.remove(this.el.className);
        }
      });
    }
  };

  onButtonClick = () => {
    this.button.addEventListener('clck', this.onNextBtnClick);
  };
}
