import RecomendationsCategory from '../layout/product/recomendationsCategory';
import cards from '../json/recomendationCategory.json';

const objRecomendationsCategory = new RecomendationsCategory({
  // root: 'main',
  // typeInsert: 'beforeEnd',
  data: cards,
});

document
  .querySelector('main')
  .insertAdjacentHTML('beforeEnd', objRecomendationsCategory.getMarkup());

// objRecomendationsCategory.getMarkup();
objRecomendationsCategory.setSlider();
