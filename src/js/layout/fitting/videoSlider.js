export function openVideoSlider() {
  //SLIDER SETTINGS
  $(document).ready(function () {
    $('.slider').slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
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
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: true,
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
