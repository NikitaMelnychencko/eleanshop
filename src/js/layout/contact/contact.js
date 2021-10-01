import contactsTemplate from '../../../views/layouts/contact.hbs';
import contact_map from '../../../views/partials/contact/map.hbs';

import contactsData from '../../../../app';
import refs from '../../refs/refs';
const { main } = refs;

const contactsMap = contact_map();
const contactsMarkup = contactsTemplate(contactsData);

main.insertAdjacentHTML('beforeend', contactsMarkup);

console.log(contactsMap);
