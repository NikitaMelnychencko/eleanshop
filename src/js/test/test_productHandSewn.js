import HandSewn from '../layout/product/productHandSewn.js';

const objHandSewn = new HandSewn({
  // root: 'main', // element selector to insert the section into
  // typeInsert: 'beforeEnd',
  object: [
    {
      name: null, // a modal selector that is called when the button is clicked
      className: 'is-hidden', // the class that hides the modal
    },
    {
      name: '[data-modal]', // a backdrop selector that is called when the button is clicked
      className: 'is-hidden', // the class that hides the backdrop
    },
  ],
});

document.querySelector('main').insertAdjacentHTML('beforeEnd', objHandSewn.getMarkup());

objHandSewn.setEvent();
