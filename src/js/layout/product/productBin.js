import markupBin from '../../../views/partials/product/productBin.hbs';
import dataBin from '../../json/productBin.json';

export default class ProductBin {
  constructor({ root, data = dataBin }) {
    if (root) {
      this.root = document.querySelector(root);
    }
    this.data = data;
    this.data.forEach(el => {
      el.priceNum = Number(
        el.price
          .split('')
          .filter(el => Number(el) || el === '.' || el === '0')
          .join(''),
      );
    });
  }

  _createMarkup = () => {
    return markupBin(this.data);
  };

  _addMarkup = () => {
    if (this.root) {
      this.root.insertAdjacentHTML(this._createMarkup());
    }
  };

  getMarkup = () => {
    return this._createMarkup();
  };

  _updateLS = () => {
    localStorage.setItem('productBin', JSON.stringify(this.data));
  };

  _updateMarkup() {
    this.counter.forEach((el, idx) => {
      if (Number(el.textContent) !== this.data[idx].count) {
        el.textContent = this.data[idx].count;
      }
    });
  }

  _onDec = e => {
    const id = e.target.parent.dataset.id;
    const elem = this.dataBin.find(el => el.id === id);
    if (elem.count > 1) {
      elem.count -= 1;
      this._updateLS();
      this._updateMarkup();
    }
  };

  _onInc = e => {
    const id = e.target.parent.dataset.id;
    const elem = this.dataBin.find(el => el.id === id);
    elem.count += 1;
    this._updateLS();
    this._updateMarkup();
  };

  initialBin = () => {
    this.counerBtnDec = document.querySelectorAll('.product-bin__button-dec');
    this.counerBtnInc = document.querySelectorAll('.product-bin__button-inc');
    this.counter = document.querySelectorAll('.product-bin__product-count');
    this.counterBtnDec.forEach(el => {
      el.addEventListener('click', this._onDec);
    });
    this.counterBtnInc.forEach(el => {
      el.addEventListener('click', this._onInc);
    });
  };
}
