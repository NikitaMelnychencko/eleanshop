import refs from './refs/refs.js';
import updateBin from './updateBin.js';
updateBin();

//======home======//
import home from '../views/layouts/home.hbs';
import { pageHeroSliderMarkup, heroSlider } from './layout/home/hero.js';
import { pageShowroomSliderMarkup, showroomSlider } from './layout/home/ourShowRoom.js';
import {
  pageStarClientsSliderMarkup,
  starClientsSlider,
  starClientsComments,
} from './layout/home/starClients.js';
import { pageInInstagramSliderMarkup, instagramSlider } from './layout/home/inInstagram.js';

function homeRender() {
  const homeMarkup = home({
    pageHeroSliderMarkup,
    pageShowroomSliderMarkup,
    pageStarClientsSliderMarkup,
    pageInInstagramSliderMarkup,
  });

  refs.mainEL.insertAdjacentHTML('beforeend', homeMarkup);
  heroSlider();
  showroomSlider();
  starClientsSlider();
  starClientsComments();
  instagramSlider();
  blockHelpRender()
}
homeRender();
//=====brand========//
function brandRender() {
}

//=====checkout========//
import { ModalData, createPayment } from './layout/checkout/payment.js';
import { ordering, openOrderingFunction } from './layout/checkout/ordering.js';
import { backdropMarkup } from './layout/checkout/thanksForOrdering.js';
import payment_checkout from '../views/layouts/checkout.hbs';
export function checkoutRender() {
  updateBin();
  refs.mainEL.innerHTML = '';
  const createCheckout = payment_checkout({ createPayment, ordering, backdropMarkup});
  refs.mainEL.insertAdjacentHTML('beforeend', createCheckout);
  openOrderingFunction();
  const modalOpen = new ModalData({
    idInputDay: 'js-day',
    idListDay: 'day-list',
    idInputTime: 'js-time',
    idListTime: 'time-list',
  });

  blockHelpRender()
}
//=====contact========//
function contactRender() {
}
//=====delivery========//
function deliveryRender() {
}
//=====favorites========//
function favoritesRender() {
}
//=====fitting========//
function fittingRender() {
}
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
function reviewsRender() {
}
//=====showroom========//
function showroomRender() { 
}

//=====blockHelp========//
import blockHelp_blockHelpTemplate from '../views/components/blockHelp.hbs';
import {blockHelpRenderOpen} from './components/blockHelp/blockHelp.js'
function blockHelpRender() {
  refs.mainEL.insertAdjacentHTML('beforeend', blockHelp_blockHelpTemplate());
  blockHelpRenderOpen()
}