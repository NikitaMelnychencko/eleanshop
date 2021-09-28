import ordering_ordering from '../../../views/partials/checkout/ordering.hbs'
import payment_checkout from '../../../views/layouts/checkout.hbs'
import refs from '../../refs/refs.js'
// import '../../../images/img/imagetest.png'
import promocodes from '../../json/promocode.json'

const ordering = ordering_ordering();
const createCheckout = payment_checkout({ ordering })
refs.main.insertAdjacentHTML('beforeend', createCheckout);

const orderingApplyBtn = document.querySelector('.ordering__btn--promocode');
const orderingPromocodeInput = document.querySelector('.ordering__input--promocode');
const orderingDiscount = document.querySelector('.ordering__discount--value');
const orderingTotal = document.querySelector('.ordering__total')
const cards = document.querySelector('.ordering__cards');

cards.addEventListener('click', setQuantityOrRemove);

function setQuantityOrRemove(e) {
    if (e.target.classList.contains('ordering__btn--plus')) {
        orderingIncrement(e);

        const cardsArray = e.currentTarget.children;
        for (let i = 0; i <= cardsArray.length; i += 1){
            if (cardsArray[i].contains(e.target)) {
                let priceSpan = cardsArray[i].querySelector('.ordering__price');
                let pricePerItem = priceSpan.innerHTML;
                let newValue = Number(e.target.previousElementSibling.textContent)
                let totalPricePerItem = Number(pricePerItem) / (newValue-1) + Number(pricePerItem);

                priceSpan.textContent = totalPricePerItem
            }
        }   
    }    
    else if (e.target.classList.contains('ordering__btn--minus')) {
        let checker = orderingDecrement(e);
        const cardsArrayDecr = e.currentTarget.children;
        
        for (let i = 0; i <= cardsArrayDecr.length; i += 1){
            if (cardsArrayDecr[i].contains(e.target)) {
                let priceSpan = cardsArrayDecr[i].querySelector('.ordering__price');
                
                let pricePerItem = priceSpan.innerHTML;

                let newValue = Number(e.target.nextElementSibling.textContent);
                  
                let totalPricePerItem = Number(pricePerItem) - Math.round(Number(pricePerItem) / (newValue+1));
                if (checker) {
                    priceSpan.textContent = totalPricePerItem;
                }
            }
        }         
    } 
    else if (e.target.classList.contains('ordering__close')) {
        removeOrderingCard(e);
    }  
}

function orderingIncrement(e) {
    let value = e.target.previousElementSibling.textContent;
    e.target.previousElementSibling.textContent = Number(value) + 1;
}

function orderingDecrement(e) {
         let value = e.target.nextElementSibling.textContent;
        if(Number(value) > 1){
            e.target.nextElementSibling.textContent = Number(value) - 1;
            return true;
        } else {
            return false;
        }
}

function removeOrderingCard(e) {
    const arr = e.currentTarget.children;
for (let i = 0; i <= arr.length; i += 1){
    if (arr[i].contains(e.target)) {
        e.currentTarget.removeChild(arr[i]);
    }
}
}

orderingApplyBtn.addEventListener('click', countTotalPrice)

function countTotalPrice(e) {
    e.preventDefault();
    let orderingPricesArray = document.querySelectorAll('.ordering__price')
    let orderingPrices = [...orderingPricesArray].reduce((totalPrices, orderingPricesArray) => totalPrices + Number(orderingPricesArray.innerHTML), 0);
    
    let discount = getDiscount();

    orderingDiscount.textContent = discount;
    orderingTotal.textContent = orderingPrices + discount;
   
}


function getDiscount() {
    let promocodeValue = orderingPromocodeInput.value;
    const gettingPromocodeObject = promocodes.find(promocode => promocode.value == promocodeValue);
     
    return gettingPromocodeObject.discount
}