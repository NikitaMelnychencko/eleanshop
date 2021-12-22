import renderModal from '../../components/modal/modal';
import modalDeliveryAndReturn from '../../../views/partials/delivery/modalDeliveryAndReturn.hbs';
import modalDelivery from '../../../views/partials/delivery/modalDelivery.hbs';
import modalDeliverPayment from '../../../views/partials/delivery/modalDeliverPayment.hbs';

export function deliveryThreeModal() {
  const deliveryButtonOne = document.querySelector('.buttons__button_one');
  deliveryButtonOne.addEventListener('click', e => {
    e.preventDefault();
    renderModal(modalDeliveryAndReturn(), '');
  });

  const deliveryButtonTwo = document.querySelector('.buttons__button_two');
  deliveryButtonTwo.addEventListener('click', e => {
    e.preventDefault();
    renderModal(modalDelivery(), '');
  });
  const deliveryButtonThird = document.querySelector('.buttons__button_third');
  deliveryButtonThird.addEventListener('click', e => {
    e.preventDefault();
    renderModal(modalDeliverPayment(), '');
  });
}
