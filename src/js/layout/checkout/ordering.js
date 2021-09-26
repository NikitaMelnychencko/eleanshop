import ordering_ordering from '../../../views/partials/checkout/ordering.hbs'
import payment_checkout from '../../../views/layouts/checkout.hbs'
import refs from '../../refs/refs.js'
console.log(refs.incrementBtn)
const ordering = ordering_ordering();
const createCheckout = payment_checkout({ ordering })
refs.main.insertAdjacentHTML('beforeend', createCheckout);

// const { incrementBtn, decrementBtn, orderingValueEl } = refs;

const decrementBtn = document.querySelector('.ordering__btn--minus');
const incrementBtn = document.querySelector('.ordering__btn--plus');
const orderingValueEl = document.querySelector('.ordering__value');
const priceValue = document.querySelector('.ordering__price');
const totalPrice = document.querySelector('.ordering__totalprice');
const cards = document.querySelector('.ordering__cards');

cards.addEventListener('click', setQuantity);

 
function setQuantity(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
    
    if (e.target.classList.contains('ordering__btn--plus')) {
     let value = e.target.previousElementSibling.textContent;
   
        e.target.previousElementSibling.textContent = Number(value) + 1; 
    }
    else
     if (e.target.classList.contains('ordering__btn--minus')) {
     let value = e.target.nextElementSibling.textContent;
        if(Number(value) > 0){
         e.target.nextElementSibling.textContent = Number(value) - 1;  
    }}
}


