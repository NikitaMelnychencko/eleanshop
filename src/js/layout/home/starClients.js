import starClients_starClientsTempl from '../../../views/partials/home/starClients.hbs';
import starClients_cardChatReviewsTempl from '../../../views/components/cardChatReviews.hbs';
import starClients_reviewsChat from '../../json/homeRewiesChat/homeReviewsChat.json';
import starClients_reviewsChatOthers from '../../json/homeRewiesChat/homeReviewsChatOthers.json';
import pageStarClientsSliderData from '../../json/starClients.json';
import pageStarClientsMarkupTemplate from '../../../views/partials/home/starClients.hbs';

import refs from '../../refs/refs.js';

const { mainEL } = refs;

window.jQuery = window.$ = require('jquery');
require('../../slider/slick.min.js');

// Create markup and render in html
const cardChatReviewsMarkup = starClients_cardChatReviewsTempl(starClients_reviewsChat);
const starClientsSectionMarkup = starClients_starClientsTempl({ cardChatReviewsMarkup });
const pageStarClientsSliderMarkup = pageStarClientsMarkupTemplate({
  pageStarClientsSliderData,
  cardChatReviewsMarkup,
});
mainEL.insertAdjacentHTML('beforeend', pageStarClientsSliderMarkup);

// Slider options
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
});

// starClients & comments

//refs
const reviewsChatList = document.querySelector('.reviews-chat__list');
const showMoreButtonEl = document.querySelector('.js-watch-all-button');
const showLessButtonEl = document.querySelector('.button-up');

//button show more
showMoreButtonEl.addEventListener('click', onButtonShowMoreClick);

function onButtonShowMoreClick(event) {
  renderNewMarkup(starClients_reviewsChatOthers);
  btnShowLessChangeDisplay('block');
  showLessButtonEl.addEventListener('click', onButtonShowLess);
}
function renderNewMarkup(listData) {
  const chatReviewsNewListMarkup = starClients_cardChatReviewsTempl(listData);
  reviewsChatList.insertAdjacentHTML('beforeend', chatReviewsNewListMarkup);
}
function deleteMarkup(parentElement) {
  parentElement.innerHTML = '';
}
function btnShowLessChangeDisplay(style) {
  showLessButtonEl.style.display = style;
}

//button showLess
function onButtonShowLess(event) {
  deleteMarkup(reviewsChatList);
  renderNewMarkup(starClients_reviewsChat);
  btnShowLessChangeDisplay('none');
  event.target.removeEventListener('click', onButtonShowLess);
}
