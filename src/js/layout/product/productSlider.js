//!----------------------------------------------- -----Product sliders/
window.jQuery = window.$ = require("jquery");
require('../../slick/slick.min')

$(document).ready(function () {
  $('.product-slider-smaller').slick({
    arrows: false,
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
    arrows: false,
    dots: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    asNavFor: ".product-slider-smaller",

  })
});





