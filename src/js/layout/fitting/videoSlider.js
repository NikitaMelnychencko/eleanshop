import videoSlider from '../../../views/partials/fitting/videoSlider.hbs';
// import videoSlider_markupVideo from '../../../views/layouts/fitting.hbs';
import set from '../../../../src/js/json/videoSet.json';

// const menuEl = document.querySelector('main');
export const videoSlider_videoSliderCreate = videoSlider(set);
// export default videoSlider_videoSliderCreate;

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
