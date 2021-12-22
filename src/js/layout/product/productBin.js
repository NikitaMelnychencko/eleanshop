import markupBin from '../../../views/partials/product/productBin.hbs';
import { checkoutRender } from '../../call-list/checkout';
import { scrollTo } from '../../components/scrollTo';
import updateBin from '../../updateBin';
import { bodyUnfixPosition, bodyFixPosition } from '../../components/scroll/scroll';
export default class ProductBin {
  constructor({ root, typeInsert, data }) {
    this.data = data;
    this._getData();
    if (root) {
      this.root = document.querySelector(root);
      this.typeInsert = typeInsert;
      this._addMarkup(this.root);
    } else {
      this.root = document.querySelector('.product-bin__list');
    }
    this.self = document.querySelector('.product-bin');
  }

  _getData = () => {
    const dataLS = localStorage.getItem('orderingData');
    if (dataLS) {
      this.data = JSON.parse(dataLS);
    } else {
      this.data = [];
    }
    if (this.data.length === 0) {
      localStorage.setItem('orderingData', JSON.stringify(this.data));
      return;
    }
    this.data.forEach(el => {
      const arr = String(el.label.price).split('');
      for (let i = arr.length - 3; i > 0; i -= 3) {
        arr.splice(i, 0, ' ');
      }
      el.label.priceTxt = arr.join('') + ' &#8372;';
      localStorage.setItem('orderingData', JSON.stringify(this.data));
    });
  };

  _createMarkup = () => {
    return markupBin(this.data);
  };

  _addMarkup = root => {
    if (root) {
      root.innerHTML = this._createMarkup();
    }
    this.initialBin();
  };

  getMarkup = () => {
    return this._createMarkup();
  };

  _updateLS = () => {
    localStorage.setItem('orderingData', JSON.stringify(this.data));
  };

  _updateMarkup() {
    this.counter.forEach((el, idx) => {
      if (Number(el.textContent) !== this.data[idx].label.count) {
        el.textContent = this.data[idx].label.count;
      }
    });
  }

  _onDec = e => {
    const id = e.currentTarget.dataset.id;
    const elem = this.data.find(el => el.label.id === id);
    if (elem.label.count > 1) {
      elem.label.count = Number(elem.label.count) - 1;
      this._updateLS();
      this._updateMarkup();
      this._onTotal();
    }
  };

  _onInc = e => {
    const id = e.currentTarget.dataset.id;
    const elem = this.data.find(el => el.label.id === id);
    elem.label.count = Number(elem.label.count) + 1;
    this._updateLS();
    this._updateMarkup();
    this._onTotal();
  };

  _onDel = e => {
    const id = e.currentTarget.dataset.id;
    const elemId = this.data.findIndex(el => el.label.id === id);
    this.data.splice(elemId, 1);
    this.counter.splice(elemId, 1);
    this.counterBtnDec.splice(elemId, 1);
    this.counterBtnInc.splice(elemId, 1);
    this.deleteBtn.splice(elemId, 1);
    document.querySelector('[data-id = "' + id + '"]').remove();
    this._updateLS();
    this._onTotal();
    updateBin();
  };

  _onTotal = () => {
    const n = this.data.reduce((total, el) => {
      return (total += Number(el.label.price) * Number(el.label.count));
    }, 0);
    const arr = String(n).split('');
    for (let i = arr.length - 3; i > 0; i -= 3) {
      arr.splice(i, 0, ' ');
    }
    this.totalPrice.innerHTML = arr.join('') + '<span> &#8372;</span>';
  };

  _onCloseModal = () => {
    this.self.classList.add('hidden');
    this._deleteEvent();
    bodyUnfixPosition()

  };

  _onClickNext = () => {
    this._onCloseModal();
    //function of clicking on the Checkout button
    checkoutRender();
    scrollTo(0, 700);
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
      this.buttonNext.addEventListener('click', this._onClickNext);
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
      this.buttonNext.removeEventListener('click', this._onClickNext);
    }
  };

  show = () => {
    this._getData();
    if (!this.root) {
      this.root = document.querySelector('.product-bin__list');
    }
    this._addMarkup(this.root);
    this.self.classList.remove('hidden');
    bodyFixPosition()
  }

  initialBin = () => {
    this.counterBtnDec = [...document.querySelectorAll('.product-bin__button-dec')];
    this.counterBtnInc = [...document.querySelectorAll('.product-bin__button-inc')];
    this.counter = [...document.querySelectorAll('.product-bin__product-count')];
    this.deleteBtn = [...document.querySelectorAll('.product-bin__button-del')];
    this.buttonClose = document.querySelectorAll('.js-close-modal');
    this.buttonNext = document.querySelector('.js-next-bin');
    this.totalPrice = document.querySelector('.product-bin__total-price');
    this._onTotal();
    this._setEvent();
  };
}
