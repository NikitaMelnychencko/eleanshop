// Суда буду вносить функционал
import '../../../index.js';
import myRefs from '../../refs/refs';
import deliveryfiljson from '../../../js/json/filter.json';
import deliveryfilter from '../../../views/partials/delivery/filter.hbs';

const { descriptiontitle: myDesc } = myRefs;
const filterMarkUp = createFilterDelivery(deliveryfiljson);

myDesc.insertAdjacentHTML('beforeend', filterMarkUp);

function createFilterDelivery(menu) {
  return menu.map(deliveryfilter).join('');
}
