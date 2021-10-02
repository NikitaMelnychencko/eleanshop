import ProductModalAddToCart from '../layout/product/productModalAddToCart.js';

const objProductModalAddToCart = new ProductModalAddToCart({
  // root: 'main', // селектор тега, куда вставится модалка
  // //   root: '[data-modal]'; // если вставить в бекдроп
  // typeInsert: 'beforeEnd',
  productName: 'ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ',
});

document
  .querySelector('main')
  .insertAdjacentHTML('beforeEnd', objProductModalAddToCart.getMarkup());
// objProductModalAddToCart.getMarkup();
objProductModalAddToCart.setSlider();
objProductModalAddToCart.setEvent();
objProductModalAddToCart.show('ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ'); // show modal window - call the listener on the button

// document.querySelector('main').insertAdjacentHTML('beforeEnd', obj.getMarkup()); //  если в конструктор не передан параметр root
// obj.setSlider();
