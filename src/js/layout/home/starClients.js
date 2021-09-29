
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
    adaptiveHeight: true, // height adaptation
    slidesToShow: 1, // how many sliders are active
    slidesToScroll: 1, // how much to scroll
    speed: 1000, // swiping speed
    easing: 'ease', // animation type
    infinite: true,
    initialSlide: 1, // which slide to start from
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
