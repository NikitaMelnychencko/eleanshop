import set from '../../../../src/js/json/videoSet.json';
import setHbs from '../../../../src/views/partials/reviews/videoSet.hbs';
import starClients_cardChatReviewsTempl from '../../../views/components/cardChatReviews.hbs';
import starClients_reviewsChat from '../../json/homeRewiesChat/homeReviewsChat.json';
import pageStarClientsSliderData from '../../json/starClients.json';
import pageStarClientsMarkupTemplate from '../../../views/partials/home/starClients.hbs';
const cardChatReviewsMarkup = starClients_cardChatReviewsTempl(starClients_reviewsChat);
export const clientStar = pageStarClientsMarkupTemplate({
  pageStarClientsSliderData,
  cardChatReviewsMarkup,
});
export const setVideoHbs = setHbs(set);

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
}
