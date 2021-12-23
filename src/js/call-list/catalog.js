import refs from '../refs/refs.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { blockHelpRender } from './help';
import { activateFavorites } from '../layout/сatalog/gallery.js';
import catalogMarkUp from '../../views/layouts/catalog.hbs';
import filter from '../../views/partials/сatalog/filter.hbs';
import { openFilter } from '../layout/сatalog/filter.js';
import { catalogListMarkupF, openCategory } from '../layout/сatalog/gallery.js';

export function catalogRender() {
  const initFetchSection = new FetchSection({
    firstParam: 'category',
    secondParam: 'products',
  });
  const catalogData = initFetchSection._state;
  catalogData.then(data => {
    const filterListMakeup = filter(data[0]);
    const galleryData = data[1];
    sessionStorage.setItem('galleryData', JSON.stringify(galleryData));
    const initFooter = new classBody();
    const catalogListMarkup = catalogListMarkupF(data[0]);
    const filterGalleryCatalogMarkup = catalogMarkUp({ filterListMakeup, catalogListMarkup });
    refs.mainEL.innerHTML = filterGalleryCatalogMarkup;
    openFilter(data[0]);
    openCategory();
    blockHelpRender();
    activateFavorites();
  });
}
