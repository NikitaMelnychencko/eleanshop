import refs from '../refs/refs.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { Forms } from '../components/forms';
import { blockHelpRender } from './help';
//==hbs==
import contact_page from '../../views/layouts/contact.hbs';
import contact_map from '../../views/partials/contact/map.hbs';
import contacts_contact from '../../views/partials/contact/contact.hbs';

export function contactRender() {
  const formsPage = new Forms('fittingPage');
  const formBrand = {
    page: formsPage.insertForm(),
  };
  const initFetchSection = new FetchSection({
    firstParam: 'contact',
  });
  const contactData = initFetchSection._state;

  contactData.then(data => {
    const contactsMap = contact_map();
    const contactsContact = contacts_contact(data);
    const initFooter = new classBody();
    const contactPageMarkUp = contact_page({ formBrand, contactsMap, contactsContact });
    refs.mainEL.innerHTML = contactPageMarkUp;
    blockHelpRender();
    formsPage.init();
  });
}
