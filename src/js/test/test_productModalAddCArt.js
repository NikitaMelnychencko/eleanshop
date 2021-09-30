import ProductModalAddToCart from '../layout/product/productModalAddToCart.js';

const obj = new ProductModalAddToCart({
  root: 'main', // селектор тега, куда вставится модалка
  //   root: '[data-modal]'; // если вставить в бекдроп
  typeInsert: 'beforeEnd',
  productName: 'ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ',
}); // передается название товара и колбек для кнопки оформления

obj.show(); // показати модальне вікно - викликати в слухачі на кнопці

// document.querySelector('main').insertAdjacentHTML('beforeEnd', obj.getMarkup()); //  если в конструктор не передан параметр root
// obj.setSlider();
