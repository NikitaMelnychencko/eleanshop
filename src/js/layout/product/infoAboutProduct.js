import productInfo from '../../../js/json/product/productInfo.json'
import productTemplate from '../../../views/partials/product/infoAboutProduct.hbs'

import productParams from '../../../js/json/product/productParams.json'
import productSlider from '../../../views/partials/product/productSlider.hbs'

import refs from '../../refs/refs.js'


//! -------------------------------------------Rendering a section
const createProductMarkup = (data) => {
  return productTemplate(data)
}

const productInfoMarkup = createProductMarkup(productInfo)
// const productParamsMarkup = createProductMarkup(productParams)
// const productSliderMarkup = createProductMarkup(productSlider)

refs.mainEL.insertAdjacentHTML('beforeend', productInfoMarkup)
//! -----------------------------------------------------------/

//! -----------------------------------------------Characteristic-menu
const productCharacteristicsConteiner = document.querySelector('.product__characteristics')
const paramsMenu = document.querySelector('[data-params-menu]')
const aditionalMenu = document.querySelector('[data-aditional-menu]')


const onProductCharacteristicsConteinerClick = (event) => {
  const isParams = event.target.classList.contains('button__plus--params')
  const isAditional = event.target.classList.contains('button__plus--aditional')

  if (isParams) {
    return paramsMenu.classList.toggle("is-open");
  } else if (isAditional) {
    return aditionalMenu.classList.toggle("is-open");
  }

}

productCharacteristicsConteiner.addEventListener('click', onProductCharacteristicsConteinerClick)
//! -----------------------------------------------/