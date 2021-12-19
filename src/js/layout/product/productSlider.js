//!----------------------------------------------- -----Product sliders/
window.jQuery = window.$ = require('jquery');
require('../../slider/slick.min.js');

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
