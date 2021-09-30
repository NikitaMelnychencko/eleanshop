import ordering_ordering from '../../../views/partials/checkout/ordering.hbs'
import payment_checkout from '../../../views/layouts/checkout.hbs'
import refs from '../../refs/refs.js'
import '../../../images/img/white-suit.jpg'
import '../../../images/img/red-suit.jpg'
import promocodes from '../../json/promocode.json'
import orderingInsertion from '../../json/orderinginsertion.json'

localStorage.setItem('orderingData', JSON.stringify(orderingInsertion));
const savedData = localStorage.getItem('orderingData')
const parsedData = JSON.parse(savedData)
// console.log(parsedData)

const ordering = ordering_ordering({parsedData, orderingInsertion});

const createCheckout = payment_checkout({ ordering })
refs.mainEL.insertAdjacentHTML('beforeend', createCheckout);



const orderingApplyBtn = document.querySelector('.ordering__btn--promocode');
const orderingPromocodeInput = document.querySelector('.ordering__input--promocode');
const orderingDiscount = document.querySelector('.ordering__discount--value');
const orderingTotal = document.querySelector('.ordering__total')
const cards = document.querySelector('.ordering__cards');

window.onload = countTotalPrice()
cards.addEventListener('click', setQuantityOrRemove);
orderingApplyBtn.addEventListener('click', countTotalPriceWithDiscount);

function setQuantityOrRemove(e) {
//      if(e.target === undefined){
// return
// }
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
                renewTotalPriceWithDiscount()
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
                    renewTotalPriceWithDiscount()

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
        renewTotalPriceWithDiscount();
    }
    }    
}

function countTotalPrice(e) {
    let orderingPricesArray = document.querySelectorAll('.ordering__price');
    
    let orderingTotalPrice = [...orderingPricesArray].reduce((totalPrices, orderingPricesArray) => totalPrices + Number(orderingPricesArray.innerHTML), 0);

    orderingTotal.textContent = orderingTotalPrice;
    return orderingTotalPrice
}

function countTotalPriceWithDiscount(e) {
    e.preventDefault();
    const totalPrice = countTotalPrice();
    let discount = getDiscount();
    orderingDiscount.textContent = discount;
    orderingTotal.textContent = totalPrice - (totalPrice / 100 * discount);
}

function renewTotalPriceWithDiscount() {
    const totalPrice = countTotalPrice();
    let finalPrice = 0;
        const discountValue = Number(orderingDiscount.innerText);
        if (discountValue !== undefined) {
            finalPrice = totalPrice - (totalPrice / 100 * discountValue);
            orderingTotal.textContent = finalPrice;
        } else {
            finalPrice = totalPrice
            orderingTotal.textContent = finalPrice;
        }
    
    return finalPrice
}

function getDiscount() {
    let promocodeValue = orderingPromocodeInput.value;
    const gettingPromocodeObject = promocodes.find(promocode => promocode.value == promocodeValue);
     
    return gettingPromocodeObject.discount
}

// в totalPrice лежит функция, которая возвращает итоговую стоимость
export const totalPrice =  renewTotalPriceWithDiscount.bind();
// console.log(totalPrice())


