import gallery from '../../../views/partials/сatalog/gallery.hbs';

import catalog from '../../json/catalog.json';

import '../../../images/svg/catalog/catalog.svg';

const catalogItems = document.querySelector('.js-catalog');

function catalogCreating() {
  const catalogListMarkup = catalog.map(elem => gallery(elem)).join('');
  catalogItems.innerHTML = catalogListMarkup;
}

catalogCreating();
