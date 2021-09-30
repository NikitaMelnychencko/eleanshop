import RecomendationsCategory from '../layout/product/recomendationsCategory.js';
import cards from '../json/recomendationCategory.json';

const obj = new RecomendationsCategory({
  root: 'main',
  typeInsert: 'beforeEnd',
  data: cards.filter((el, idx) => idx <= 3),
});
