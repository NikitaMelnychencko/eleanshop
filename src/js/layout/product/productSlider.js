//!----------------------------------------------- -----Product sliders/
window.jQuery = window.$ = require('jquery');
require('../../slider/slick.min.js');

export function setProductSlider() {
  $(document).ready(function () {
    $('.product-slider-smaller').slick({
      arrows: false,
      speed: 0,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 5,
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
      speed: 0,
      slidesToShow: 1,
      lazyLoad: 'progressive',
      asNavFor: '.product-slider-smaller',
      zIndex: 1,
      swipe: false,
      responsive: [
        {
          breakpoint: 1378,
          settings: {
            swipe: true,
            speed: 300,
          }
        },
      ]
    });
  });
}
