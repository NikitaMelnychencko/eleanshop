import ordering_ordering from '../../../views/partials/checkout/ordering.hbs'
import payment_checkout from '../../../views/layouts/checkout.hbs'
import refs from '../../refs/refs.js'
console.log(refs.incrementBtn)
const ordering = ordering_ordering();
const createCheckout = payment_checkout({ ordering })
refs.main.insertAdjacentHTML('beforeend', createCheckout);

// const { incrementBtn, decrementBtn, orderingValueEl } = refs;

// const decrementBtn = document.querySelector('.ordering__btn--minus');
// const incrementBtn = document.querySelector('.ordering__btn--plus');
// const orderingValueEl = document.querySelector('.ordering__value');
// const priceValue = document.querySelector('.ordering__price');
// const totalPrice = document.querySelector('.ordering__totalprice');

const cards = document.querySelector('.ordering__cards');

cards.addEventListener('click', setQuantityOrRemove);

 
function setQuantityOrRemove(e) {

    if (e.target.classList.contains('ordering__btn--plus')) {
        orderingIncrement(e);
    }    
     else if (e.target.classList.contains('ordering__btn--minus')) {
        orderingDecrement(e)        
    } 
    else if (e.target.classList.contains('ordering__close')) {
        removeOrderingCard(e)
    }  
}

function orderingIncrement(e) {
    let value = e.target.previousElementSibling.textContent;

    e.target.previousElementSibling.textContent = Number(value) + 1;
}

function orderingDecrement(e) {
         let value = e.target.nextElementSibling.textContent;
        if(Number(value) > 0){
         e.target.nextElementSibling.textContent = Number(value) - 1;  
         }
}

function removeOrderingCard(e) {
    const arr = e.currentTarget.children
for (let i = 0; i <= arr.length; i += 1){
    if (arr[i].contains(e.target)) {
        e.currentTarget.removeChild(arr[i]);
    }
}
}
