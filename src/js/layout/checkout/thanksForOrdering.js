import modalFormMarkupTempl from '../../../views/components/thanksForOrdering.hbs';
import { homeRender } from '../../call-list/home.js';
import { scrollTo } from '../../components/scrollTo';
import { bodyUnfixPosition } from '../../components/scroll/scroll';
let throttle = require('lodash.throttle');
export const modalFormMarkup = modalFormMarkupTempl();

export function onResize(event) {
  const btnСontinueShopping = document.querySelector('.ordering__btn-continue');
  btnСontinueShopping.addEventListener('click', e => {
    bodyUnfixPosition();
    homeRender();
    scrollTo(0, 700);
  });
}
