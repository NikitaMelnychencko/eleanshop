import createMarkup from '../../views/components/sizeChose.hbs';
import Backdrop from '../components/backdrop.js';
import refs from '../refs/refs';
function sizeListener() {
  const btnSize = document.querySelector('.size-chose__size-list');
  btnSize.addEventListener('click', value => {
    if (value.target.nodeName === 'BUTTON') {
      sendingValue(value.target.textContent);
    }
  });
}
//function for creating dice of clothing sizes
function createBtn(json) {
  const Array = json.size
    //sort sizes in order
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
      function sendingValue(value) {
        save(`sizeClose`, value);
        const backdrop = new Backdrop().closeModalForm();
      }
      return array;
    });
  return Array;
}
//function that returns a string with the size on the card that you selected
function sendingValue(value) {
  save(`sizeClose`, value);
  const backdrop = new Backdrop().closeModalForm();
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
export default { createMarkup, sizeListener, createBtn };
