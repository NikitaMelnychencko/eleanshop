import starClients_starClientsTempl from '../../../views/partials/home/starClients.hbs';
import starClients_cardChatReviewsTempl from '../../../views/components/cardChatReviews.hbs';
import starClients_reviewsChat from '../../json/homeRewiesChat/homeReviewsChat.json';
import starClients_reviewsChatOthers from '../../json/homeRewiesChat/homeReviewsChatOthers.json';
import pageStarClientsSliderData from '../../json/starClients.json';
import pageStarClientsMarkupTemplate from '../../../views/partials/home/starClients.hbs';

// Create markup and render in html
const cardChatReviewsMarkup = starClients_cardChatReviewsTempl(starClients_reviewsChat);
const starClientsSectionMarkup = starClients_starClientsTempl({ cardChatReviewsMarkup });
export const pageStarClientsSliderMarkup = pageStarClientsMarkupTemplate({
  pageStarClientsSliderData,
  cardChatReviewsMarkup,
});

export function starClientsComments() {
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
}
