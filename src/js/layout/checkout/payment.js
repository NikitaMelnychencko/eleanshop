import payment_payment from '../../../views/partials/checkout/payment.hbs'
import payment_checkout from '../../../views/layouts/checkout.hbs'
import method from '../../json/method.json'
import refs from '../../refs/refs.js'
import '../../../images/img/checkout/payment/buyers.jpg'
import '../../../images/img/checkout/payment/buyers@2x.jpg'
import '../../../images/img/checkout/payment/mirror_reflection.jpg'
import '../../../images/img/checkout/payment/mirror_reflection@2x.jpg'
import '../../../images/svg/murkup.svg'
import '../../../images/svg/murkup_arow.svg'

const createPayment = payment_payment({ method })
const createCheckout = payment_checkout({ createPayment })
refs.mainEL.insertAdjacentHTML('beforeend', createCheckout)

//const listDay = document.querySelector('.showroom-list')
const formDay = document.querySelector('.showroom-method')
const delivery = document.querySelector('.delivery-method')
delivery.addEventListener('click', event => {
  if (event.target.nodeName !== "INPUT") {
    return
  }
  console.dir(event.target.checked);
  if (event.target.value=== "Showroom"&&event.target.checked=== true) {
    formDay.classList.add('showroom-method--hide')
  } else {
    formDay.classList.remove('showroom-method--hide')
  }
})
formDay.addEventListener('click', event => {
  
  const lists = document.querySelector(`.${event.target.id}`)
  lists.classList.toggle("showroom-list--hide")
  document.body.classList.toggle("extra")
  
  
})
