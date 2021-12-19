import { event } from 'jquery';
import productTEST from '../../../js/json/product/productTEST.json';
import productTemplate from '../../../views/partials/product/infoAboutProduct.hbs';
window.jQuery = window.$ = require('jquery');
require('../../slick/slick.min');

import sizeChose from '../../components/sizeChose';
const { createBtn, onSizeElClick } = sizeChose;
import {onBtnClick} from '../../components/sizeTable'



let productInfoData = JSON.parse(localStorage.getItem('productInfoData'));
//! ---------------------------------------------------RENDERING A SECTION

export function setProductSlider() {
  $(document).ready(function () {
    $('.product-slider-smaller').slick({
      arrows: false,
      speed: 500,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: 'progressive',
      asNavFor: '.product-slider',
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
    });
    $('.product-slider').slick({
      arrows: false,
      dots: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      lazyLoad: 'progressive',
      asNavFor: '.product-slider-smaller',
    });
  });
}

export function createFullMarkup() {
  productInfoData = JSON.parse(localStorage.getItem('productInfoData'));

  //* TEST************
  const btn = createBtn(productTEST);
  return productTemplate({productTEST, btn});

  // const btn = createBtn(productTEST);
  // return productTemplate({productTEST});
}

//! ---------------------------------------------------Add to favorites
function checkIsProductInFavorites() {
  const favBtn = document.querySelector('.product__name-wrapper .button-add-likes');
  const favoriteProduct = localStorage.getItem('favorites');
  const parsedFavoriteDate = JSON.parse(favoriteProduct);
  if (parsedFavoriteDate != null) {
    parsedFavoriteDate.fav.forEach(el => {
      if (el.id === productInfoData.id) {
        favBtn.classList.add('active');
      }
    });
  }
}
function insertIntoLSFavorite(id) {
  let ls = JSON.parse(localStorage.getItem('favorites'));
  let newEl = true;
  if (ls) {
    ls.fav.forEach(el => {
      if (el.id === id) {
        newEl = false;
      }
    });
  } else {
    ls = { fav: [] };
  }
  if (newEl) {
    const isColorChose = localStorage.getItem('productColor');
    const isSizeChose = localStorage.getItem('productSize');


    const elem = {
      id: productInfoData.id,
      name: productInfoData.name,
      image: {
        srcset: `${productInfoData.image[0].imageMobile} 1x, ${productInfoData.image[0].imageMobileHigherResolution} 2x`,
        'srcset-mobile': `${productInfoData.image[0].imageMobile} 1x, ${productInfoData.image[0].imageMobileHigherResolution} 2x`,
        src: productInfoData.image[0].imageMobile,
        alt: productInfoData.image[0].imageDescriprion,
      },
      price: productInfoData.productPrice,
      // have to get size from size grid from Andrew's function
      size: isSizeChose ? isSizeChose : '',
      description: '',
      color: isColorChose ? isColorChose : '',
    };

    ls.fav.push(elem);
    localStorage.setItem('favorites', JSON.stringify(ls));
  }
}
function removeFromFavorite(id) {
  let ls = JSON.parse(localStorage.getItem('favorites'));
  const lsid = ls.fav.findIndex(el => el.id === id);
  ls.fav.splice(lsid, 1);
  localStorage.setItem('favorites', JSON.stringify(ls));
}
function onAddToFavoritesClick(event) {
  const id = productInfoData.id;
  if (event.currentTarget.classList.contains('active')) {
    removeFromFavorite(id);
  } else {
    insertIntoLSFavorite(id);
  }
  event.currentTarget.classList.toggle('active');
}

//!----------------------------------------------------Colorpicker
function setProductColor(color) {
  localStorage.setItem('productColor', color);
}
function addCurrentClass(button) {
  button.classList.add('colorpicker__label--current');
}

function removeCurrentClass() {
  const currentClass = document.querySelector('.colorpicker__label--current');

  if (currentClass) {
    currentClass.classList.remove('colorpicker__label--current');
  }
}

function fixateCurrentClass(colorArray, productColor) {
  for (let index = 0; index < colorArray.length; index++) {
    const element = colorArray[index];

    if (productColor === element.id) {
      addCurrentClass(element);
      break;
    }
  }
}


function onColorListClick(event) {
  let x = []
  const colorpickerButton = event.target;
  const isColorpickerButton = colorpickerButton.classList.contains('colorpicker__label');

  if (!isColorpickerButton) {
    return;
  }
  const inputColor = event.target.previousElementSibling.value
  console.log(inputColor);

  productTEST.productAviable.find(size => {
    if(size.colorId === inputColor) {
      x.push(size.aviableSize)
    }
  } )

  removeCurrentClass();
  addCurrentClass(colorpickerButton);
  setProductColor(inputColor);

  console.log(x);
  // const btn = createBtn(x);
  // productTemplate({btn});
  // createFullMarkup(x)
}

function setProductDataToOrdering() {
  const orderingDataArray = localStorage.getItem('orderingData');
  if (orderingDataArray.length === 0) {
    return
  }
  const orderingDataParsed = JSON.parse(orderingDataArray);
  const elementId = orderingDataParsed.findIndex(element => {
    element.label.id === productInfoData.id;
  });
  if (elementId === -1) {
    let orderingDataobj = { label: {} };
    orderingDataobj.label.id = productInfoData.id;
    orderingDataobj.label.name = productInfoData.productName;

    orderingDataobj.label.img = productInfoData.img.src;
    // orderingDataobj.label.img2 = productInfoData.image[0].imageMobileHigherResolution;
    orderingDataobj.label.price = productInfoData.productPrice;
    // have to get size from size grid from Andrew's function
    orderingDataobj.label.sizeSelected = localStorage.getItem('productSize');
    orderingDataobj.label.colorSelected = localStorage.getItem('productColor');
    orderingDataobj.label.circleSelected = '';
    orderingDataobj.label.description = '';
    orderingDataobj.label.count = 1;
    orderingDataParsed.push(orderingDataobj);
    localStorage.setItem('orderingData', JSON.stringify(orderingDataParsed));
  }
}

//!----------------------------------------------------Characteristic menu
function toggleIsOpenClass(menu) {
  menu.classList.toggle('is-open');
}
function transformPlusToMinus(button) {
  button.classList.toggle('button__minus');
}
function onCharListClick(event) {
  const paramsMenuEl = document.querySelector('[data-params-menu]');
  const aditionalMenuEl = document.querySelector('[data-aditional-menu]');
  const buttonParamsEl = document.querySelector('.button__plus--params');
  const buttonAdditionalEl = document.querySelector('.button__plus--aditional');
  const isParams = event.target.classList.contains('button__plus--params');
  const isAditional = event.target.classList.contains('button__plus--aditional');

  if (isParams) {
    toggleIsOpenClass(paramsMenuEl);
    transformPlusToMinus(buttonParamsEl);
  } else if (isAditional) {
    toggleIsOpenClass(aditionalMenuEl);
    transformPlusToMinus(buttonAdditionalEl);
  }
}
//!----------------------------------------------------Determine Size
function onNotYourSizeBtnClick() {
  const preorderBackdropEl = document.querySelector('.preoder__backdrop');
  preorderBackdropEl.classList.add('is-visible');
}
//!----------------------------------------------------Is size in a stock?
function onDefineSizeBtnClick() {
  onBtnClick()
}
//!----------------------------------------------------Fitting
function onFittingBtnClick() {
  const tryOnBackdropEl = document.querySelector('.try-on__backdrop');
  tryOnBackdropEl.classList.add('is-visible');
}
//!----------------------------------------------------Fixate local storage data
function fixateDataFromLocalStorage() {
  const colorBtn = document.querySelectorAll('.colorpicker__label');
  let productColor = localStorage.getItem('productColor');

  fixateCurrentClass(colorBtn, productColor);
  checkIsProductInFavorites();
}


//!----------------------------------------------------LISTENERS
function createAllListeners(buy) {
  const charList = document.querySelector('.product__characteristics');
  const colorList = document.querySelector('.colorpicker__list');
  const favBtn = document.querySelector('.product__name-wrapper .button-add-likes');
  const notYourSizeBtn = document.querySelector('.button__size-option--available-size');
  const defineSizeBtn = document.querySelector('.button__size-option--find-size');
  const fittingBtn = document.querySelector('.button__purchase--fit');
  const sizeList = document.querySelector('.size__list');
  const form = document.querySelector('.product__form')

  notYourSizeBtn.addEventListener('click', onNotYourSizeBtnClick);
  defineSizeBtn.addEventListener('click', onDefineSizeBtnClick);
  favBtn.addEventListener('click', onAddToFavoritesClick);
  fittingBtn.addEventListener('click', onFittingBtnClick);
  colorList.addEventListener('click', onColorListClick);
  charList.addEventListener('click', onCharListClick);
  sizeList.addEventListener('click', onSizeElClick);

  form.addEventListener('submit', (event) => {
      event.preventDefault()
      buy(productInfoData.productName);
      setProductDataToOrdering();
    });
}

//!----------------------------------------------------EXPORT TO MAIN FILE
export function callProductPageFunctional(buy) {
  createAllListeners(buy);
  fixateDataFromLocalStorage();
}
