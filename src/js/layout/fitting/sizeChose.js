import getRefs from '../../refs/refs.js'
import Backdrop from '../../components/backdrop.js';
import backdropMarkupTempl from '../../../views/components/backdrop.hbs';
import modalFormMarkupTempl from '../../../views/partials/fitting/sizeChose.hbs';
import size from '../../json/sizeChose.json';
import createMarkup from '../../../views/partials/fitting/sizeChose.hbs';

let throttle = require('lodash.throttle');

function onBtnClick(id) {
  const backdropRef = document.querySelector('[data-modal]');
  const { mainEL } = getRefs;
  if (backdropRef === null) {
    const modalFormMarkup = modalFormMarkupTempl();
    const backdropMarkup = backdropMarkupTempl(createBtn(id));
 
    mainEL.insertAdjacentHTML('beforeend', backdropMarkup);
    window.addEventListener('resize', throttle(onResize, 50));

    const btnSize = document.querySelector('.size-chose__size-list');

    btnSize.addEventListener('click', value => {
      if (value.target.nodeName === 'BUTTON')
      {
        sendingValue(id, value.target.textContent);
      }
    });
  }
  const backdrop = new Backdrop();
  onResize();
}
function onResize(event) {
  let backdropRef = document.querySelector('[data-modal]');
  const right = (backdropRef.clientWidth - backdropRef.children[0].children[1].clientWidth) / 2;
  const btnCloseRef = document.querySelector('.form__button-сlose');
  btnCloseRef.style.right = `${right}px`;
}
//function for creating dice of clothing sizes
function createBtn(id) {
  const Array = size
    //find the selected object (item of clothing) in json and pull out an array of sizes
    .find(x => x.id === id)
    .size//sort sizes in order
    .sort((a, b) => Number(Object.keys(a)) - Number(Object.keys(b)))
    //create an array of dice sizes that are and are not
    .map(value => {
      const array = [];
      if (Object.values(value)[0]) {
        array.push(
          `<button class="size-chose__size-list-btn" type="button">${
            Object.keys(value)[0]
          }</button>`,
        );
      } else {
        array.push(
          `<button disabled class="size-chose__size-list-btn size-chose__disabled" type="button">${
            Object.keys(value)[0]
          }</button>`,
        );
      }
      return array;
    });
  return createMarkup(Array);
}
//function that returns a string with the size on the card that you selected
function sendingValue(id, value) {
  save(`sizeClose_id-${id}`, value);
  const backdrop = new Backdrop()
  .closeModalForm();
}
//function writes the selected size to sizeClose in localStorage
function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
}
export default {onBtnClick};