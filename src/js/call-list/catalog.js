import refs from '../refs/refs.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { blockHelpRender } from './help';

import catalogMarkUp from '../../views/layouts/catalog.hbs';
import filter from '../../views/partials/сatalog/filter.hbs';
import { openFilter } from '../layout/сatalog/filter.js';
import { catalogListMarkupF, openCategory } from '../layout/сatalog/gallery.js';

export function catalogRender() {
  const initFetchSection = new FetchSection({
    firstParam: 'category',
    secondParam: 'products',
  });
  const homeData = initFetchSection._state;
  homeData.then(el => {
    const filterListMakeup = filter(el[0]);
    const galleryData = el[1];
    sessionStorage.setItem('galleryData', JSON.stringify(galleryData));
    const initFooter = new classBody();
    const catalogListMarkup = catalogListMarkupF();
    const filterGalleryCatalogMarkup = catalogMarkUp({ filterListMakeup, catalogListMarkup });
    refs.mainEL.innerHTML = filterGalleryCatalogMarkup;
    openFilter(el[0]);
    openCategory();
    blockHelpRender();
  });
}
