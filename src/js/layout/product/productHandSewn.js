import markup from '../../../views/partials/product/productHandSewn.hbs';
import productDataHandSewn from '../../json/productHandSewn.json';
import renderModal from '../../components/modal/modal';
import { tryOnModels } from '../../layout/product/tryOnModelsModal';
import { setEventTryOnModels } from '../../layout/product/tryOnModelsModal';
import { bodyUnfixPosition } from '../../components/scroll/scroll';

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
    // if (this.object) {
    //   console.log(this.object);
    //   this.object.forEach(el => {
    //     console.log(el.name);
    //     if (el.name) {
    //       document.querySelector(el.name).classList.add(el.className);
    //     }
    //   });
    // }
    console.log('object');
    renderModal(tryOnModels, setEventTryOnModels);
  };

  getMarkup = () => {
    this._createMarkup();
    return this.markup;
  };

  setEvent = () => {
    this._addButtonListener();
  };
}
