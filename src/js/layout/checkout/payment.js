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
const formDay =document.querySelector('.showroom-method')
const delivery = document.querySelector('.delivery-method')
const payment = document.querySelector('.payment')
const infoEL = document.querySelector('.basic-information')
const arrInputInfo = infoEL.querySelectorAll('input')
const textareaInfo = infoEL.querySelectorAll('textarea')

delivery.addEventListener('click', event => {
  if (event.target.nodeName !== "INPUT") {
    return
  }
  if (event.target.value=== "Showroom"&&event.target.checked=== true) {
    formDay.classList.add('showroom-method--hide')
  } else {
    formDay.classList.remove('showroom-method--hide')
        
  }
  if (event.target.checked===true) {
    localStorage.setItem(`${event.target.name}`,`${event.target.value}`)
  }
})
payment.addEventListener('click', event => {
  if (event.target.nodeName !== "INPUT") {
    return
  }
  if (event.target.checked===true) {
    localStorage.setItem(`${event.target.name}`,`${event.target.value}`)
  }
})
arrInputInfo.forEach(elem => {
  elem .addEventListener('blur', event => {
    localStorage.setItem(`${event.target.name}`,`${event.target.value}`)
  })
})
textareaInfo.addEventListener('click', event => {
  localStorage.setItem(`${event.target.name}`,`${event.target.value}`)

})


class modalData{
  constructor({idInput,idList}) {
    this._refs = this._getRefs(idInput, idList)

    this._addEventInput()
    this._addEventList()

  }
  _getRefs(idInput,idList) {
    const refs = {
      input: document.getElementById(`${idInput}`),
      list: document.getElementById(`${idList}`),
     
    }
    return refs
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
      localStorage.setItem(`${this._refs.input.name}`,`${event.target.innerText}`)
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


