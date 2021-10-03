import refs from '../../refs/refs.js'
import set from '../../../../src/js/json/videoSet.json';
import setHbs from "../../../../src/views/partials/reviews/videoSet.hbs";
 import client from "../../../../src/views/partials/home/starClients.hbs"
import setReviews from "../../../../src/views/partials/reviews/pageReviews.hbs";

import starClients_starClientsTempl from '../../../views/partials/home/starClients.hbs';
import starClients_cardChatReviewsTempl from '../../../views/components/cardChatReviews.hbs';
import starClients_reviewsChat from '../../json/homeRewiesChat/homeReviewsChat.json';
import starClients_reviewsChatOthers from '../../json/homeRewiesChat/homeReviewsChatOthers.json';
import pageStarClientsSliderData from '../../json/starClients.json';
import pageStarClientsMarkupTemplate from '../../../views/partials/home/starClients.hbs';

const cardChatReviewsMarkup = starClients_cardChatReviewsTempl(starClients_reviewsChat);
const starClientsSectionMarkup = starClients_starClientsTempl({ cardChatReviewsMarkup });
const clientStar = pageStarClientsMarkupTemplate({
  pageStarClientsSliderData,
  cardChatReviewsMarkup,
});



const { mainEL} = refs;

// 1. Содание разметки сета
const setVideoHbs = setHbs(set)

const pageReviews = setReviews({ clientStar, setVideoHbs });
  
mainEL.insertAdjacentHTML('beforeend', pageReviews);

$('.videoset').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  mobileFirst: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1377,
      settings: {
        slidesToShow: 4,
        centerPadding: '40px',
        infinite: false,
        dots: false,
      }
    }]
});

