import 'animate.css';

export function showroomSlider() {
  window.jQuery = window.$ = require('jquery');
  require('../../slider/slick.min.js');
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
  });
}
