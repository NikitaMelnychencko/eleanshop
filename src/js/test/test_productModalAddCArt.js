import ProductModalAddToCart from '../layout/product/productModalAddToCart.js';

const obj = new ProductModalAddToCart('ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ');
console.log(obj.getMarkup());
document.querySelector('main').insertAdjacentHTML('beforeEnd', obj.getMarkup());
obj.setSlider();
