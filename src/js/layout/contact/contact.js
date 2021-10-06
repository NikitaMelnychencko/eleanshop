import contact_map from '../../../views/partials/contact/map.hbs';
import contacts_contact from '../../../views/partials/contact/contact.hbs';
import contactsData from '../../json/contacts.json';
export const contactsMap = contact_map();
export const contactsContact = contacts_contact(contactsData[0]);
