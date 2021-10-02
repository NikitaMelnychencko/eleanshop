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

    responsive: [
      {
        breakpoint: 1377,
        settings: {
          autoplay: false,
          infinite: false,
          autoplay: false,
          draggable: false,
          swipe: false,
          touchMove: false,
          dots: false,
          accessibility: false,
          // mobileFirst: false,
          // centerMode: true,
          // centerPadding: '60px',
        },
      },
    ],
    //centerMode: false, // center-mod
    //variableWidth: false, // side protrusion floor slide
    //rows: 1, // rows of sliders (2-3 or more photos at once)
    //slidesPerRow: 1, // number of slides in a row
    //vertical: false, // vertical slider (if true - turn off flex)
    //verticalSwiping: false, // vertical swipe manually
    //fade: false, // replaces flipping with a teleport)))
    // asNavFor: 'class-slider', // exchange of classes between sliders
    //mobileFirst: false, // ( true = 721px+ / false = +721px)
    //appendArrows:$('class-name'), // $('.class-name') move arrows
    //appendDots:$('class-name'), // $('.class-name') move points
    //responsive: [
    //  {
    //    breakpoint: 768,
    //    settings: {
    //      slidesToShow: 2,
    //    },
    //  },
    //],
  });
});
