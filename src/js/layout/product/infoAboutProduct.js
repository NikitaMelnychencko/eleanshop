import productInfo from '../../../js/json/product/productInfo.json'
import productTemplate from '../../../views/partials/product/infoAboutProduct.hbs'
import refs from '../../refs/refs.js'


//! -----------------------------------------------Rendering a section
const createProductMarkup = (data) => {
  return productTemplate(data)
}

const productInfoMarkup = createProductMarkup(productInfo)
refs.mainEL.insertAdjacentHTML('beforeend', productInfoMarkup)

//! -----------------------------------------------Characteristic-menu
const productCharacteristicsConteinerEl = document.querySelector('.product__characteristics')
const paramsMenuEl = document.querySelector('[data-params-menu]')
const aditionalMenuEl = document.querySelector('[data-aditional-menu]')
const buttonParamsEl = document.querySelector('.button__plus--params')
const buttonAditionalEl = document.querySelector('.button__plus--aditional')

const toggleIsOpenClass = (menu) => {
  menu.classList.toggle("is-open");
}
const transformPlusToMinus = (button) => {
  button.classList.toggle("button__minus")
}

const onProductCharacteristicsConteinerClick = (event) => {
  const isParams = event.target.classList.contains('button__plus--params')
  const isAditional = event.target.classList.contains('button__plus--aditional')

   if (isParams) {
    toggleIsOpenClass(paramsMenuEl)
    transformPlusToMinus(buttonParamsEl)
  } else if (isAditional) {
    toggleIsOpenClass(aditionalMenuEl)
    transformPlusToMinus(buttonAditionalEl)
  }

}
productCharacteristicsConteinerEl.addEventListener('click', onProductCharacteristicsConteinerClick)

//! -----------------------------------------------Colorpicker
const colorpickerButtonBlackEl = document.querySelector('.button__colorpicker--black')
const colorpickerButtonRedEl = document.querySelector('.button__colorpicker--red')
const colorpickerButtonGreyEl = document.querySelector('.button__colorpicker--grey')


let productColor = localStorage.getItem('productColor')

const setProductColor = (color) => {
  localStorage.setItem('productColor', color)
}

const showCurrentButton = (add, remove1, remove2) =>{
  add.classList.add('button__colorpicker--current')
  remove1.classList.remove('button__colorpicker--current')
  remove2.classList.remove('button__colorpicker--current')
}

switch (productColor) {
  case 'black':
    setProductColor('black')
    colorpickerButtonBlackEl.classList.add('button__colorpicker--current')
    break;
  case 'red':
    setProductColor('red')
    colorpickerButtonRedEl.classList.add('button__colorpicker--current')
    break;
  case 'grey':
    setProductColor('grey')
    colorpickerButtonGreyEl.classList.add('button__colorpicker--current')
    break
  }

colorpickerButtonBlackEl.addEventListener('click', () => {
  setProductColor('black')
  showCurrentButton(colorpickerButtonBlackEl, colorpickerButtonRedEl, colorpickerButtonGreyEl)
})
colorpickerButtonRedEl.addEventListener('click', () => {
  setProductColor('red')
  showCurrentButton(colorpickerButtonRedEl, colorpickerButtonBlackEl, colorpickerButtonGreyEl)
})
colorpickerButtonGreyEl.addEventListener('click', () => {
  setProductColor('grey')
  showCurrentButton(colorpickerButtonGreyEl, colorpickerButtonBlackEl, colorpickerButtonRedEl)
})

// !------------------------------------------------------------------

