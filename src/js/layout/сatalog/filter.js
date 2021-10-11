import filter from '../../../views/partials/сatalog/filter.hbs';
import filterLib from '../../json/filterLib.json';
import { filteredCatalog } from './gallery.js';

export const filterListMakeup = filter({ filterLib });

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
  let ls = localStorage.getItem('content');
  if (ls) {
    let index = filterLib.filter_category.findIndex(el => el.id === ls);
    if (index > 0) {
      categoryName.textContent = filterLib.filter_category[index].category;
    } else {
      index = filterLib.filter_collection.findIndex(el => el.id === ls);
      if (index > 0) {
        categoryName.textContent = filterLib.filter_collection[index].collection;
      }
    }
    // localStorage.removeItem('content');
  }
  ls = localStorage.getItem('catalogFilter');
  if (ls) {
    const index = filterLib.filter_collection.findIndex(el => el.id === ls);
    if (index > 0) {
      categoryName.textContent = filterLib.filter_collection[index].collection;
    } else {
      const index = filterLib.filter_category.findIndex(el => el.id === ls);
      if (index > 0) {
        categoryName.textContent = filterLib.filter_category[index].category;
      }
    }
    // localStorage.removeItem('catalogFilter');
  }
  // filterList.addEventListener('click', categoryNameChosing);
  // function categoryNameChosing(e) {
  //   categoryName.textContent = e.target.textContent;
  // }

  catalogArr.forEach(el => {
    el.addEventListener('click', e => {
      const fname = e.target.textContent;
      filteredCatalog(fname);
      categoryName.textContent = fname;
    });
  });

  collectionArr.forEach(el => {
    el.addEventListener('click', e => {
      const fname = e.target.textContent;
      filteredCatalog(fname);
      categoryName.textContent = fname;
    });
  });
}
