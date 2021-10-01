import productInfo from '../../../js/json/product/productInfo.json'
import productParams from '../../../js/json/product/productParams.json'
import productTemplate from '../../../views/partials/product/productSlider.hbs'
import refs from '../../refs/refs.js'




// -------------------------------------------rendering a section
const createProductMarkup = (data) => {
  return productTemplate(data)
}

const productInfoMarkup = createProductMarkup(productInfo)
const productParamsMarkup = createProductMarkup(productParams)
refs.mainEL.insertAdjacentHTML('beforeend', productInfoMarkup, productParamsMarkup)
// -------------------------------------------------------/





//----------------------------------------------- -------Sliders/
window.jQuery = window.$ = require("jquery");
require('./slick.min.js')

$(document).ready(function () {
  $('.product-slider-smaller').slick({
    arrows:false,
    speed: 1000,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-slider",
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px'
  });
  $('.product-slider').slick({
		arrows:false,
		dots:true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    asNavFor: ".product-slider-smaller",
 
  })
});
// ---------------------------------------------------------/





// ------------------------------------------------characteristic-menu/
const productCharacteristicBtn = document.querySelector('.button__plus')
const paramsMenu = document.querySelector('[data-params-menu]')

const onClick = () => {
  paramsMenu.classList.toggle("is-open");
}

productCharacteristicBtn.addEventListener('click', onClick)

