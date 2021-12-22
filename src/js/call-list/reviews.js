import refs from '../refs/refs.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { Forms } from '../components/forms';
import { blockHelpRender } from './help';
import { getArr } from './home.js';
//==hbs==
import reviews_page from '../../views/layouts/reviews.hbs';
import setHbs from '../../../src/views/partials/reviews/videoSet.hbs';
import starClients_cardChatReviewsTempl from '../../views/components/cardChatReviews.hbs';
import pageStarClientsMarkupTemplate from '../../views/partials/home/starClients.hbs';
//==js==
import { VideoSetPlayer } from '../components/videoSetPlayer.js';
import { starClientsSlider, starClientsComments } from '../layout/home/starClients.js';
import { videosetSlickSettings } from '../layout/reviews/videoSet.js';

export function reviewsRender() {
  const formReviews = new Forms('reviews');
  const formReviewsMarkUp = formReviews.insertForm();
  const videoSetPlayer = new VideoSetPlayer();
  const initFetchSection = new FetchSection({
    firstParam: 'components',
  });
  const reviewsData = initFetchSection._state;
  reviewsData.then(data => {
    const cardChatReviewsMarkup = starClients_cardChatReviewsTempl(
      getArr(data.userReviews).slice(0, 4),
    );
    const pageStarClientsSliderData = data.starClients;
    const clientStar = pageStarClientsMarkupTemplate({
      pageStarClientsSliderData,
      cardChatReviewsMarkup,
    });
    const setVideoHbs = setHbs(data.videoFitting);
    const initFooter = new classBody();
    const reviewsMarkUp = reviews_page({ setVideoHbs, clientStar, formReviewsMarkUp });
    refs.mainEL.innerHTML = reviewsMarkUp;
    videosetSlickSettings();
    starClientsSlider();
    starClientsComments();
    videoSetPlayer.clickListener();
    blockHelpRender();
    formReviews.init();
  });
}
