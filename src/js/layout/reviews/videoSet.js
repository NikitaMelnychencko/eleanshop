import set from '../../../../src/js/json/videoSet.json';
import setHbs from '../../../../src/views/partials/reviews/videoSet.hbs';
import starClients_cardChatReviewsTempl from '../../../views/components/cardChatReviews.hbs';
import starClients_reviewsChat from '../../json/homeRewiesChat/homeReviewsChat.json';
import pageStarClientsSliderData from '../../json/starClients.json';
import pageStarClientsMarkupTemplate from '../../../views/partials/home/starClients.hbs';
// 1. Содание разметки сета
const cardChatReviewsMarkup = starClients_cardChatReviewsTempl(starClients_reviewsChat);
export const clientStar = pageStarClientsMarkupTemplate({
  pageStarClientsSliderData,
  cardChatReviewsMarkup,
});
export const setVideoHbs = setHbs(set);

export function videosetSlickSettings() {
  window.jQuery = window.$ = require('jquery');
  require('../../slider/slick.min.js');
  // Slider options
  $(document).ready(function () {
    $('.videoset').slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      mobileFirst: true,
      dots: true,
      // centerPadding: '40px',
      // variableWidth: true,
      lazyLoad: 'progressive',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1377,
          settings: {
            slidesToShow: 4,
            // centerPadding: '40px',
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
  const reviewsRefs = {
    play: document.querySelectorAll('.video-set-svg'),
    video: document.querySelectorAll('.video-set__image'),
    fullscreen: document.querySelectorAll('.video-set-fullscreen'),
    link: document.querySelector('.videoset'),
  };

  reviewsRefs.play.forEach((element, index) => {
    element.addEventListener('click', el => {
      reviewsRefs.video[index].play();
    });
    reviewsRefs.video[index].addEventListener('click', ez => {
      reviewsRefs.video[index].pause();
    });
    reviewsRefs.fullscreen[index].addEventListener('click', ez => {
      if (reviewsRefs.video[index].requestFullscreen) {
        reviewsRefs.video[index].requestFullscreen();
      } else if (reviewsRefs.video[index].mozRequestFullScreen) {
        /* Firefox */
        reviewsRefs.video[index].mozRequestFullScreen();
      } else if (reviewsRefs.video[index].webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        reviewsRefs.video[index].webkitRequestFullscreen();
      } else if (reviewsRefs.video[index].msRequestFullscreen) {
        /* IE/Edge */
        reviewsRefs.video[index].msRequestFullscreen();
      }
    });
  });
  reviewsRefs.video.forEach((videos, index) => {
    videos.addEventListener('play', ez => {
      reviewsRefs.play[index].style.display = 'none';
      reviewsRefs.fullscreen[index].style.display = 'block';
    });
    videos.addEventListener('pause', ez => {
      reviewsRefs.play[index].style.display = 'block';
      reviewsRefs.fullscreen[index].style.display = 'none';
    });
  });
}
