import updateBin from '../../updateBin';

export class OrderingPrice {
  constructor({ parsedData, promocodes }) {
    this._refs = this._getRefs();
    this._bindEvents();
    this._windowOnload();
    this.parsedData = parsedData;
    this.promocodes = promocodes;
  }
  _getRefs() {
    const refs = {
      orderingApplyBtn: document.querySelector('.ordering__btn--promocode'),
      orderingPromocodeInput: document.querySelector('.ordering__input--promocode'),
      orderingDiscount: document.querySelector('.ordering__discount--value'),
      orderingTotal: document.querySelector('.ordering__total'),
      cards: document.querySelector('.ordering__cards'),
      priceSpans: document.querySelectorAll('.ordering__price'),
      counterSpans: document.querySelectorAll('.ordering__value'),
      binValue: document.querySelector('#js-text-bin'),
    };
    return refs;
  }
  createMarkup() {}
  _bindEvents() {
    this._refs.cards.addEventListener('click', this._setQuantityOrRemove.bind(this));
    this._refs.orderingApplyBtn.addEventListener(
      'click',
      this._countTotalPriceWithDiscount.bind(this),
    );
  }
  _windowOnload() {
    window.onload = this._updatePriceSpans();
    window.onload = this._renewTotalPriceWithDiscount();
  }
  _updatePriceSpans() {
    [...this._refs.priceSpans].forEach(price => {
      let counterValue = price.parentElement.querySelector('.ordering__value').innerText;
      price.textContent = Number(counterValue) * Number(price.innerText);
    });
  }
  _setQuantityOrRemove(e) {
    if (e.target.classList.contains('ordering__btn--plus')) {
      this._orderingIncrement(e);
      let priceSpan = e.target.parentElement.nextElementSibling;
      let pricePerItem = priceSpan.innerText;
      let newValue = Number(e.target.previousElementSibling.textContent);
      let totalPricePerItem = Number(pricePerItem) / (newValue - 1) + Number(pricePerItem);
      priceSpan.textContent = totalPricePerItem;
      this._renewTotalPriceWithDiscount();
    } else if (e.target.classList.contains('ordering__btn--minus')) {
      let checker = this._orderingDecrement(e);
      let priceSpan = e.target.parentElement.nextElementSibling;
      let pricePerItem = priceSpan.innerText;
      let newValue = Number(e.target.nextElementSibling.textContent);
      let totalPricePerItem =
        Number(pricePerItem) - Math.round(Number(pricePerItem) / (newValue + 1));
      if (checker) {
        priceSpan.textContent = totalPricePerItem;
        this._renewTotalPriceWithDiscount();
      }
    } else if (e.target.classList.contains('ordering__close')) {
      this._removeOrderingCard(e);
    }
  }
  _orderingIncrement(e) {
    let value = e.target.previousElementSibling.textContent;
    e.target.previousElementSibling.textContent = Number(value) + 1;
    value = Number(value) + 1;
    this._setValueInLocalStorage(e, value);
    this._updateTotalValueInBin();
  }
  _updateTotalValueInBin() {
    let countersTotalValue = [...this._refs.counterSpans].reduce(
      (totalPrices, counterSpans) => totalPrices + Number(counterSpans.innerText),
      0,
    );
    this._refs.binValue.textContent = countersTotalValue;
  }
  _orderingDecrement(e) {
    let value = e.target.nextElementSibling.textContent;
    if (Number(value) > 1) {
      e.target.nextElementSibling.textContent = Number(value) - 1;
      value = Number(value) - 1;
      this._setValueInLocalStorage(e, value);
      this._updateTotalValueInBin();
      return true;
    } else {
      return false;
    }
  }
  _setValueInLocalStorage(e, value) {
    const articleId = e.target.closest('.ordering__card').getAttribute('id');
    const article = this.parsedData.find(obj => obj.label.id === articleId);
    article.label.count = value;
    localStorage.setItem('orderingData', JSON.stringify(this.parsedData));
  }
  _removeOrderingCard(e) {
    const id = e.currentTarget.dataset.id;
    const elemId = this.parsedData.findIndex(el => el.label.id === id);
    this.parsedData.splice(elemId, 1);

    e.target.closest('.ordering__card').remove();
    this._renewTotalPriceWithDiscount();

    localStorage.setItem('orderingData', JSON.stringify(this.parsedData));
    updateBin();
  }
  _countTotalPrice(e) {
    let orderingPricesArray = document.querySelectorAll('.ordering__price');
    let orderingTotalPrice = [...orderingPricesArray].reduce(
      (totalPrices, orderingPricesArray) => totalPrices + Number(orderingPricesArray.innerHTML),
      0,
    );
    this._refs.orderingTotal.textContent = orderingTotalPrice;
    return orderingTotalPrice;
  }
  _countTotalPriceWithDiscount(e) {
    e.preventDefault();
    const totalPrice = this._countTotalPrice();
    let discount = this._getDiscount();
    this._refs.orderingDiscount.textContent = discount;
    this._refs.orderingTotal.textContent = totalPrice - (totalPrice / 100) * discount;
  }
  _renewTotalPriceWithDiscount() {
    const totalPrice = this._countTotalPrice();
    let finalPrice = 0;
    const discountValue = Number(this._refs.orderingDiscount.innerText);
    if (discountValue !== undefined) {
      finalPrice = totalPrice - (totalPrice / 100) * discountValue;
      this._refs.orderingTotal.textContent = finalPrice;
    } else {
      finalPrice = totalPrice;
      this._refs.orderingTotal.textContent = finalPrice;
    }
    return finalPrice;
  }
  _getDiscount() {
    let promocodeValue = this._refs.orderingPromocodeInput.value;
    const gettingPromocodeObject = this.promocodes.find(
      promocode => promocode.value == promocodeValue,
    );
    return gettingPromocodeObject.discount;
  }
}
export class OrderingSizeAndColor {
  constructor({ parsedData }) {
    this._refs = this._getRefs();
    this._bindEvents();
    this.parsedData = parsedData;
  }
  _getRefs() {
    const refs = {
      inputs: document.querySelectorAll('.ordering-input-js'),
      lists: document.querySelectorAll('.ordering-list-js'),
    };
    return refs;
  }
  _bindEvents() {
    this._refs.inputs.forEach(input =>
      input.addEventListener('click', this._onOrderingColorInputClick.bind(this)),
    );
  }
  _onOrderingColorInputClick(e) {
    const selectedInput = e.currentTarget;
    const list = e.currentTarget.parentElement.lastElementChild;
    list.classList.toggle('ordering-list--hide');
    e.currentTarget.lastElementChild.classList.toggle('ordering__arrow--rotate');
    const items = list.querySelectorAll('.ordering-item-js');
    items.forEach(item => item.addEventListener('click', this._onColorClick.bind(this)));
  }
  _onColorClick(e) {
    const colorItemValue = e.currentTarget.innerHTML;
    const colorInput =
      e.currentTarget.parentElement.parentElement.firstElementChild.firstElementChild;
    const item = e.currentTarget;
    colorInput.innerHTML = colorItemValue;
    const articleId = colorInput.closest('.ordering__card').getAttribute('id');
    const article = this.parsedData.find(obj => obj.label.id === articleId);

    if (e.target.classList.contains('js-size')) {
      article.label.sizeSelected = colorItemValue;
    } else if (e.target.classList.contains('js-color')) {
      this._chooseSizeDueToColor(e, article);
      let circleLink = colorInput.querySelector('.ordering__circle--color').getAttribute('href');
      article.label.colorSelected = e.currentTarget.querySelector('span').innerText;
      article.label.circleSelected = circleLink;
    }
    localStorage.setItem('orderingData', JSON.stringify(this.parsedData));
    e.target.parentElement.classList.toggle('ordering-list--hide');
  }

  _chooseSizeDueToColor(event, article) {
    const parentEl = event.currentTarget.parentElement.parentElement.parentElement;
    const sizesList = parentEl.querySelector('.ordering-sizelist-js');
    const sizeInput = parentEl.querySelector('.ordering__size');

    article.label.productAviable.map(product => {
      if (event.currentTarget.querySelector('span').innerText === product.colorName) {
        article.label.sizeAvailable = product.aviableSize;
      }
    });

    this._makeListMarkup(sizesList, article.label.sizeAvailable);
    sizeInput.innerHTML = sizesList.firstElementChild.innerHTML;
    article.label.sizeSelected = sizeInput.innerHTML;
  }
  _makeListMarkup(list, sizesArr) {
    list.innerHTML = '';
    let listItemsMarkup = '';
    if (sizesArr) {
      listItemsMarkup = sizesArr.map(size => this._makeListItemMarkup(size)).join('');
    } else {
      sizesArr = [];
    }

    if (sizesArr.length === 0) {
      list.innerHTML = this._makeListItemMarkup('Нет в наличии');
    } else {
      list.innerHTML = listItemsMarkup;
    }
  }
  _makeListItemMarkup(size) {
    return `
        <li class='ordering-list__item ordering-item-js js-size'>${size}
                    </li>
        `;
  }
}
