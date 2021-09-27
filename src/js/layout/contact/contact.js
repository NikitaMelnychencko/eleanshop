import contactsTemplate from '../../../views/layouts/contact.hbs';
import { contactsData } from '../../../../app';
import refs from '../../refs/refs';
const { main } = refs;

const contactsMarkup = contactsTemplate(contactsData);

main.insertAdjacentHTML('beforeend', contactsMarkup);
