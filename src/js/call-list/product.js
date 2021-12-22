import refs from '../refs/refs.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { blockHelpRender } from './help';
import { callProductPageFunctional, createFullMarkup } from '../layout/product/infoAboutProduct.js';
import { setProductSlider } from '../layout/product/productSlider';
import RecomendationsCategory from '../layout/product/recomendationsCategory.js';
import productMarkup from '../../views/layouts/product.hbs';
import HandSewn from '../layout/product/productHandSewn.js';
import { mainModal } from '../components/modal/modal';
export function productRender() {
  const initFetchSection = new FetchSection({
    firstParam: 'products',
    secondParam: 'components',
  });
  const productData = initFetchSection._state;
  productData.then(data => {
    const initFooter = new classBody();
    const objRecomendationsCategory = new RecomendationsCategory({
      data: data[0],
    });
    const objHandSewn = new HandSewn();
    const obj = {
      infoAboutProduct: createFullMarkup(),
      recomendationCategory: objRecomendationsCategory.getMarkup(),
      handSewn: objHandSewn.getMarkup(data[1].productHandSewn),
      mainModal: mainModal,
    };
    refs.mainEL.innerHTML = productMarkup(obj);
    setProductSlider();
    callProductPageFunctional();
    objRecomendationsCategory.setSlider();
    objRecomendationsCategory.setEvent();
    objHandSewn.setEvent();
    blockHelpRender();
  });
}
