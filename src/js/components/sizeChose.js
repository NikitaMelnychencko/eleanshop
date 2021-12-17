import createMarkup from '../../views/components/sizeChose.hbs';
import Backdrop from '../components/backdrop.js';
import refs from '../refs/refs';


function onSizeElClick(evt) {
  const isLabel = event.target.classList.contains('size-chose__label');
    if (!isLabel) {
      return
    }
    const inputSize = event.target.previousElementSibling.value;
    sendingValue(Number(inputSize));
}


//function for creating dice of clothing sizes
function createBtn(json) {
  const incomeArray = json.productAviable[0].aviableSize
  const sizeArray = ["40", "42", "44", "46", "48", "50"]

  const newArray = [];
  sizeArray.sort((a, b) => Number(a) - Number(b))
    .map(value => {
      if (incomeArray.includes(value)) {
        newArray.push(
          `<input class="size-chose__input" type="radio" id="sizeChoice${value}" name="sizeChoice" value=${value} required="">
          <label class="size-chose__label" for="sizeChoice${value}">${value}</label>`
          ,
        );
      } else {
        newArray.push(
          `<input disabled class="size-chose__input" type="radio" id="sizeChoice${value}" name="sizeChoice" value=${value} required="">
          <label class="size-chose__label size-chose__label--disabled" for="sizeChoice${value}">${value}</label>
          `,
        );
      }
      function sendingValue(value) {
        save(`productSize`, value);
        const backdrop = new Backdrop().closeModalForm();
      }
    });
  return newArray;
}
//function that returns a string with the size on the card that you selected
function sendingValue(value) {
  save(`productSize`, value);
  const backdrop = new Backdrop().closeModalForm();
}
//function writes the selected size to productSize in localStorage
function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
}
export default { createMarkup, onSizeElClick, createBtn};
