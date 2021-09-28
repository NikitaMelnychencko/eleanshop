// Суда буду вносить функционал
import '../../../index.js';
import myRefs from '../../refs/refs';
import deliveryfoto from '../../../js/json/delivery.json';
import delivery from '../../../views/partials/delivery/deliveryTypes.hbs';
import '../../../images/img/elean62862 1.jpeg';
import '../../../images/svg/Group.svg';

const { mainfoto: myFoto } = myRefs;

const fotoMarkUp = createFotoDelivery(deliveryfoto);

myFoto.insertAdjacentHTML('beforeend', fotoMarkUp);

function createFotoDelivery(menu) {
  return menu.map(delivery).join('');
}
