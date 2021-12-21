import refs from './refs/refs.js';
import updateBin from './updateBin.js';
import { classBody } from './layout/static/footer.js';
import { blockHelpRender } from './call-list/help.js';
updateBin();

import { Forms } from './components/forms';
const formsForm = new Forms('fittingForm');
const formsPage = new Forms('fittingPage');
const formBrand = {
  page: formsPage.insertForm(),
  form: formsForm.insertForm(),
};
import { VideoSetPlayer } from './components/videoSetPlayer.js';
const videoSetPlayer = new VideoSetPlayer();

//=====brand========//
import brand_page from '../views/layouts/brand.hbs';
import {
  infoAboutBrand,
  brandOurAdvantages,
  videoBrand,
  brandPlayer,
} from './layout/brand/infoAboutBrand.js';

export function brandRender() {
  const initFooter = new classBody('footer-switch');
  const contactPageMarkUp = brand_page({
    formBrand,
    brandOurAdvantages,
    contactsContact,
    videoBrand,
  });
  refs.mainEL.innerHTML = contactPageMarkUp;
  infoAboutBrand();
  brandPlayer();
  blockHelpRender();
  formsForm.init();
}

//=====checkout========//
import { ModalData, createPayment } from './layout/checkout/payment.js';
import { OrderingPrice, OrderingSizeAndColor } from './layout/checkout/ordering.js';
import ordering_ordering from '../views/partials/checkout/ordering.hbs';
import { backdropMarkup } from './layout/checkout/thanksForOrdering.js';
import payment_checkout from '../views/layouts/checkout.hbs';
export function checkoutRender() {
  updateBin();
  const initFooter = new classBody();
  const savedData = localStorage.getItem('orderingData');
  const parsedData = JSON.parse(savedData);
  const ordering = ordering_ordering(parsedData);
  const createCheckout = payment_checkout({ createPayment, ordering, backdropMarkup });
  refs.mainEL.innerHTML = createCheckout;
  //refs.mainEL.insertAdjacentHTML('beforeend', createCheckout);

  const orderingPrice = new OrderingPrice({
    parsedData: parsedData,
  });
  const orderingSizeColor = new OrderingSizeAndColor({
    parsedData: parsedData,
  });
  const modalOpen = new ModalData({
    idInputDay: 'js-day',
    idListDay: 'day-list',
    idInputTime: 'js-time',
    idListTime: 'time-list',
  });
  blockHelpRender();
}

//=====favorites========//
import Favorites from './layout/favorites/favorites.js';
// import favorit from './json/favorites.json';

refs.numRef.innerHTML = 0;
let favoritesData = localStorage.getItem('favorites');
if (favoritesData !== null) {
  favoritesData = JSON.parse(favoritesData);
  refs.numRef.innerHTML = favoritesData['fav'].length;
}

export function favoritesRender() {
  // let data = {};
  // data['fav'] = [...favorit];
  // localStorage.setItem('favorites', JSON.stringify(data));

  const favorites = new Favorites();

  if (favorites.markcup.length > 0) {
    refs.mainEL.innerHTML = favorites.markcup;
  }
  favorites.init();
  blockHelpRender();
}
let data = localStorage.getItem('favorites');
if (!data == null) {
  data = JSON.parse(data);
  refs.numRef.innerHTML = data['fav'].length;
}
//=====contact========//

import contact_page from '../views/layouts/contact.hbs';
import { contactsMap, contactsContact } from './layout/contact/contact.js';

export function contactRender() {
  const initFooter = new classBody();
  const contactPageMarkUp = contact_page({ formBrand, contactsMap, contactsContact });
  refs.mainEL.innerHTML = contactPageMarkUp;
  blockHelpRender();
  formsPage.init();
}

//=====delivery========//

const formDelivery = new Forms('delivery');
const formDeliveryMarkUp = formDelivery.insertForm();
import deliveryMarkUp from '../views/layouts/delivery.hbs';
import { deliveryThreeModal } from './layout/delivery/deliveryTypes.js';
import {
  buttonsDelivery,
  mainImageDelivery,
  descriptionDelivery,
  questionDelivery,
} from './layout/delivery/deliveryTypes.js';

export function deliveryRender() {
  const initFooter = new classBody();
  const deliveryPageMarkUp = deliveryMarkUp({
    buttonsDelivery,
    mainImageDelivery,
    descriptionDelivery,
    questionDelivery,
    formDeliveryMarkUp,
  });
  refs.mainEL.innerHTML = deliveryPageMarkUp;
  deliveryThreeModal();
  blockHelpRender();
  formDelivery.init();
}

//=====fitting========//
import sizeTable_markup from '../views/layouts/fitting.hbs';
import { sizeTable_tableCreate } from './layout/fitting/sizeTable.js';
import { informationAboutFitting_informationCreate } from './layout/fitting/informationAboutFitting.js';
import { openVideoSlider, videoSlider_videoSliderCreate } from './layout/fitting/videoSlider.js';
export function fittingRender() {
  const initFooter = new classBody('footer-switch');
  const fittingMarkUp = sizeTable_markup({
    sizeTable_tableCreate,
    videoSlider_videoSliderCreate,
    informationAboutFitting_informationCreate,
    formBrand,
  });
  refs.mainEL.innerHTML = fittingMarkUp;
  openVideoSlider();
  videoSetPlayer.clickListener();
  blockHelpRender();
  formsPage.init();
}

//=====product========//
import { callProductPageFunctional, createFullMarkup } from './layout/product/infoAboutProduct.js';
import { setProductSlider } from './layout/product/productSlider';
import ProductModalAddToCart from './layout/product/productModalAddToCart.js';
import RecomendationsCategory from './layout/product/recomendationsCategory.js';
import allJSON from './json/all.json';
const cards = allJSON.products;
import productMarkup from '../views/layouts/product.hbs';
import HandSewn from './layout/product/productHandSewn.js';
import backdropMarkupTempl from '../views/components/backdrop.hbs';
import modalFormMarkupTempl from '../views/components/thanksForOrdering.hbs';
import { preorderMark, setEventPreorder } from './layout/product/preorderModal.js';
import { tryOnModels, setEventTryOnModels } from './layout/product/tryOnModelsModal.js';

export function productRender() {
  const initFooter = new classBody();
  const objRecomendationsCategory = new RecomendationsCategory({
    data: cards,
  });
  const objHandSewn = new HandSewn({
    object: [
      {
        name: '.try-on__backdrop', // a modal selector that is called when the button is clicked
        className: 'is-visible', // the class that hides the modal
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
  const modalFormMarkupOrder = modalFormMarkupTempl();
  const modalFormMarkup = modalFormMarkupOrder + objProductModalAddToCart.getMarkup();
  const backdropMarkup = backdropMarkupTempl(modalFormMarkup);
  const obj = {
    infoAboutProduct: createFullMarkup(),
    recomendationCategory: objRecomendationsCategory.getMarkup(),
    handSewn: objHandSewn.getMarkup(),
    backdrop: backdropMarkup,
    modalPreorder: preorderMark,
    tryOnModels: tryOnModels,
  };
  // refs.mainEL.insertAdjacentHTML('beforeend', productMarkup(obj));
  refs.mainEL.innerHTML = productMarkup(obj);
  setProductSlider();
  callProductPageFunctional(objProductModalAddToCart.show);
  document.querySelector('.form__button-сlose').style.display = 'none';
  document.querySelector('.ordering__form').style.display = 'none';
  objRecomendationsCategory.setSlider();
  objRecomendationsCategory.setEvent();
  objHandSewn.setEvent();
  objProductModalAddToCart.setEvent();
  setEventPreorder();
  setEventTryOnModels();
  blockHelpRender();
}

//=====reviews========//
const formReviews = new Forms('reviews');
const formReviewsMarkUp = formReviews.insertForm();
import reviews_page from '../views/layouts/reviews.hbs';
import { setVideoHbs, clientStar, videosetSlickSettings } from './layout/reviews/videoSet.js';

export function reviewsRender() {
  const initFooter = new classBody();
  const reviewsMarkUp = reviews_page({ setVideoHbs, clientStar, formReviewsMarkUp });
  refs.mainEL.innerHTML = reviewsMarkUp;
  videosetSlickSettings();
  starClientsSlider();
  starClientsComments();
  videoSetPlayer.clickListener();
  blockHelpRender();
  formReviews.init();
}

//=====showroom========//
import showroom_page from '../views/layouts/showroom.hbs';
export function showroomRender() {
  const initFooter = new classBody();
  const showroomPageMarkUp = showroom_page({ formBrand, pageShowroomSliderMarkup });
  refs.mainEL.innerHTML = showroomPageMarkUp;
  showroomSlider();
  blockHelpRender();
  formsForm.init();
}

//======catalog=========//
import catalogMarkUp from '../views/layouts/catalog.hbs';
import { filterListMakeup, openFilter } from './layout/сatalog/filter.js';
import { catalogListMarkupF, openCategory } from './layout/сatalog/gallery.js';

export function catalogRender() {
  const initFooter = new classBody();
  const catalogListMarkup = catalogListMarkupF();
  const filterGalleryCatalogMarkup = catalogMarkUp({ filterListMakeup, catalogListMarkup });
  refs.mainEL.innerHTML = filterGalleryCatalogMarkup;
  openFilter();
  openCategory();
  blockHelpRender();
  // console.log(filterGalleryCatalogMarkup);
}
