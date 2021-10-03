import refs from './refs/refs.js';
import updateBin from './updateBin.js';
updateBin();

function homeRender() { }
//=====brand========//
function brandRender() { }
//=====checkout========//
import { ModalData, createPayment } from './layout/checkout/payment';
import { ordering, openOrderingFunction } from './layout/checkout/ordering';
import payment_checkout from '../views/layouts/checkout.hbs';
export function checkoutRender() {
  updateBin();
  refs.mainEL.innerHTML = '';
  const createCheckout = payment_checkout({ createPayment, ordering });
  refs.mainEL.insertAdjacentHTML('beforeend', createCheckout);
  openOrderingFunction();
  const inputTime = new ModalData({
    idInput: 'js-time',
    idList: 'time-list',
  });
  const inputDay = new ModalData({
    idInput: 'js-day',
    idList: 'day-list',
  });
}
// checkoutRender();
//=====contact========//
function contactRender() { }
//=====delivery========//
function deliveryRender() { }
//=====favorites========//
function favoritesRender() { }
//=====fitting========//
function fittingRender() { }
//=====product========//
import ProductModalAddToCart from './layout/product/productModalAddToCart.js';
import RecomendationsCategory from './layout/product/recomendationsCategory.js';
import cards from './json/catalog.json';
import productMarkup from '../views/layouts/product.hbs';
import HandSewn from './layout/product/productHandSewn.js';

function productRender() {
  const objRecomendationsCategory = new RecomendationsCategory({
    data: cards,
  });
  const objHandSewn = new HandSewn({
    object: [
      {
        name: null, // a modal selector that is called when the button is clicked
        className: 'is-hidden', // the class that hides the modal
      },
      {
        name: '[data-modal]', // a backdrop selector that is called when the button is clicked
        className: 'is-hidden', // the class that hides the backdrop
      },
    ],
  });
  const objProductModalAddToCart = new ProductModalAddToCart({
    productName: 'ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ',
    objectClose: [
      {
        name: '[data-modal]', // a backdrop selector that is called when the button is clicked
        className: 'is-hidden', // the class that hides the backdrop
      },
    ],
  });

  const obj = {
    recomendationCategory: objRecomendationsCategory.getMarkup(),
    handSewn: objHandSewn.getMarkup(),
    modalAddToCart: objProductModalAddToCart.getMarkup(),
  };

  refs.mainEL.insertAdjacentHTML('beforeend', productMarkup(obj));

  objRecomendationsCategory.setSlider();
  objHandSewn.setEvent();
  objProductModalAddToCart.setEvent();
  objProductModalAddToCart.setSlider();
  objProductModalAddToCart.show('ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ'); // show modal window - call the listener on the button
}

productRender();
//=====reviews========//
function reviewsRender() { }
//=====showroom========//
function showroomRender() { }
