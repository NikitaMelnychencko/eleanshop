import ProductBin from '../layout/product/productBin.js';

const objBin = new ProductBin({});
console.log(objBin);
// event on the "Cart" button
const binBtnRef = document.querySelector('.js-bin');
binBtnRef.addEventListener('click', () => {
  objBin.show();
});
