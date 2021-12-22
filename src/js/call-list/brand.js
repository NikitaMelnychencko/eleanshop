import refs from '../refs/refs.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { Forms } from '../components/forms';
import { blockHelpRender } from './help';

import brand_page from '../../views/layouts/brand.hbs';
import brand_our_advantages from '../../views/partials/brand/ourAdvantages.hbs';
import card_brand_our_advantages from '../../views/partials/brand/cardBrandOurAdvantages.hbs';
import video_brand from '../../views/partials/brand/videoBrand.hbs';

import { brandPlayer } from '../layout/brand/infoAboutBrand.js';
export function brandRender() {
  const formsForm = new Forms('fittingForm');
  const formBrand = formsForm.insertForm();
  const initFetchSection = new FetchSection({
    firstParam: 'aboutBrand',
  });
  const brandData = initFetchSection._state;
  brandData.then(data => {
    const cardBrandOurAdvantages = card_brand_our_advantages(data);
    const brandOurAdvantages = brand_our_advantages({ formBrand, cardBrandOurAdvantages });
    const videoBrand = video_brand();
    const initFooter = new classBody('footer-switch');

    const contactPageMarkUp = brand_page({
      brandOurAdvantages,
      videoBrand,
    });
    refs.mainEL.innerHTML = contactPageMarkUp;
    brandPlayer();
    blockHelpRender();
    formsForm.init();
  });
}
