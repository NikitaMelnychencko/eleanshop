import productTemplate from '../../../views/partials/product/infoAboutProduct.hbs';
//* way to get a function from Andrew to render a size grid (don't clear)
// import sizeChose from '../fitting/sizeChose.js';
// const { createBtn } = sizeChose;

// have to clear string #12 after getting data from Local Storage (data from Ira Maksimova)
// localStorage.setItem('productInfoData', JSON.stringify(productInfo));

let savedProductInfoData = localStorage.getItem('productInfoData');
let parsedProductInfoData = JSON.parse(savedProductInfoData);
console.log(parsedProductInfoData);
//! ---------------------------------------------------RENDERING A SECTION

export function createFullMarkup() {
  savedProductInfoData = localStorage.getItem('productInfoData');
  parsedProductInfoData = JSON.parse(savedProductInfoData);
  console.log(parsedProductInfoData);

  return productTemplate({ parsedProductInfoData });
  //* way to get a function to get size grid (don't clear)
  // const btn = createBtn(parsedProductInfoData);
  // return productTemplate({parsedProductInfoData, btn});
}

//! ---------------------------------------------------Add to favorites
function checkIsProductInFavorites() {
  const addToFavoritesbuttonEl = document.querySelector('.product__name-wrapper .button-add-likes');
  const favoriteProduct = localStorage.getItem('favorites');
  const parsedFavoriteDate = JSON.parse(favoriteProduct);
  if (parsedFavoriteDate != null) {
    parsedFavoriteDate.fav.forEach(el => {
      if (el.id === parsedProductInfoData.id) {
        addToFavoritesbuttonEl.classList.add('active');
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

    const elem = {
      id: parsedProductInfoData.id,
      name: parsedProductInfoData.name,
      image: {
        srcset: `${parsedProductInfoData.image[0].imageMobile} 1x, ${parsedProductInfoData.image[0].imageMobileHigherResolution} 2x`,
        'srcset-mobile': `${parsedProductInfoData.image[0].imageMobile} 1x, ${parsedProductInfoData.image[0].imageMobileHigherResolution} 2x`,
        src: parsedProductInfoData.image[0].imageMobile,
        alt: parsedProductInfoData.image[0].imageDescriprion,
      },
      price: parsedProductInfoData.productPrice,
      // have to get size from size grid from Andrew's function
      size: '46',
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
  const id = parsedProductInfoData.id;
  if (event.currentTarget.classList.contains('active')) {
    removeFromFavorite(id);
  } else {
    insertIntoLSFavorite(id);
  }
  event.currentTarget.classList.toggle('active');
}

//!----------------------------------------------------Colorpicker
function addCurrentClass(button) {
  button.classList.add('button__colorpicker--current');
}
function removeCurrentClass() {
  const currentClass = document.querySelector('.button__colorpicker--current');

  if (currentClass) {
    currentClass.classList.remove('button__colorpicker--current');
  }
}
function setProductColor(color) {
  localStorage.setItem('productColor', color);
}
function fixateCurrentClass(buttonArray, productColor) {
  for (let index = 0; index < buttonArray.length; index++) {
    const element = buttonArray[index];

    if (productColor === element.id) {
      addCurrentClass(element);
      break;
    }
  }
}
function onColorpickerListClick(event) {
  const colorpickerButton = event.target;
  const isColorpickerButton = colorpickerButton.classList.contains('button__colorpicker');

  if (!isColorpickerButton) {
    return;
  }

  removeCurrentClass();
  addCurrentClass(colorpickerButton);
  setProductColor(colorpickerButton.id);
}
function setProductDataToOrdering() {
  const orderingDataArray = localStorage.getItem('orderingData');
  const orderingDataParsed = JSON.parse(orderingDataArray);
  const elementId = orderingDataParsed.findIndex(element => {
    element.label.id === parsedProductInfoData.id;
  });
  if (elementId === -1) {
    let orderingDataobj = { label: {} };
    orderingDataobj.label.id = parsedProductInfoData.id;
    orderingDataobj.label.name = parsedProductInfoData.productName;

    orderingDataobj.label.img = parsedProductInfoData.image[0].imageMobile;
    orderingDataobj.label.img2 = parsedProductInfoData.image[0].imageMobileHigherResolution;
    orderingDataobj.label.price = parsedProductInfoData.productPrice;
    // have to get size from size grid from Andrew's function
    orderingDataobj.label.sizeSelected = '46';
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
function onCharacteristicsListClick(event) {
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
function onDetermineSizeButtonElClick() {
  const preorderBackdropEl = document.querySelector('.preoder__backdrop');
  preorderBackdropEl.classList.add('is-visible');
}
//!----------------------------------------------------Is size in a stock?
function onIsSizeInStockButtonElClick() {}
//!----------------------------------------------------Fitting
function onFittingButtonElClick() {
  const tryOnBackdropEl = document.querySelector('.try-on__backdrop');
  tryOnBackdropEl.classList.add('is-visible');
}
//!----------------------------------------------------Fixate local storage data
function fixateDataFromLocalStorage() {
  const colorpickerButtonsEl = document.querySelectorAll('.button__colorpicker');
  let productColor = localStorage.getItem('productColor');

  fixateCurrentClass(colorpickerButtonsEl, productColor);
  checkIsProductInFavorites();
}

//!----------------------------------------------------LISTENERS
function createAllListeners(buy) {
  const characteristicListEl = document.querySelector('.product__characteristics');
  const colorpickerListEl = document.querySelector('.colorpicker__list');
  const purchaseBuyButtonEl = document.querySelector('.button__purchase--buy');
  const addToFavoritesButtonEl = document.querySelector('.product__name-wrapper .button-add-likes');
  const determineSizeButtonEl = document.querySelector('.button__size-option--available-size');
  const isSizeInStockButtonEl = document.querySelector('.button__size-option--find-size');
  const fittingButtonEl = document.querySelector('.button__purchase--fit');

  determineSizeButtonEl.addEventListener('click', onDetermineSizeButtonElClick);
  isSizeInStockButtonEl.addEventListener('click', onIsSizeInStockButtonElClick);
  addToFavoritesButtonEl.addEventListener('click', onAddToFavoritesClick);
  fittingButtonEl.addEventListener('click', onFittingButtonElClick);
  colorpickerListEl.addEventListener('click', onColorpickerListClick);
  characteristicListEl.addEventListener('click', onCharacteristicsListClick);
  purchaseBuyButtonEl.addEventListener('click', () => {
    buy(parsedProductInfoData.productName);
    setProductDataToOrdering();
  });
}

//!----------------------------------------------------EXPORT TO MAIN FILE
export function callProductPageFunctional(buy) {
  createAllListeners(buy);
  fixateDataFromLocalStorage();
}
