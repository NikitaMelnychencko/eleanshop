import pageInInstagramSliderData from '../../json/inInstagram.json';
import pageInInstagramMarkupTemplate from '../../../views/partials/home/inInstagram.hbs';

import refs from '../../refs/refs.js';

const { mainEL } = refs;

window.jQuery = window.$ = require('jquery');
require('../../slider/slick.min.js');

// Create markup and render in html
const pageInInstagramSliderMarkup = pageInInstagramMarkupTemplate({ pageInInstagramSliderData });
mainEL.insertAdjacentHTML('beforeend', pageInInstagramSliderMarkup);

// Slider options
$(document).ready(function () {
  $('.in-instagram__slider').slick({
    arrows: false,
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
    mobileFirst: true,
    variableWidth: true,
  });
});
