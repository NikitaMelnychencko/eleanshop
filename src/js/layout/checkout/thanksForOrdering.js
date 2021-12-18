import getRefs from '../../refs/refs.js';
import Backdrop from '../../components/backdrop.js';
import backdropMarkupTempl from '../../../views/components/backdrop.hbs';
import modalFormMarkupTempl from '../../../views/components/thanksForOrdering.hbs';
import { homeRender } from '../../call-list.js';
import { scrollTo } from '../../components/scrollTo';
import { bodyFixPosition, bodyUnfixPosition } from '../../components/scroll/scroll';
let throttle = require('lodash.throttle');
export const modalFormMarkup = modalFormMarkupTempl();
// export const backdropMarkup = backdropMarkupTempl(modalFormMarkup);

// export function onBtnClick() {
//   const backdropRef = document.querySelector('[data-modal]');
//   window.addEventListener('resize', throttle(onResize, 50));
//   const backdrop = new Backdrop();

//   onResize();
// }

export function onResize(event) {
  const btnCloseRef = document.querySelector('.form__button-сlose');
  const btnСontinueShopping = document.querySelector('.ordering__btn-continue');
  btnСontinueShopping.addEventListener('click', e => {
    homeRender();
    bodyUnfixPosition();
    scrollTo(0, 700);
  });
}
