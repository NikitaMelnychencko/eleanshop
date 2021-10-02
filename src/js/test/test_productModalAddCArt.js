import ProductModalAddToCart from '../layout/product/productModalAddToCart.js';
console.log('--------------------------');
const objProductModalAddToCart = new ProductModalAddToCart({
  root: 'main', // селектор тега, куда вставится модалка
  //   root: '[data-modal]'; // если вставить в бекдроп
  typeInsert: 'beforeEnd',
  productName: 'ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ',
});

objProductModalAddToCart.getMarkup();
objProductModalAddToCart.setEvent();
console.log('PRODACT ADD');
objProductModalAddToCart.show('ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ'); // show modal window - call the listener on the button

// document.querySelector('main').insertAdjacentHTML('beforeEnd', obj.getMarkup()); //  если в конструктор не передан параметр root
// obj.setSlider();
