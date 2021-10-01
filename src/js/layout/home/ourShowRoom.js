import pageShowroomSliderData from '../../json/ourShowroom.json';
import pageShowroomMarkupTemplate from '../../../views/partials/home/ourShowRoom.hbs';

import refs from '../../refs/refs.js';

const { mainEL } = refs;

window.jQuery = window.$ = require('jquery');
require('../../slider/slick.min.js');

// Create markup and render in html
const pageShowroomSliderMarkup = pageShowroomMarkupTemplate({ pageShowroomSliderData });
mainEL.insertAdjacentHTML('beforeend', pageShowroomSliderMarkup);

// Slider options
$(document).ready(function () {
  $('.showroom__slider').slick({
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
