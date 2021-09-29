import ProductModalAddToCart from '../layout/product/productModalAddToCart.js';

const obj = new ProductModalAddToCart({ productName: 'ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ', callback: null }); // передается название товара и колбек для кнопки оформления

document.querySelector('main').insertAdjacentHTML('beforeEnd', obj.getMarkup());
obj.setSlider();
obj.setCloseEvent();
obj.setCallbackEvent();
