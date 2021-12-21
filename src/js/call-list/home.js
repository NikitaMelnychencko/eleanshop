import refs from './refs/refs.js';
import updateBin from './updateBin.js';
import { classBody } from './layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
updateBin();

//======home======//
import home from '../views/layouts/home.hbs';
import { pageHeroSliderMarkup, heroSlider } from './layout/home/hero.js';
import { pageShowroomSliderMarkup, showroomSlider } from './layout/home/ourShowRoom.js';
import {
  pageStarClientsSliderMarkup,
  starClientsSlider,
  starClientsComments,
} from './layout/home/starClients.js';
import { pageInInstagramSliderMarkup, instagramSlider } from './layout/home/inInstagram.js';
import { cardsMarkup, openContent } from './layout/home/content.js';
import { aboutTheBrand_parsing, openAboutTheBrand } from './layout/home/aboutTheBrand.js';
let homeData;
export function homeRender() {
  updateBin();
  const initFetchSection = new FetchSection({
    firstParam: 'home',
    secondParam: 'components',
  });
  homeData = initFetchSection._state;

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
  heroSlider();
  openContent();
  showroomSlider();
  starClientsSlider();
  starClientsComments();
  instagramSlider();
  blockHelpRender();
  openAboutTheBrand();
  formsForm.init();
}

homeRender(); //========================================================call
