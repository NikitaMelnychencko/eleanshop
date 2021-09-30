import markupBin from '../../../views/partials/product/productBin.hbs';
import dataBin from '../../json/productBin.json';

export default class ProductBin {
  constructor({ root, typeInsert = 'beforeEnd', data = dataBin, callback }) {
    const dataLS = localStorage.getItem('productBin');
    console.log(dataLS);
    if (dataLS) {
      this.data = JSON.parse(dataLS);
    } else {
      this.data = data;
      this.data.forEach(el => {
        el.priceNum = el.price;
        const arr = String(el.price).split('');
        for (let i = arr.length - 3; i > 0; i -= 3) {
          arr.splice(i, 0, ' ');
        }
        el.price = arr.join('') + ' ₽';
        localStorage.setItem('productBin', JSON.stringify(this.data));
      });
    }
    this.callback = callback;

    if (root) {
      this.root = document.querySelector(root);
      this.typeInsert = typeInsert;
      this._addMarkup();
    }
  }

  _createMarkup = () => {
    return markupBin(this.data);
  };

  _addMarkup = () => {
    if (this.root) {
      this.root.insertAdjacentHTML(this.typeInsert, this._createMarkup());
    }
    this.initialBin();
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
    const id = e.currentTarget.dataset.id;
    const elem = this.data.find(el => el.id === id);
    if (elem.count > 1) {
      elem.count = Number(elem.count) - 1;
      this._updateLS();
      this._updateMarkup();
      this._onTotal();
    }
  };

  _onInc = e => {
    const id = e.currentTarget.dataset.id;
    const elem = this.data.find(el => el.id === id);
    elem.count = Number(elem.count) + 1;
    this._updateLS();
    this._updateMarkup();
    this._onTotal();
  };

  _onDel = e => {
    const id = e.currentTarget.dataset.id;
    const elemId = this.data.findIndex(el => el.id === id);
    this.data.splice(elemId, 1);
    document.querySelector('[data-id = "' + id + '"]').remove();
    this._updateLS();
    this._onTotal();
  };

  _onTotal = () => {
    const n = this.data.reduce((total, el) => {
      return (total += Number(el.priceNum) * Number(el.count));
    }, 0);
    const arr = String(n).split('');
    for (let i = arr.length - 3; i > 0; i -= 3) {
      arr.splice(i, 0, ' ');
    }
    this.totalPrice.textContent = arr.join('') + ' ₽';
  };

  _onCloseModal = () => {
    document.querySelector('.product-bin').remove();
    this._deleteEvent();
  };

  _setEvent = () => {
    if (this.counterBtnDec) {
      this.counterBtnDec.forEach(el => {
        el.addEventListener('click', this._onDec);
      });
    }
    if (this.counterBtnInc) {
      this.counterBtnInc.forEach(el => {
        el.addEventListener('click', this._onInc);
      });
    }
    if (this.deleteBtn) {
      this.deleteBtn.forEach(el => {
        el.addEventListener('click', this._onDel);
      });
    }
    if (this.buttonClose) {
      this.buttonClose.forEach(el => {
        el.addEventListener('click', this._onCloseModal);
      });
    }

    if (this.buttonNext) {
      if (this.callback) {
        this.buttonNext.addEventListener('click', this.callback);
      }
      this.buttonNext.addEventListener('click', this._onCloseModal);
    }
  };

  _deleteEvent = () => {
    if (this.counterBtnDec) {
      this.counterBtnDec.forEach(el => {
        el.removeEventListener('click', this._onDec);
      });
    }
    if (this.counterBtnInc) {
      this.counterBtnInc.forEach(el => {
        el.removeEventListener('click', this._onInc);
      });
    }
    if (this.deleteBtn) {
      this.deleteBtn.forEach(el => {
        el.removeEventListener('click', this._onDel);
      });
    }
    if (this.buttonClose) {
      this.buttonClose.forEach(el => {
        el.removeEventListener('click', this._onCloseModal);
      });
    }
    if (this.buttonNext) {
      if (this.callback) {
        this.buttonNext.removeEventListener('click', this.callback);
      }
      this.buttonNext.removeEventListener('click', this._onCloseModal);
    }
  };

  initialBin = () => {
    this.counterBtnDec = document.querySelectorAll('.product-bin__button-dec');
    this.counterBtnInc = document.querySelectorAll('.product-bin__button-inc');
    this.counter = document.querySelectorAll('.product-bin__product-count');
    this.deleteBtn = document.querySelectorAll('.product-bin__button-del');
    this.buttonClose = document.querySelectorAll('.js-close-modal');
    this.buttonNext = document.querySelector('.js-next');
    this.totalPrice = document.querySelector('.product-bin__total-price');
    this._onTotal();
    this._setEvent();
  };
}
