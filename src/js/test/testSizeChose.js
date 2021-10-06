import sizeChose from '../components/sizeChose.js';
import size from '../json/sizeChose.json';

const {createMarkup, sizeListener, createBtn} = sizeChose;

 const body = document.querySelector('body');
//body.insertAdjacentHTML('beforebegin', '<button data-modal-open>!!!!!!!BUTTON ON MODAL Size Chose !!!!!!</button>');
 
 const btnRef = document.querySelector('[data-modal-open]');
//btnRef.addEventListener('click', onBtnClick);

import getRefs from '../refs/refs.js';
import Backdrop from '../components/backdrop.js';
import backdropMarkupTempl from '../../views/components/backdrop.hbs';
let throttle = require('lodash.throttle');

function onBtnClick(event) {
  const backdropRef = document.querySelector('[data-modal]');
  const { mainEL } = getRefs;
  if (backdropRef === null) {
    const modalFormMarkup = createMarkup(createBtn(size));
    const backdropMarkup = backdropMarkupTempl(modalFormMarkup);

    mainEL.insertAdjacentHTML('beforeend', backdropMarkup);
    sizeListener();

    window.addEventListener('resize', throttle(onResize, 50));
  }
  const backdrop = new Backdrop();
  onResize();
}
function onResize(event) {
  let backdropRef = document.querySelector('[data-modal]');
  const right = (backdropRef.clientWidth - backdropRef.children[0].children[1].offsetWidth) / 2;
  const btnCloseRef = document.querySelector('.form__button-сlose');
  btnCloseRef.style.right = `${right}px`;
}
