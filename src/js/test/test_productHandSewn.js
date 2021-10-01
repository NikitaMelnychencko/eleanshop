import HandSewn from '../layout/product/productHandSewn.js';

const obj = new HandSewn({
  root: 'main', // element selector to insert the section into
  typeInsert: 'beforeEnd',
  modalNext: null, // a modal selector that is called when the button is clicked
  classModalNext: 'is-hidden', // the class that hides the modal
  backdrop: '[data-modal]',
  classBackdrop: 'is-hidden',
});
