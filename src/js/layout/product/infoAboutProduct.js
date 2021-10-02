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
const productCharacteristicsConteiner = document.querySelector('.product__characteristics')
const paramsMenu = document.querySelector('[data-params-menu]')
const aditionalMenu = document.querySelector('[data-aditional-menu]')
const buttonParams = document.querySelector('.button__plus--params')
const buttonAditional = document.querySelector('.button__plus--aditional')

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
    toggleIsOpenClass(paramsMenu)
    transformPlusToMinus(buttonParams)

  } else if (isAditional) {
    toggleIsOpenClass(aditionalMenu)
    transformPlusToMinus(buttonAditional)
  }

}

productCharacteristicsConteiner.addEventListener('click', onProductCharacteristicsConteinerClick)
