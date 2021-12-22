import animateHeader from '../../components/animateHeader';
import productTemplate from '../../../views/partials/product/infoAboutProduct.hbs';
import renderModal from '../../components/modal/modal';
import updateBin from '../../updateBin';
import sizeChose from '../../components/sizeChose';
import { preorderMark } from '../../layout/product/preorderModal';
import { tryOnModels } from '../../layout/product/tryOnModelsModal';
import sizeTable from '../../../views/components/sizeTable.hbs';
import newProductModalAddToCart from './productModalAddToCart';
import { setEventTryOnModels } from './tryOnModelsModal';

const { createBtn, onSizeElClick } = sizeChose;

function refs() {
  return {
    favQuantityEl: document.getElementById('js-text-fav'),
    sizeBtnLabel: document.querySelectorAll('[data-action="size-chose-label"]'),
    sizeBtnInput: document.querySelectorAll('[data-action="size-chose-input"]'),
  };
}

let productInfoData;
//! ---------------------------------------------------RENDERING A SECTION

export function createFullMarkup() {
  productInfoData = JSON.parse(localStorage.getItem('productInfoData'));

  const btn = createBtn();
  // * ЗДЕСЬ ВМЕСТО productTEST нужно заливать правильный JSON***********
  return productTemplate({ productInfoData, btn });
}

//! ---------------------------------------------------Add to favorites
function checkIsProductInFavorites() {
  const favBtn = document.querySelector('.product__name-wrapper .button-add-likes');
  const favoriteProduct = localStorage.getItem('favorites');
  const parsedFavoriteDate = JSON.parse(favoriteProduct);
  if (parsedFavoriteDate) {
    parsedFavoriteDate.fav.forEach(el => {
      if (el.id === productInfoData.id) {
        favBtn.classList.add('active');
      }
    });
  }
}
export function insertIntoLSFavorite(id) {
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

    function sizes() {
      const sizesArray = productInfoData.productAviable.find(el => {
        if (isColorChose === el.colorName) return el.aviableSize;
      });
      return sizesArray;
    }
    const elem = {
      id: productInfoData.id,
      name: productInfoData.productName,
      image: {
        srcset: `${productInfoData.image[0].imageProduct} 1x, ${productInfoData.image[0].imageProductHigherResolution} 2x`,
        'srcset-mobile': `${productInfoData.image[0].imageProduct} 1x, ${productInfoData.image[0].imageProductHigherResolution} 2x`,
        src: productInfoData.image[0].imageProduct,
        alt: productInfoData.image[0].imageDescriprion,
      },
      price: productInfoData.productPrice,
      size: isSizeChose ? isSizeChose : '',
      description: '',
      color: isColorChose ? isColorChose : '',
      productAviable: productInfoData.productAviable,
    };

    ls.fav.push({ ...elem, ...{ sizeAvailable: sizes() } });
    localStorage.setItem('favorites', JSON.stringify(ls));
    refs().favQuantityEl.innerHTML = ls.fav.length;
    animateHeader('js-text-fav');
  }
}
function removeFromFavorite(id) {
  let ls = JSON.parse(localStorage.getItem('favorites'));

  const lsid = ls.fav.findIndex(el => el.id === id);
  ls.fav.splice(lsid, 1);
  localStorage.setItem('favorites', JSON.stringify(ls));
  refs().favQuantityEl.innerHTML = ls.fav.length;
}
export function onAddToFavoritesClick(event) {
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

function selectFirstColor() {
  document.querySelector('.colorpicker__label').click();
}

function onColorListClick(event) {
  let availableSizes = [];
  const colorpickerButton = event.target;
  const isColorpickerButton = colorpickerButton.classList.contains('colorpicker__label');

  if (!isColorpickerButton) {
    return;
  }
  const inputColor = event.target.previousElementSibling.dataset.value;
  productInfoData.productAviable.forEach(size => {
    if (size.colorId === event.target.previousElementSibling.value && size !== undefined) {
      availableSizes.push(size.aviableSize);
    }
  });
  if (availableSizes[0] === undefined) {
    availableSizes = [''];
  }
  removeCurrentClass();
  addCurrentClass(colorpickerButton);
  showAvailableSizes(availableSizes);

  setProductColor(inputColor);
}

function showAvailableSizes(sizes) {
  const buyBtn = document.querySelector('.button__purchase--buy');
  const inputs = [...refs().sizeBtnInput];
  const labels = [...refs().sizeBtnLabel];
  labels.map(value => {
    if (!sizes[0].includes(value.textContent)) {
      value.classList.add('size-chose__label--disabled');
    } else {
      value.classList.remove('size-chose__label--disabled');
    }
  });

  inputs.map(value => {
    if (value.checked) {
      value.checked = false;
    }
    if (!sizes[0].includes(value.value)) {
      value.setAttribute('disabled', 'disabled');
    } else {
      value.removeAttribute('disabled', 'disabled');
    }
  });

  const disabledInputs = inputs.every(value => value.disabled);
  if (disabledInputs) {
    buyBtn.setAttribute('disabled', 'disabled');
    buyBtn.innerHTML = 'НЕТ РАЗМЕРОВ В НАЛИЧИИ';
  } else {
    buyBtn.removeAttribute('disabled', 'disabled');
    buyBtn.innerHTML = 'КУПИТЬ';
  }
}

function setProductDataToOrdering() {
  if (!localStorage.getItem('orderingData')) {
    localStorage.setItem('orderingData', JSON.stringify([]));
  }
  const orderingDataParsed = JSON.parse(localStorage.getItem('orderingData'));
  const elementId = orderingDataParsed.findIndex(element => {
    element.label.id === productInfoData.id;
  });
  if (elementId === -1) {
    let orderingDataobj = { label: {} };
    orderingDataobj.label.id = productInfoData.id;
    orderingDataobj.label.name = productInfoData.productName;
    orderingDataobj.label.img = productInfoData.image[0].imageProduct;
    orderingDataobj.label.price = productInfoData.productPrice;
    orderingDataobj.label.sizeSelected = localStorage.getItem('productSize');
    orderingDataobj.label.colorSelected = localStorage.getItem('productColor');
    orderingDataobj.label.circleSelected = '';
    orderingDataobj.label.description = '';
    orderingDataobj.label.count = 1;
    orderingDataobj.label.sizeAvailable = productInfoData.productAviable.find(el => {
      if (orderingDataobj.label.colorSelected === el.colorName) return el.aviableSize;
    });
    orderingDataobj.label.productAviable = productInfoData.productAviable;
    orderingDataParsed.push(orderingDataobj);
    localStorage.setItem('orderingData', JSON.stringify(orderingDataParsed));
    updateBin();
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
  renderModal(preorderMark, '');
}
//!----------------------------------------------------Is size in a stock?
function onDefineSizeBtnClick() {
  renderModal(sizeTable(), '');
}
//!----------------------------------------------------Fitting
function onFittingBtnClick() {
  renderModal(tryOnModels, setEventTryOnModels);
}
//!----------------------------------------------------Fixate local storage data
function fixateDataFromLocalStorage() {
  const colorBtn = document.querySelectorAll('.colorpicker__label');
  let productColor = localStorage.getItem('productColor');

  fixateCurrentClass(colorBtn, productColor);
  checkIsProductInFavorites();
}
//!----------------------------------------------------FORM

const onFormSubmit = buy => event => {
  event.preventDefault();
  setProductDataToOrdering();
  // buy(productInfoData.productName);

  const objProductModalAddToCart = new newProductModalAddToCart({
    productName: 'ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ',
    objectClose: {
      name: '[data-modal]', // a backdrop selector that is called when the button is clicked
      className: 'is-hidden', // the class that hides the backdrop
    },
  });
};

//!----------------------------------------------------LISTENERS
function createAllListeners(buy) {
  const charList = document.querySelector('.product__characteristics');
  const colorList = document.querySelector('.colorpicker__list');
  const favBtn = document.querySelector('.product__name-wrapper .button-add-likes');
  const notYourSizeBtn = document.querySelector('.button__size-option--available-size');
  const defineSizeBtn = document.querySelector('.button__size-option--find-size');
  const fittingBtn = document.querySelector('.button__purchase--fit');
  const sizeList = document.querySelector('.size__list');
  const form = document.querySelector('.product__form');

  notYourSizeBtn.addEventListener('click', onNotYourSizeBtnClick);
  defineSizeBtn.addEventListener('click', onDefineSizeBtnClick);
  favBtn.addEventListener('click', onAddToFavoritesClick);
  fittingBtn.addEventListener('click', onFittingBtnClick);
  colorList.addEventListener('click', onColorListClick);
  charList.addEventListener('click', onCharListClick);
  sizeList.addEventListener('click', onSizeElClick);
  form.addEventListener('submit', onFormSubmit(buy));
  selectFirstColor();
}

//!----------------------------------------------------EXPORT TO MAIN FILE
export function callProductPageFunctional(buy) {
  createAllListeners(buy);
  fixateDataFromLocalStorage();
}
