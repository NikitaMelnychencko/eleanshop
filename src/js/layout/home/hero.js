import pageHeroSliderData from '../../json/hero.json';
import pageHeroMarkupTemplate from '../../../views/partials/home/hero.hbs';
import refs from '../../refs/refs.js';
const { mainEL } = refs;

window.jQuery = window.$ = require('jquery');
require('../../slider/slick.min.js');

// Create Markup
const pageHeroSliderMarkup = pageHeroMarkupTemplate(pageHeroSliderData);
mainEL.insertAdjacentHTML('beforeend', pageHeroSliderMarkup);

// Slider options
$(document).ready(function () {
  $('.hero__slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 4,
    touchMove: true,
    waitForAnimate: true,

    responsive: [
      {
        breakpoint: 1377,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1378,
        settings: {
          mobileFirst: true,
        },
      },
    ],
  });
});
