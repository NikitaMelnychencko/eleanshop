// console.log('Hello world');
import preorderModal from '../../../views/components/preorderModal.hbs';
import orderForm from '../../../views/components/orderForm.hbs';
import refs from '../../refs/refs';
    
const { mainEL } = refs;
// create content for Pre-order Modal which placed at Body (for example)

mainEL.insertAdjacentHTML('beforeend', preorderModal({orderForm}));

//const
const preoderBackdrop = document.querySelector('.preoder__backdrop');
const buttonCloseModal = document.querySelector('.preoder__close-button');
const preoderModal = document.querySelector('.preorder');
const orderFormEl = preoderModal.querySelector('.order-form');
const clientNameInput = preoderModal.querySelector('#client-name');
const clientPhoneInput = preoderModal.querySelector('#client-tel');
const clientMailInput = preoderModal.querySelector('#client-email');
const clientCommentInput = preoderModal.querySelector('#client-comments');
const orderChekbox = preoderModal.querySelector('.agreement__checkbox');
const submitButton = preoderModal.querySelector('.order-form__button');
const sizeList = preoderModal.querySelector('.sizes__list');
const checkedSizeInputs = sizeList.querySelectorAll('.sizes__input');
const checkedSizeInput = sizeList.querySelector('.sizes__input');

//open modal
/* const buttonOpenModal = document.querySelector() */
/* buttonOpenModal.addEventListener('click', onButtonOpenModalClick) */
buttonCloseModal.addEventListener('click', onButtonCloseModalClick);
sizeList.addEventListener('click', onSizeListItemClick);
submitButton.addEventListener('click', onButtonSubmitClick);
/* function onButtonOpenModalClick(event){
    preoderBackdrop.classList.add('is-visible');
   buttonCloseModal.addEventListener('click', onButtonCloseModalClick);
sizeList.addEventListener('click', onSizeListItemClick);
submitButton.addEventListener('click', onButtonSubmitClick);

} */
//close modal

function onButtonCloseModalClick(event){
    preoderBackdrop.classList.remove('is-visible');
     /* buttonCloseModal.removeEventListener('click', onButtonCloseModalClick); */
    /* sizeList.removeEventListener('click', onSizeListItemClick); */
    /* submitButton.removeEventListener('click', onButtonSubmitClick); */
}

//on size-list label click, radio-input is checked

function onSizeListItemClick(event){
    if(event.target.nodeName !== 'LABEL'){return}
    console.log('it is label');
    const sizeInput = event.target.previousElementSibling;
    console.log(sizeInput.value);
    sizeInput.click();
   
    console.log(sizeInput.checked)
  
}

//on submit button click, set info into local storage

function onButtonSubmitClick(event){
if(clientNameInput.validity.valid && clientPhoneInput.validity.valid && clientMailInput.validity.valid && orderChekbox.validity.valid && checkedSizeInput.validity.valid){
event.preventDefault();
localStorage.setItem(clientNameInput.name, clientNameInput.value);
localStorage.setItem(clientPhoneInput.name, clientPhoneInput.value);
localStorage.setItem(clientMailInput.name, clientMailInput.value);
localStorage.setItem(clientCommentInput.name, clientCommentInput.value);
checkedSizeInputs.forEach(input =>{
    if(input.checked === true){
        localStorage.setItem(input.name, input.value);  
    }
})
}
}
