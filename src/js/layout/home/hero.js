import '../../../images/img/page-hero/mobile/hero-title-01/hero-title-mobile-01.jpg';
import '../../../images/img/page-hero/mobile/hero-title-01/hero-title-mobile-01@2x.jpg';
import '../../../images/img/page-hero/mobile/hero-title-02/hero-title-mobile-02.jpg';
import '../../../images/img/page-hero/mobile/hero-title-02/hero-title-mobile-02@2x.jpg';
import '../../../images/img/page-hero/mobile/hero-title-03/hero-title-mobile-03.jpg';
import '../../../images/img/page-hero/mobile/hero-title-03/hero-title-mobile-03@2x.jpg';
import '../../../images/img/page-hero/mobile/hero-title-04/hero-title-mobile-04.jpg';
import '../../../images/img/page-hero/mobile/hero-title-04/hero-title-mobile-04@2x.jpg';
import '../../../images/img/page-hero/desktop/hero-title-01/hero-title-desktop-01.jpg';
import '../../../images/img/page-hero/desktop/hero-title-01/hero-title-desktop-01@2x.jpg';
import '../../../images/img/page-hero/desktop/hero-title-02/hero-title-desktop-02.jpg';
import '../../../images/img/page-hero/desktop/hero-title-02/hero-title-desktop-02@2x.jpg';
import '../../../images/img/page-hero/desktop/hero-title-03/hero-title-desktop-03.jpg';
import '../../../images/img/page-hero/desktop/hero-title-03/hero-title-desktop-03@2x.jpg';
import '../../../images/img/page-hero/desktop/hero-title-04/hero-title-desktop-04.jpg';
import '../../../images/img/page-hero/desktop/hero-title-04/hero-title-desktop-04@2x.jpg';
import '../../../images/svg/hero-svg-original/hero-arrow-left.svg';
import '../../../images/svg/hero-svg-original/hero-arrow-right.svg';
import '../../../images/svg/clients-svg-original/clients-arrow-right.svg';
import '../../../images/svg/clients-svg-original/clients-arrow-right.svg';

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
    dots: true, // dots
    adaptiveHeight: true, // height adaptation
    slidesToShow: 1, // how many sliders are active
    slidesToScroll: 1, // how much to scroll
    speed: 1000, // swiping speed
    easing: 'ease', // animation type
    infinite: true,
    initialSlide: 0, // which slide to start from
    autoplay: true, // auto play
    autoplaySpeed: 2000, // paging speed
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true, // pause when hovering by dots
    draggable: true, // disable swipe on PC
    swipe: true,
    touchThreshold: 4, // swipe triggered
    touchMove: true, // activation of the wheelbarrow
    waitForAnimate: true, // switching animation

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
  });
});
