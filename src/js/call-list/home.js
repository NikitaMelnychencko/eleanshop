import refs from '../refs/refs.js';
import updateBin from '../updateBin.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { Forms } from '../components/forms';
import { blockHelpRender } from './help';
import { browserCheck } from '../components/scroll/scroll.js';
//=hbs=
import home from '../../views/layouts/home.hbs';
import pageHeroMarkupTemplate from '../../views/partials/home/hero.hbs';
import pageShowroomMarkupTemplate from '../../views/partials/home/ourShowRoom.hbs';
import model from '../../views/partials/home/content.hbs';
import pageInInstagramMarkupTemplate from '../../views/partials/home/inInstagram.hbs';
import starClients_cardChatReviewsTempl from '../../views/components/cardChatReviews.hbs';
import pageStarClientsMarkupTemplate from '../../views/partials/home/starClients.hbs';
//=js=
import { heroSlider } from '../layout/home/hero.js';
import { showroomSlider } from '../layout/home/ourShowRoom.js';
import { starClientsSlider, starClientsComments } from '../layout/home/starClients.js';
import { instagramSlider } from '../layout/home/inInstagram.js';
import { openContent } from '../layout/home/content.js';
import { aboutTheBrand_parsing, openAboutTheBrand } from '../layout/home/aboutTheBrand.js';

export function homeRender() {
  const formsForm = new Forms('fittingForm');
  const formBrand = {
    form: formsForm.insertForm(),
  };
  const initFetchSection = new FetchSection({
    firstParam: 'home',
    secondParam: 'components',
  });
  const homeData = initFetchSection._state;

  homeData.then(data => {
    const pageHeroSliderMarkup = pageHeroMarkupTemplate(data[0].hero);
    const pageShowroomSliderMarkup = pageShowroomMarkupTemplate(data[1].ourShowroom);
    const cardsMarkup = model(data[0].content);
    const pageInInstagramSliderMarkup = pageInInstagramMarkupTemplate(data[1].inInstagram);
    const cardChatReviewsMarkup = starClients_cardChatReviewsTempl(
      getArr(data[1].userReviews).slice(0, 4),
    );
    const pageStarClientsSliderData = data[1].starClients;
    const pageStarClientsSliderMarkup = pageStarClientsMarkupTemplate({
      pageStarClientsSliderData,
      cardChatReviewsMarkup,
    });
    const initFooter = new classBody();
    const homeMarkup = home({
      pageHeroSliderMarkup,
      cardsMarkup,
      pageShowroomSliderMarkup,
      formBrand,
      pageStarClientsSliderMarkup,
      pageInInstagramSliderMarkup,
      aboutTheBrand_parsing,
    });
    refs.mainEL.innerHTML = homeMarkup;
    updateBin();
    heroSlider();
    openContent();
    showroomSlider();
    starClientsSlider();
    starClientsComments();
    instagramSlider();
    openAboutTheBrand();
    formsForm.init();
    blockHelpRender();
    browserCheck();
  });
}
homeRender(); //========================================================call
updateBin();

export function getArr(data) {
  let arr = [];
  for (const key in data) {
    arr.push(data[key]);
  }
  return arr;
}
