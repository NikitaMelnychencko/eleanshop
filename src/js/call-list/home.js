import refs from '../refs/refs.js';
import updateBin from '../updateBin.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { Forms } from '../components/forms';
import { blockHelpRender } from './help';
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

  homeData.then(el => {
    console.log(el[1].ourShowroom);
    const pageHeroSliderMarkup = pageHeroMarkupTemplate(el[0].hero);
    const pageShowroomSliderMarkup = pageShowroomMarkupTemplate(el[1].ourShowroom);
    const cardsMarkup = model(el[0].content);
    const pageInInstagramSliderMarkup = pageInInstagramMarkupTemplate(el[1].inInstagram);
    const cardChatReviewsMarkup = starClients_cardChatReviewsTempl(el[1].userReviews.slice(0, 4));
    const pageStarClientsSliderData = el[1].starClients;
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
  });

  //const pageHeroSliderMarkup = pageHeroMarkupTemplate();
}
homeRender(); //========================================================call
updateBin();
