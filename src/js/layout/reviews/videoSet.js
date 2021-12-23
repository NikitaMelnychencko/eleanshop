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
      responsive: [
        {
          breakpoint: 1377,
          settings: {
            slidesToShow: 4,
            infinite: false,
            dots: false,
            infinite: false,
            centerMode: false,
            variableWidth: false,
          },
        },
      ],
    });
  });
}
