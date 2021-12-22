function onSizeElClick(evt) {
  const isLabel = evt.target.classList.contains('size-chose__label');
  if (!isLabel) {
    return;
  }
  const inputSize = evt.target.previousElementSibling.value;
  saveToLS(Number(inputSize));
}

function createBtn() {
  const sizeArray = ['40', '42', '44', '46', '48', '50'];

  const newArray = [];
  sizeArray
    .sort((a, b) => Number(a) - Number(b))
    .map(value => {
      newArray.push(
        `<input class="size-chose__input" type="radio" id="sizeChoice${value}" name="sizeChoice" value=${value} required data-action="size-chose-input">
          <label class="size-chose__label" for="sizeChoice${value}" aria-label="${value}" data-action="size-chose-label">${value}</label>`,
      );
    });
  return newArray;
}

function saveToLS(value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem('productSize', serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
}
export default { onSizeElClick, createBtn };
