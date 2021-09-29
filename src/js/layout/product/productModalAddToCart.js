import RecomendationsCategory from './recomendationsCategory.js';
import modalAddToCartMark from '../../../views/partials/product/productModalAddToCart.hbs';

export default class ProductModalAddToCart {
  constructor(productName) {
    this.productName = productName;
    this.objCatalog = new RecomendationsCategory({ countsCard: 3, buttonPagination: false });
  }

  _createMarkup() {
    console.log({
      productName: this.productName,
      block: this.objCatalog.getListMarkup(),
    });
    return modalAddToCartMark({
      product: this.productName,
      block: this.objCatalog.getListMarkup(),
    });
  }

  getMarkup() {
    return this._createMarkup();
  }

  setSlider() {
    this.objCatalog.setSlider();
  }
}
