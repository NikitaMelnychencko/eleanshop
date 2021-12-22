import refs from '../refs/refs.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { Forms } from '../components/forms';
import { blockHelpRender } from './help';
import { mainModal } from '../components/modal/modal';
//==hbs=
import deliveryMarkUp from '../../views/layouts/delivery.hbs';
import delivery from '../../views/partials/delivery/deliveryTypes.hbs';
import deliveryButton from '../../views/partials/delivery/buttonDelivProct.hbs';
import deliveryfilter from '../../views/partials/delivery/filter.hbs';
import formsQuestions from '../../views/partials/delivery/formsQuestion.hbs';
//==js==
import { deliveryThreeModal } from '../layout/delivery/deliveryTypes.js';

export function deliveryRender() {
  const formDelivery = new Forms('delivery');
  const formDeliveryMarkUp = formDelivery.insertForm();
  const initFetchSection = new FetchSection({
    firstParam: 'delivery',
  });
  const deliveryData = initFetchSection._state;
  deliveryData.then(data => {
    const buttonsDelivery = deliveryButton();
    const mainImageDelivery = delivery();
    const descriptionDelivery = deliveryfilter();
    const questionDelivery = formsQuestions(data.questionsAnswers);

    const initFooter = new classBody();
    const deliveryPageMarkUp = deliveryMarkUp({
      buttonsDelivery,
      mainImageDelivery,
      descriptionDelivery,
      questionDelivery,
      formDeliveryMarkUp,
      mainModal,
    });
    refs.mainEL.innerHTML = deliveryPageMarkUp;
    deliveryThreeModal();
    blockHelpRender();
    formDelivery.init();
  });
}
