import HandSewn from '../layout/product/productHandSewn.js';

const obj = new HandSewn({
  root: 'main', // селектор элемента, в который вставится секция
  typeInsert: 'beforeEnd',
  modalNext: null, // селектор модалки, которая вызывается при нажатии на кнопку
  classModalNext: 'is-hidden', // класс, который прячет модалку
  backdrop: '[data-modal]',
  classBackdrop: 'is-hidden',
});
