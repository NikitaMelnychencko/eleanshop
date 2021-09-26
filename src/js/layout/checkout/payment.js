import payment_payment from '../../../views/partials/checkout/payment.hbs'
import payment_checkout from '../../../views/layouts/checkout.hbs'
import refs from '../../refs/refs.js'

const createPayment = payment_payment()
const createCheckout = payment_checkout({ createPayment })
refs.main.insertAdjacentHTML('beforeend', createCheckout)