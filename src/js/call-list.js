import refs from './refs/refs.js';
import updateBin from './updateBin.js';
updateBin();

//======home======//
import home from '../views/layouts/home.hbs';
import { pageHeroSliderMarkup, heroSlider } from './layout/home/hero.js';
import { pageShowroomSliderMarkup, showroomSlider } from './layout/home/ourShowRoom.js';
import { formFittingInShowroom } from './layout/brand/formFittingInShowroom.js';
import { formBrand } from './layout/brand/infoAboutBrand.js';

import {
  pageStarClientsSliderMarkup,
  starClientsSlider,
  starClientsComments,
} from './layout/home/starClients.js';
import { pageInInstagramSliderMarkup, instagramSlider } from './layout/home/inInstagram.js';

export function homeRender() {
  updateBin();
  refs.mainEL.innerHTML = '';
  getHome();
}
function getHome() {
  const homeMarkup = home({
    pageHeroSliderMarkup,
    pageShowroomSliderMarkup,
    formBrand,
    pageStarClientsSliderMarkup,
    pageInInstagramSliderMarkup,
  });

  refs.mainEL.insertAdjacentHTML('beforeend', homeMarkup);
  heroSlider();
  showroomSlider();
  starClientsSlider();
  starClientsComments();
  instagramSlider();
  blockHelpRender();
  formFittingInShowroom();
}
getHome(); //========================================================call
//=====brand========//
import brand_page from '../views/layouts/brand.hbs';
import {
  infoAboutBrand,
  brandOurAdvantages,
  videoBrand,
  brandPlayer,
} from './layout/brand/infoAboutBrand.js';

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
  brandPlayer();
}
// brandRender(); //========================================================call

//=====checkout========//
import { ModalData, createPayment } from './layout/checkout/payment.js';
import { ordering, openOrderingFunction } from './layout/checkout/ordering.js';
import { backdropMarkup } from './layout/checkout/thanksForOrdering.js';
import payment_checkout from '../views/layouts/checkout.hbs';
export function checkoutRender() {
  updateBin();
  refs.mainEL.innerHTML = '';
  const createCheckout = payment_checkout({ createPayment, ordering, backdropMarkup });
  refs.mainEL.insertAdjacentHTML('beforeend', createCheckout);
  openOrderingFunction();
  const modalOpen = new ModalData({
    idInputDay: 'js-day',
    idListDay: 'day-list',
    idInputTime: 'js-time',
    idListTime: 'time-list',
  });

  blockHelpRender();
}

//=====contact========//

import contact_page from '../views/layouts/contact.hbs';
import { contactsMap, contactsContact } from './layout/contact/contact.js';

export function contactRender() {
  refs.mainEL.innerHTML = '';
  const contactPageMarkUp = contact_page({ formBrand, contactsMap, contactsContact });
  refs.mainEL.insertAdjacentHTML('beforeend', contactPageMarkUp);
  formFittingInShowroom();
}
//contactRender(); //========================================================call==================================

//=====delivery========//
import deliveryMarkUp from '../views/layouts/delivery.hbs';
import { formDeliveryMarkUp, formDelivery } from './layout/delivery/formsQuestion.js';
import { deliveryThreeModal } from './layout/delivery/deliveryTypes.js';
import {
  buttonsDelivery,
  mainImageDelivery,
  descriptionDelivery,
  questionDelivery,
} from './layout/delivery/deliveryTypes.js';

function deliveryRender() {
  const deliveryPageMarkUp = deliveryMarkUp({
    buttonsDelivery,
    mainImageDelivery,
    descriptionDelivery,
    questionDelivery,
    formDeliveryMarkUp,
  });
  refs.mainEL.insertAdjacentHTML('beforeend', deliveryPageMarkUp);
  formDelivery();
  deliveryThreeModal();
}

// deliveryRender(); //========================================================call

//=====favorites========//
export function favoritesRender() {}

//=====fitting========//

import sizeTable_markup from '../views/layouts/fitting.hbs';
import { sizeTable_tableCreate } from './layout/fitting/sizeTable.js';
import { informationAboutFitting_informationCreate } from './layout/fitting/informationAboutFitting.js';
import {
  openVideoSlider,
  fittingVideoSliderPlayer,
  videoSlider_videoSliderCreate,
} from './layout/fitting/videoSlider.js';

function fittingRender() {
  const fittingMarkUp = sizeTable_markup({
    sizeTable_tableCreate,
    videoSlider_videoSliderCreate,
    informationAboutFitting_informationCreate,
    formBrand,
  });
  refs.mainEL.insertAdjacentHTML('beforeend', fittingMarkUp);
  openVideoSlider();
  // fittingVideoSliderPlayer();
  formFittingInShowroom();
}
// fittingRender(); //============================================================call

//=====product========//

import ProductModalAddToCart from './layout/product/productModalAddToCart.js';
import RecomendationsCategory from './layout/product/recomendationsCategory.js';
import cards from './json/catalog.json';
import productMarkup from '../views/layouts/product.hbs';
import HandSewn from './layout/product/productHandSewn.js';
import backdropMarkupTempl from '../views/components/backdrop.hbs';

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

  const modalFormMarkup = objProductModalAddToCart.getMarkup();
  const backdropMarkup = backdropMarkupTempl(modalFormMarkup);
  const obj = {
    recomendationCategory: objRecomendationsCategory.getMarkup(),
    handSewn: objHandSewn.getMarkup(),
    backdrop: backdropMarkup,
  };

  refs.mainEL.insertAdjacentHTML('beforeend', productMarkup(obj));
  document.querySelector('.form__button-сlose').style.display = 'none';
  objRecomendationsCategory.setSlider();
  objRecomendationsCategory.setEvent();
  objHandSewn.setEvent();
  objProductModalAddToCart.setEvent();
  objProductModalAddToCart.setSlider();
  objProductModalAddToCart.show('ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ'); // show modal window - call the listener on the button
}

// productRender(); //========================================================call

//=====reviews========//
import reviews_page from '../views/layouts/reviews.hbs';
import { formReviews, formReviewsMarkUp } from './layout/reviews/registrationFormForFitting.js';
import {
  setVideoHbs,
  clientStar,
  videosetSlickSettings,
  videoSetPlayer,
} from './layout/reviews/videoSet.js';

function reviewsRender() {
  const reviewsMarkUp = reviews_page({ setVideoHbs, clientStar, formReviewsMarkUp });
  refs.mainEL.insertAdjacentHTML('beforeend', reviewsMarkUp);
  videosetSlickSettings();
  starClientsSlider();
  starClientsComments();
  formReviews();
  videoSetPlayer();
}

// reviewsRender(); //========================================================call

//=====showroom========//
import showroom_page from '../views/layouts/showroom.hbs';
export function showroomRender() {
  refs.mainEL.innerHTML = '';
  const showroomPageMarkUp = showroom_page({ formBrand, pageShowroomSliderMarkup });
  refs.mainEL.insertAdjacentHTML('beforeend', showroomPageMarkUp);
  +showroomSlider();
  formFittingInShowroom();
}
//showroomRender(); //========================================================call===================

//=====blockHelp========//
import blockHelp_blockHelpTemplate from '../views/components/blockHelp.hbs';
import { blockHelpRenderOpen } from './components/blockHelp/blockHelp.js';
function blockHelpRender() {
  refs.mainEL.insertAdjacentHTML('beforeend', blockHelp_blockHelpTemplate());
  blockHelpRenderOpen();
}
