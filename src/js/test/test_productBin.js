import ProductBin from '../layout/product/productBin.js';

const objBin = new ProductBin({ root: '.header-container' });
// obj.getMarkup()   // разметка
// obj.initialBin(); //встановлення слухачів для кнопок

// событие на кнопку "Корзина"
const binBtnRef = document.querySelector('.js-bin');
binBtnRef.addEventListener('click', () => {
  objBin.show();
});
