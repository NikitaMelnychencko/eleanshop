import refs from './refs/refs.js'
function homeRender() { }
//=====brand========//
function brandRender() { }
//=====checkout========//
import {ModalData, createPayment} from './layout/checkout/payment'
import { ordering,openOrderingFunction } from './layout/checkout/ordering'
import payment_checkout from '../views/layouts/checkout.hbs';
function checkoutRender() {
  const createCheckout = payment_checkout({ createPayment, ordering });
  refs.mainEL.insertAdjacentHTML('beforeend', createCheckout);
  openOrderingFunction()
  const inputTime = new ModalData({
    idInput: 'js-time',
    idList: 'time-list',
  });
  const inputDay = new ModalData({
    idInput: 'js-day',
    idList: 'day-list',
  });
}
checkoutRender() 
//=====contact========//
function contactRender() { }
//=====delivery========//
function deliveryRender() { }
//=====favorites========//
function favoritesRender() { }
//=====fitting========//
function fittingRender() { }
//=====product========//
function productRender() { }
//=====reviews========//
function reviewsRender() { }
//=====showroom========//
function showroomRender() { }



