import ProductBin from '../layout/product/productBin.js';

const obj = new ProductBin({ root: 'main' });
// obj.getMarkup()   // разметка
obj.initialBin(); //встановлення слухачів для кнопок
