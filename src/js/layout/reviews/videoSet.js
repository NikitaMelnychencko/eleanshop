import refs from '../../refs/refs.js'
import set from '../../../../src/js/json/videoSet.json';
import setHbs from "../../../../src/views/partials/reviews/videoSet.hbs";
 import client from "../../../../src/views/partials/home/starClients.hbs"
import setReviews from "../../../../src/views/partials/reviews/pageReviews.hbs";

// import starClients_starClientsTempl1 from '../../../views/partials/home/starClients.hbs';
// import starClients_cardChatReviewsTempl1 from '../../../views/components/cardChatReviews.hbs';
// import starClients_reviewsChat1 from '../../json/homeRewiesChat/homeReviewsChat.json';
// import starClients_reviewsChatOthers1 from '../../json/homeRewiesChat/homeReviewsChatOthers.json';
// import pageStarClientsSliderData1 from '../../json/starClients.json';
// import pageStarClientsMarkupTemplate1 from '../../../views/partials/home/starClients.hbs';

// const cardChatReviewsMarkup = starClients_cardChatReviewsTempl(starClients_reviewsChat);
// const starClientsSectionMarkup = starClients_starClientsTempl({ cardChatReviewsMarkup });
// const clientStar = pageStarClientsMarkupTemplate({
//   pageStarClientsSliderData,
//   cardChatReviewsMarkup,
// });
// mainEL.insertAdjacentHTML('beforeend', pageStarClientsSliderMarkup);


const { mainEL} = refs;
// console.log(refs)
// 1. Содание разметки сета
const setVideoHbs = setHbs(set)
const clientStar = client({pageStarClientsSliderMarkup});
const pageReviews = setReviews({ clientStar, setVideoHbs });
  
mainEL.insertAdjacentHTML('beforeend', pageReviews);
// console.log(setVideoHbs)

// console.log(clientStar);
 console.log(pageReviews);



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

