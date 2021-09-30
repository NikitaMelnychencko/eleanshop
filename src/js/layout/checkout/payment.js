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

class modalData{
  constructor({idInput,idList}) {
    this._refs = this._getRefs(idInput, idList)

    this._addEventDelivery()
    this._addEventInput()
    this._addEventList()

  }
  _getRefs(idInput,idList) {
    const refs = {
      input: document.getElementById(`${idInput}`),
      list: document.getElementById(`${idList}`),
      formDay: document.querySelector('.showroom-method'),
      delivery : document.querySelector('.delivery-method')
    }
    return refs
  }
  _addEventDelivery() {
    this._refs.delivery.addEventListener('click', event => {
      if (event.target.nodeName !== "INPUT") {
        return
      }
      if (event.target.value=== "Showroom"&&event.target.checked=== true) {
        this._refs.formDay.classList.add('showroom-method--hide')
      } else {
        this._refs.formDay.classList.remove('showroom-method--hide')
        this._refs.input.value = ""
      }
    })
    
  }
  _addEventInput() {
    this._refs.input.addEventListener('click', event => {
      this._refs.list.classList.toggle("showroom-list--hide")
      document.body.classList.toggle("extra")
      
    })

  }
  _addEventList() {
    this._refs.list.addEventListener('click', event => {
      this._refs.input.value = event.target.innerText
      this._refs.list.classList.toggle("showroom-list--hide")
     })
  }

}

const inputTime = new modalData({
  idInput: "js-time",
  idList: "time-list",
  
})
const inputDay = new modalData({
  idInput: "js-day",
  idList: "day-list",
  
})


const deliveryMethod = document.querySelector('.delivery-method')

deliveryMethod.addEventListener('click')