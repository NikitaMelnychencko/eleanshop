const $ = require('jquery');
require('../slider/slick.min');

export function addHeroSlider() {
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
  })
}

export function addStarClientsSlider() {
  $(document).ready(function () {
    $('.star-clients__slider').slick({
      arrows: false,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      easing: 'ease',
      infinite: true,
      initialSlide: 1,
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
            arrows: true,
            dots: true,
          },
        },
      ],
     });
  })
}
 
export function addInstagramSlider() {
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
  })
}
    
export function addShowroomSlider() {
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
          breakpoint: 720,
          settings: {
            dots: false,
          },
        },
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
            initialSlide: 0,
            slidesToShow: 3,
          },
        },
      ],
    });
  })
}
    
export function setProductSlider() {
  $(document).ready(function () {
    $('.product-slider-smaller').slick({
      arrows: false,
      speed: 100,
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
      speed: 100,
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
          }
        },
      ]
    });
  });
}

export function videosetSlickSettings() {
  $(document).ready(function () {
    $('.videoset').slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      mobileFirst: true,
      dots: true,
      lazyLoad: 'progressive',
      variableWidth: true,
    });
  });
}

export function openVideoSlider() {
  $(document).ready(function () {
    $('.slider').slick({
      infinite: true,
      centerMode: true,
      // slidesToShow: 3,
      // slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      arrows: false,
      swipe: true,
      mobileFirst: true,
      dots: true,
      lazyLoad: 'progressive',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1377,
            settings: {
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: true,
            autoplay: true,
            autoPlaySpeed: 2000,
            pauseFocus: true,
            pauseHover: true,
            pauseOnDotsHover: true,
            swipe: true,
          },
        },
      ],
    });
  });
}
