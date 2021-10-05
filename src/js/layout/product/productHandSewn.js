import markup from '../../../views/partials/product/productHandSewn.hbs';
import productDataHandSewn from '../../json/productHandSewn.json';

export default class HandSewn {
  constructor({ root, typeInsert = 'beforeEnd', object }) {
    this.root = document.querySelector(root);
    this.typeInsert = typeInsert;
    this.backdropRef = document.querySelector('[data-modal]');
    this.object = object;
    if (this.root) {
      this._addMarkup();
    }
  }

  _createMarkup = () => {
    this.markup = markup(productDataHandSewn);
  };

  _addMarkup = () => {
    this.createMarkup();
    if (this.root) {
      this.root.insertAdjacentHTML(this.typeInsert, this.markup);
      this._addButtonListener();
    }
  };

  _addButtonListener = () => {
    this.button = document.querySelector('.js-button-product-delivery');
    this.button.addEventListener('click', this._onNextBtnClick);
  };

  _onNextBtnClick = () => {
    console.log('==============');
    console.log(this.object);
    if (this.object) {
      this.object.forEach(el => {
        if (el.name) {
          document.querySelector(el.name).classList.add(el.className);
        }
      });
    }
  };

  // _onButtonClick = () => {
  //   this.button.addEventListener('clck', this.onNextBtnClick);
  // };

  getMarkup = () => {
    this._createMarkup();
    return this.markup;
  };

  setEvent = () => {
    this._addButtonListener();
  };
}
