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
}
// homeRender(); //========================================================call
//=====brand========//
import brand_page from '../views/layouts/brand.hbs';
import {
  formBrand,
  infoAboutBrand,
  brandOurAdvantages,
  videoBrand,
} from './layout/brand/infoAboutBrand.js';
import { formFittingInShowroom } from './layout/brand/formFittingInShowroom.js';

export function brandRender() {
  const contactPageMarkUp = brand_page({
    formBrand,
    brandOurAdvantages,
    contactsContact,
    videoBrand,
  });
  refs.mainEL.insertAdjacentHTML('beforeend', contactPageMarkUp);
  formFittingInShowroom();
  infoAboutBrand();
}
// brandRender(); //========================================================call

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
// checkoutRender(); //========================================================call

//=====contact========//

import contact_page from '../views/layouts/contact.hbs';
import { contactsMap, contactsContact } from './layout/contact/contact.js';

export function contactRender() {
  const contactPageMarkUp = contact_page({ formBrand, contactsMap, contactsContact });
  refs.mainEL.insertAdjacentHTML('beforeend', contactPageMarkUp);
  formFittingInShowroom();
}
// contactRender(); //========================================================call

//=====delivery========//
function deliveryRender() {}
//=====favorites========//
function favoritesRender() {}
//=====fitting========//
function fittingRender() {}
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

// productRender(); //========================================================call

//=====reviews========//
import reviews_page from '../views/layouts/reviews.hbs';
import { formReviews, formReviewsMarkUp } from './layout/reviews/registrationFormForFitting.js';
import { setVideoHbs, clientStar, videosetSlickSettings } from './layout/reviews/videoSet.js';

function reviewsRender() {
  const reviewsMarkUp = reviews_page({ setVideoHbs, clientStar, formReviewsMarkUp });
  refs.mainEL.insertAdjacentHTML('beforeend', reviewsMarkUp);
  videosetSlickSettings();
  starClientsSlider();
  starClientsComments();
  formReviews();
}

reviewsRender(); //========================================================call

//=====showroom========//
import showroom_page from '../views/layouts/showroom.hbs';
export function showroomRender() {
  const showroomPageMarkUp = showroom_page({ formBrand, pageShowroomSliderMarkup });
  refs.mainEL.insertAdjacentHTML('beforeend', showroomPageMarkUp);
  formFittingInShowroom();
}
// showroomRender(); //========================================================call
