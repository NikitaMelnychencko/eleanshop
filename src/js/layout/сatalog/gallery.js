import gallery from '../../../views/partials/сatalog/gallery.hbs';
import filter from '../../../views/partials/сatalog/filter.hbs';
import catalog from '../../json/catalog.json';
import filterLib from '../../json/filterLib.json';
import '../../../images/svg/catalog/catalog.svg';

const catalogItems = document.querySelector('.js-catalog');

function catalogCreating() {
  const catalogListMarkup = catalog.map(elem => gallery(elem)).join('');
  catalogItems.innerHTML = catalogListMarkup;
}

catalogCreating();

const filterItem = document.querySelector('#filter');

function filterCreating() {
  const filterListMakeup = filterLib.map(elem => filter(elem)).join('');
  filterItem.innerHTML = filterListMakeup;
}
filterCreating();
