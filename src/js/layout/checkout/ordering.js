import ordering_ordering from '../../../views/partials/checkout/ordering.hbs';
import payment_checkout from '../../../views/layouts/checkout.hbs';
import refs from '../../refs/refs.js';
import '../../../images/img/white-suit.jpg';
import '../../../images/img/red-suit.jpg';
import promocodes from '../../json/promocode.json';

// localStorage.setItem('orderingData', JSON.stringify(orderingInsertion));
const savedData = localStorage.getItem('orderingData');
const parsedData = JSON.parse(savedData);

export const ordering = ordering_ordering(parsedData);

export function openOrderingFunction() {
  const orderingApplyBtn = document.querySelector('.ordering__btn--promocode');
  const orderingPromocodeInput = document.querySelector('.ordering__input--promocode');
  const orderingDiscount = document.querySelector('.ordering__discount--value');
  const orderingTotal = document.querySelector('.ordering__total');
  const cards = document.querySelector('.ordering__cards');
  const priceSpans = document.querySelectorAll('.ordering__price')
  const counterSpans = document.querySelectorAll('.ordering__value')
  const binValue = document.querySelector('.js-counter')

  window.onload = updatePriceSpans();
  window.onload = renewTotalPriceWithDiscount();

  function updatePriceSpans() {
    [...priceSpans].forEach(price => {
      let counterValue = price.parentElement.querySelector('.ordering__value').innerText
      price.textContent = Number(counterValue) * Number(price.innerText)
    })
  }

  cards.addEventListener('click', setQuantityOrRemove);
  orderingApplyBtn.addEventListener('click', countTotalPriceWithDiscount);

  function setQuantityOrRemove(e) {
    if (e.target.classList.contains('ordering__btn--plus')) {
      orderingIncrement(e);

      let priceSpan = e.target.parentElement.nextElementSibling;

      let pricePerItem = priceSpan.innerText;
      let newValue = Number(e.target.previousElementSibling.textContent);
      let totalPricePerItem = Number(pricePerItem) / (newValue - 1) + Number(pricePerItem);

      priceSpan.textContent = totalPricePerItem;
      renewTotalPriceWithDiscount();

    } else if (e.target.classList.contains('ordering__btn--minus')) {
      let checker = orderingDecrement(e);
      let priceSpan = e.target.parentElement.nextElementSibling;
      let pricePerItem = priceSpan.innerText;
      let newValue = Number(e.target.nextElementSibling.textContent);

      let totalPricePerItem =
        Number(pricePerItem) - Math.round(Number(pricePerItem) / (newValue + 1));
      if (checker) {
        priceSpan.textContent = totalPricePerItem;
        renewTotalPriceWithDiscount();
      }
    } else if (e.target.classList.contains('ordering__close')) {
      removeOrderingCard(e);
    }
  }

  function orderingIncrement(e) {
    let value = e.target.previousElementSibling.textContent;
    e.target.previousElementSibling.textContent = Number(value) + 1;
    value = Number(value) + 1

    setValueInLocalStorage(e, value)
    updateTotalValueInBin();
  }

  function updateTotalValueInBin() {
    let countersTotalValue = [...counterSpans].reduce(
      (totalPrices, counterSpans) => totalPrices + Number(counterSpans.innerText),
      0,
    );
    binValue.textContent = countersTotalValue

  }

  function orderingDecrement(e) {
    let value = e.target.nextElementSibling.textContent;
    if (Number(value) > 1) {
      e.target.nextElementSibling.textContent = Number(value) - 1;

      value = Number(value) - 1

      setValueInLocalStorage(e, value)
      updateTotalValueInBin();

      return true;
    } else {
      return false;
    }
  }

  function setValueInLocalStorage(e, value) {
    const articleId = e.target.closest('.ordering__card').getAttribute('id');
    const article = parsedData.find(obj => obj.label.id === articleId)

    article.label.count = value
    localStorage.setItem('orderingData', JSON.stringify(parsedData));
  }

  function removeOrderingCard(e) {
    e.target.closest('.ordering__card').remove();
    renewTotalPriceWithDiscount();
  }

  function countTotalPrice(e) {
    let orderingPricesArray = document.querySelectorAll('.ordering__price');

    let orderingTotalPrice = [...orderingPricesArray].reduce(
      (totalPrices, orderingPricesArray) => totalPrices + Number(orderingPricesArray.innerHTML),
      0,
    );

    orderingTotal.textContent = orderingTotalPrice;
    return orderingTotalPrice;
  }

  function countTotalPriceWithDiscount(e) {
    e.preventDefault();
    const totalPrice = countTotalPrice();
    let discount = getDiscount();
    orderingDiscount.textContent = discount;
    orderingTotal.textContent = totalPrice - (totalPrice / 100) * discount;
  }

  function renewTotalPriceWithDiscount() {
    const totalPrice = countTotalPrice();
    let finalPrice = 0;
    const discountValue = Number(orderingDiscount.innerText);
    if (discountValue !== undefined) {
      finalPrice = totalPrice - (totalPrice / 100) * discountValue;
      orderingTotal.textContent = finalPrice;
    } else {
      finalPrice = totalPrice;
      orderingTotal.textContent = finalPrice;
    }
    return finalPrice;
  }

  function getDiscount() {
    let promocodeValue = orderingPromocodeInput.value;
    const gettingPromocodeObject = promocodes.find(promocode => promocode.value == promocodeValue);

    return gettingPromocodeObject.discount;
  }

  const inputs = document.querySelectorAll('.ordering-input-js');
  const lists = document.querySelectorAll('.ordering-list-js');
  inputs.forEach(input => input.addEventListener('click', onOrderingColorInputClick));

  function onOrderingColorInputClick(e) {
    const selectedInput = this;
    const list = this.parentElement.lastElementChild;
    list.classList.toggle('ordering-list--hide');
    this.lastElementChild.classList.toggle('ordering__arrow--rotate');
    const items = list.querySelectorAll('.ordering-item-js');
    items.forEach(item => item.addEventListener('click', onColorClick));
  }

  function onColorClick(e) {
    const colorItemValue = this.innerHTML;
    const colorInput = this.parentElement.parentElement.firstElementChild.firstElementChild;
    const item = this;
    colorInput.innerHTML = colorItemValue;

    const articleId = colorInput.closest('.ordering__card').getAttribute('id');
    const article = parsedData.find(obj => obj.label.id === articleId);
    if (e.target.classList.contains('js-size')) {
      article.label.sizeSelected = colorItemValue;
    } else if (e.target.classList.contains('js-color')) {
        let circleLink = colorInput.querySelector('.ordering__circle--color').getAttribute('href');
      article.label.сolorSelected = this.innerText;
      article.label.circleSelected = circleLink;
    }  
    localStorage.setItem('orderingData', JSON.stringify(parsedData));
    e.target.parentElement.classList.toggle('ordering-list--hide');
  }
}
