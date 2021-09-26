import payment_payment from '../../../views/partials/checkout/payment.hbs'
import payment_checkout from '../../../views/layouts/checkout.hbs'
import refs from '../../refs/refs.js'
import '../../../images/img/checkout/payment/buyers.jpg'
import '../../../images/img/checkout/payment/buyers@2x.jpg'
import '../../../images/img/checkout/payment/mirror_reflection.jpg'
import '../../../images/img/checkout/payment/mirror_reflection@2x.jpg'
const createPayment = payment_payment()
const createCheckout = payment_checkout({ createPayment })
refs.main.insertAdjacentHTML('beforeend', createCheckout)