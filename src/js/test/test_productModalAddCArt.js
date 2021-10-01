import ProductModalAddToCart from '../layout/product/productModalAddToCart.js';

const objProductModalAddToCart = new ProductModalAddToCart({
  // root: 'main', // селектор тега, куда вставится модалка
  //   root: '[data-modal]'; // если вставить в бекдроп
  // typeInsert: 'beforeEnd',
  productName: 'ЖАКЕТ-СМОКИНГ С ЛАЦКАНМИ',
});

objProductModalAddToCart.getMarkup();
objProductModalAddToCart.setEvent();
objProductModalAddToCart.show(); // show modal window - call the listener on the button

// document.querySelector('main').insertAdjacentHTML('beforeEnd', obj.getMarkup()); //  если в конструктор не передан параметр root
// obj.setSlider();
