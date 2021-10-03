import productInfo from '../../../js/json/product/productInfo.json'
import productTemplate from '../../../views/partials/product/infoAboutProduct.hbs'
import refs from '../../refs/refs.js'


//! -----------------------------------------------Rendering a section
/* const createProductMarkup = (data) => {
  return productTemplate(data)
} */

//const productInfoMarkup = createProductMarkup(productInfo)


const productInfoMarkup = create();

function create(event) {
  const btn = createBtn('1', size);
  console.log(btn);
  //console.log(productInfo);

  console.log( productTemplate({productInfo, btn}));
  return productTemplate({productInfo, btn});
};
refs.mainEL.insertAdjacentHTML('beforeend', productInfoMarkup);
createListener();


// !--------------------------------------------------------------Colorpicker

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
  localStorage.setItem('productColor', color)
}

function fixateCurrentClass(buttonArray, productColor) {
    for (let index = 0; index < buttonArray.length; index++) {
    const element = buttonArray[index];

      if (productColor === element.id) {
        addCurrentClass(element)
        break
    }
  }
}

//! -----------------------------------------------Characteristic-menu
function toggleIsOpenClass(menu){
  menu.classList.toggle("is-open");
}

function transformPlusToMinus(button){
  button.classList.toggle("button__minus")
}


function createListener() {
  const characteristicListEl = document.querySelector('.product__characteristics')
  const paramsMenuEl = document.querySelector('[data-params-menu]')
  const aditionalMenuEl = document.querySelector('[data-aditional-menu]')
  const buttonParamsEl = document.querySelector('.button__plus--params')
  const buttonAdditionalEl = document.querySelector('.button__plus--aditional')
  const colorpickerListEl = document.querySelector('.colorpicker__list')
  const colorpickerButtonsEl = document.querySelectorAll('.button__colorpicker')
  let productColor = localStorage.getItem('productColor')

  const onCharacteristicsListClick = (event) => {
    const isParams = event.target.classList.contains('button__plus--params')
    const isAditional = event.target.classList.contains('button__plus--aditional')

    if (isParams) {
      toggleIsOpenClass(paramsMenuEl)
      transformPlusToMinus(buttonParamsEl)
    } else if (isAditional) {
      toggleIsOpenClass(aditionalMenuEl)
      transformPlusToMinus(buttonAdditionalEl)
    }

  }

  const onColorpickerListClick = (event) => {
    const colorpickerButton = event.target;
    const isColorpickerButton = colorpickerButton.classList.contains('button__colorpicker');
 

    if (!isColorpickerButton) {
      return;
    }

    removeCurrentClass()
    addCurrentClass(colorpickerButton)
    setProductColor(colorpickerButton.id)
  }

  fixateCurrentClass(colorpickerButtonsEl, productColor) 

  characteristicListEl.addEventListener('click', onCharacteristicsListClick)
  colorpickerListEl.addEventListener('click', onColorpickerListClick)
}


// EXPORT TO MAIN FILE
export default { create, createListener, createBtn, size };

// потом УБРАТЬ!!
//refs.mainEL.insertAdjacentHTML('beforeend', productInfoMarkup)
//createListener()

//---------------------------------------------------------------------
import size from '../../../js/json/product/productInfo.json';

function createBtn(id, json) {
  const Array = json
    //find the selected object (item of clothing) in json and pull out an array of sizes
   // .find(x => x.id === id)
    .size//sort sizes in order
    .sort((a, b) => Number(Object.keys(a)) - Number(Object.keys(b)))
    //create an array of dice sizes that are and are not
    .map(value => {
      const array = [];
      if (Object.values(value)[0]) {
        array.push(
          `<button class="size-chose__size-list-btn" type="button">${
            Object.keys(value)[0]
          }</button>`,
        );
      } else {
        array.push(
          `<button disabled class="size-chose__size-list-btn size-chose__disabled" type="button">${
            Object.keys(value)[0]
          }</button>`,
        );
      }
      return array;
    });
  return Array;
}