import getRefs from '../../refs/refs.js';
import Backdrop from '../../components/backdrop.js';
import backdropMarkupTempl from '../../../views/components/backdrop.hbs';
import modalFormMarkupTempl from '../../../views/components/thanksForOrdering.hbs';
import { homeRender } from '../../call-list.js';
import { scrollTo } from '../../components/scrollTo';
let throttle = require('lodash.throttle');
const modalFormMarkup = modalFormMarkupTempl();
export const backdropMarkup = backdropMarkupTempl(modalFormMarkup);
export function onBtnClick() {
  const backdropRef = document.querySelector('[data-modal]');
  window.addEventListener('resize', throttle(onResize, 50));
  const backdrop = new Backdrop();

  onResize();
}

function onResize(event) {
  let backdropRef = document.querySelector('[data-modal]');
  const right = (backdropRef.clientWidth - backdropRef.children[0].children[1].clientWidth) / 2;
  const btnCloseRef = document.querySelector('.form__button-сlose');
  const btnСontinueShopping = document.querySelector('.ordering__btn-continue');
  btnCloseRef.style.right = `${right}px`; +
  btnСontinueShopping.addEventListener('click', e => {
    homeRender();
    scrollTo(0, 700);
  })
}