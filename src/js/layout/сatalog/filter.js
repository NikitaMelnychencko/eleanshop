import filter from '../../../views/partials/сatalog/filter.hbs';
import filterLib from '../../json/filterLib.json';
export const filterListMakeup = filter({filterLib});

export function openFilter() {
  const filterList = document.querySelector('#filter');
  const catalogColHeader = document.querySelector('.catalog-collection-header');
  const catalogCatHeader = document.querySelector('.catalog-category-header');

  const filterCollectionList = document.querySelector('.filter-collection-list');
  const filterCatalogList = document.querySelector('.filter-category-list');

  const collectionItems = filterCollectionList.getElementsByTagName('li');
  const collectionArr = Array.from(collectionItems);
  const catalogItems = filterCatalogList.getElementsByTagName('li');
  const catalogArr = Array.from(catalogItems);
  catalogColHeader.addEventListener('click', openCollectionFilter);
  catalogCatHeader.addEventListener('click', openCatalogFilter);

  function openCollectionFilter() {
    collectionArr.map(e => {
      e.classList.toggle('open-item');
    });
  }
  function openCatalogFilter() {
    catalogArr.map(e => {
      e.classList.toggle('open-item');
    });
  }

  const categoryName = document.querySelector('.catalog-category-name');
  filterList.addEventListener('click', categoryNameChosing);
  function categoryNameChosing(e) {
    categoryName.textContent = e.target.textContent;
  }
}
