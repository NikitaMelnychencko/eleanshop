import refs from '../refs/refs.js';
import updateBin from '../updateBin.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { blockHelpRender } from './help';
//=hbs=
import ordering_ordering from '../../views/partials/checkout/ordering.hbs';
import payment_checkout from '../../views/layouts/checkout.hbs';
import payment_payment from '../../views/partials/checkout/payment.hbs';
//=js=
import { backdropMarkup } from '../layout/checkout/thanksForOrdering.js';
import { ModalData, createPayment } from '../layout/checkout/payment.js';
import { OrderingPrice, OrderingSizeAndColor } from '../layout/checkout/ordering.js';

export function checkoutRender() {
  const initFetchSection = new FetchSection({
    firstParam: 'ordering',
    secondParam: 'promocode',
  });
  const checkoutData = initFetchSection._state;
  checkoutData.then(data => {
    const createPayment = payment_payment(data[0]);
    updateBin();
    const initFooter = new classBody();
    const savedData = localStorage.getItem('orderingData');
    const parsedData = JSON.parse(savedData);
    const ordering = ordering_ordering(parsedData);

    const createCheckout = payment_checkout({ createPayment, ordering, backdropMarkup });
    refs.mainEL.innerHTML = createCheckout;
    const orderingPrice = new OrderingPrice({
      parsedData: parsedData,
      promocodes: data[1],
    });
    const orderingSizeColor = new OrderingSizeAndColor({
      parsedData: parsedData,
    });
    const modalOpen = new ModalData({
      idInputDay: 'js-day',
      idListDay: 'day-list',
      idInputTime: 'js-time',
      idListTime: 'time-list',
    });
    blockHelpRender();
  });
}
