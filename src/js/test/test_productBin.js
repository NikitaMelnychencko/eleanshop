import ProductBin from '../layout/product/productBin.js';

const objBin = new ProductBin({ root: '.header-container' });

// event on the "Cart" button
const binBtnRef = document.querySelector('.js-bin');
binBtnRef.addEventListener('click', () => {
  objBin.show();
});
