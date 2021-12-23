import markup from '../../../views/partials/product/productHandSewn.hbs';
import renderModal from '../../components/modal/modal';
import { tryOnModels } from '../../layout/product/tryOnModelsModal';
import { setEventTryOnModels } from '../../layout/product/tryOnModelsModal';

export default class HandSewn {
  constructor() {}

  _createMarkup = data => {
    this.markup = markup(data);
  };

  _addButtonListener = () => {
    this.button = document.querySelector('.js-button-product-delivery');
    this.button.addEventListener('click', this._onNextBtnClick);
  };

  _onNextBtnClick = () => {
    renderModal(tryOnModels, setEventTryOnModels);
  };

  getMarkup = data => {
    this._createMarkup(data);
    return this.markup;
  };

  setEvent = () => {
    this._addButtonListener();
  };
}
