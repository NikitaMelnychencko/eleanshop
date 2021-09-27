import productSlider from '../../../views/partials/product/productSlider.hbs'
import '../../../sass/layout/product/productSlider.scss'


import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-1.jpg'
import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-2.jpg'
import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-3.jpg'
import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-4.jpg'
import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-5.jpg'

import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-1@2x.jpg'
import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-2@2x.jpg'
import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-3@2x.jpg'
import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-4@2x.jpg'
import '../../../images/img/products/mobile/tuxedo-and-vest-mobile-5@2x.jpg'

import '../../../images/img/products/desktop/tuxedo-and-vest-mini-desktop-1.jpg'
import '../../../images/img/products/desktop/tuxedo-and-vest-mini-desktop-2.jpg'
import '../../../images/img/products/desktop/tuxedo-and-vest-mini-desktop-3.jpg'
import '../../../images/img/products/desktop/tuxedo-and-vest-mini-desktop-4.jpg'

import '../../../images/img/products/desktop/tuxedo-and-vest-mini-desktop-1@2x.jpg'
import '../../../images/img/products/desktop/tuxedo-and-vest-mini-desktop-2@2x.jpg'
import '../../../images/img/products/desktop/tuxedo-and-vest-mini-desktop-3@2x.jpg'
import '../../../images/img/products/desktop/tuxedo-and-vest-mini-desktop-4@2x.jpg'


window.jQuery = window.$ = require("jquery");
require('./slick.min.js')

$(document).ready(function(){
  $('.product-slider-smaller').slick({
    arrows:false,
    // dots: true,
    speed: 1000,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-slider",
    // centerMode: true,
    focusOnSelect: true,

    
  });
  $('.product-slider').slick({
		arrows:false,
		dots:true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    asNavFor: ".product-slider-smaller",
 
    
		// autoplaySpeed:800,
		// responsive:[
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow:2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		// ]
  })
});



// console.log(productSlider) 
// import payment_payment from '../../../views/partials/checkout/payment.hbs'
// import payment_checkout from '../../../views/layouts/checkout.hbs'
// import refs from '../../refs/refs.js'
// import '../../../images/img/checkout/payment/buyers.jpg'
// import '../../../images/img/checkout/payment/buyers@2x.jpg'
// import '../../../images/img/checkout/payment/mirror_reflection.jpg'
// import '../../../images/img/checkout/payment/mirror_reflection@2x.jpg'
const slider = productSlider()
document.body.insertAdjacentHTML('beforeend', slider )