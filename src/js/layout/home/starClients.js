import starClients_cardChatReviewsTempl from '../../../views/components/cardChatReviews.hbs';
import { getArr } from '../../call-list/home';
import { getSection } from '../../data/firebase_Servise';
export function starClientsSlider() {
  window.jQuery = window.$ = require('jquery');
  require('../../slider/slick.min.js');
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
}

export function starClientsComments() {
  // starClients & comments

  //refs
  const reviewsChatList = document.querySelector('.reviews-chat__list');
  const showMoreButtonEl = document.querySelector('.js-watch-all-button');
  const showLessButtonEl = document.querySelector('.button-up');

  //button show more
  showMoreButtonEl.addEventListener('click', onButtonShowMoreClick);
  let factor = 1;
  function onButtonShowMoreClick(event) {
    getSection('components/userReviews').then(vel => {
      const arr = getArr(vel);
      const value = arr.slice(4 + factor, 14 + factor);
      if (value.length > 0) {
        renderNewMarkup(value);
      } else {
        renderNewMarkup(arr.slice(4 + factor, arr.length));
      }
      factor = factor + 10;
    });

    btnShowLessChangeDisplay('block');
    showLessButtonEl.addEventListener('click', onButtonShowLess);
  }
  function renderNewMarkup(listData) {
    const chatReviewsNewListMarkup = starClients_cardChatReviewsTempl(listData);
    reviewsChatList.insertAdjacentHTML('beforeend', chatReviewsNewListMarkup);
  }
  function deleteMarkup(parentElement) {
    const arr = [];
    for (let index = 0; index < 4; index++) {
      arr.push(parentElement.children[index]);
    }
    parentElement.innerHTML = '';
    arr.forEach(el => reviewsChatList.insertAdjacentElement('beforeend', el));
  }
  function btnShowLessChangeDisplay(style) {
    showLessButtonEl.style.display = style;
  }

  //button showLess
  function onButtonShowLess(event) {
    deleteMarkup(reviewsChatList);
    btnShowLessChangeDisplay('none');
    event.target.removeEventListener('click', onButtonShowLess);
    factor = 1;
  }
}
