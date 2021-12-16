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
  const incomeArray = json.productAviable[3].aviableSize
  const sizeArray = ["40", "42", "44", "46", "48", "50"]

  const newArray = [];
  sizeArray.sort((a, b) => Number(a) - Number(b))
    .map(value => {
      if (incomeArray.includes(value)) {
        newArray.push(
          `<button class="size-chose__size-list-btn" type="button">${
            value
          }</button>`,
        );
      } else {
        newArray.push(
          `<button disabled class="size-chose__size-list-btn size-chose__disabled" type="button">${
            value
          }</button>`,
        );
      }
      function sendingValue(value) {
        save(`sizeClose`, value);
        const backdrop = new Backdrop().closeModalForm();
      }
    });
  return newArray;
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
