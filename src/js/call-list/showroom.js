import refs from '../refs/refs.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { Forms } from '../components/forms';
import { blockHelpRender } from './help';

import pageShowroomMarkupTemplate from '../../views/partials/home/ourShowRoom.hbs';
import showroom_page from '../../views/layouts/showroom.hbs';
import { showroomSlider } from '../layout/home/ourShowRoom.js';

export function showroomRender() {
  const formsForm = new Forms('fittingForm');
  const formBrand = {
    form: formsForm.insertForm(),
  };
  const initFetchSection = new FetchSection({
    firstParam: 'components',
  });
  const showroomData = initFetchSection._state;
  showroomData.then(data => {
    const pageShowroomSliderMarkup = pageShowroomMarkupTemplate(data.ourShowroom);
    const initFooter = new classBody();
    const showroomPageMarkUp = showroom_page({ formBrand, pageShowroomSliderMarkup });
    refs.mainEL.innerHTML = showroomPageMarkUp;
    showroomSlider();
    blockHelpRender();
    formsForm.init();
  });
}
