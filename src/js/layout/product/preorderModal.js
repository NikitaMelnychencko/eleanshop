// ============= PRE-ORDER MODAL ======================
import refs from '../../refs/refs.js';
import backdrop from '../../../views/components/backdrop.hbs';
import preorderModal from '../../../views/components/preorderModal.hbs';
import orderForm from '../../../views/components/orderForm.hbs';
import sizesTemplate from '../../../views/components/sizes.hbs';
import sizesArr from '../../../sizesTest.json';

// create content for Pre-order Modal which placed at Body (for example)
refs.bodyEl.insertAdjacentHTML('beforeend', backdrop());

const formWrapper = document.querySelector('.form__wrapper');

formWrapper.insertAdjacentHTML('beforeend', preorderModal());

// add Order Form as second part of Pre-order Modal content
const preorderEl = document.querySelector('.preorder');
preorderEl.insertAdjacentHTML('beforeend', orderForm());

const sizesList = document.querySelector('.js-sizes');
sizesList.insertAdjacentHTML('beforeend', sizesTemplate(sizesArr));
