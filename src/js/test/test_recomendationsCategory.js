import RecomendationsCategory from '../layout/product/recomendationsCategory.js';
import cards from '../json/recomendationCategory.json';

const objRecomendationsCategory = new RecomendationsCategory({
  root: 'main',
  typeInsert: 'beforeEnd',
  data: cards,
});
