import ProductModalAddToCart from '../layout/product/productModalAddToCart.js';

const obj = new ProductModalAddToCart({
  root: 'main', // селектор тега, куда вставится модалка
  typeInsert: 'beforeEnd',
  productName: 'ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ',
  callback: null, // функция, выполняется при нажатии на кнопку "перейти к оформлению" передать сюда или в классе изменить функцию   _setCallbackEvent
}); // передается название товара и колбек для кнопки оформления
// document.querySelector('main').insertAdjacentHTML('beforeEnd', obj.getMarkup()); //  если в конструктор не передан параметр root

obj.setSlider();
obj.show(); // показати модальне вікно
