import RecomendationsCategory from '../layout/product/recomendationsCategory';
import cards from '../json/recomendationCategory.json';

const objRecomendationsCategory = new RecomendationsCategory({
  // root: 'main',
  // typeInsert: 'beforeEnd',
  data: cards.filter((el, idx) => idx <= 3),
});

objRecomendationsCategory.getMarkup();

objRecomendationsCategory.setSlider();
