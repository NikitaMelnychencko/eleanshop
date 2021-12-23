import { filteredCatalog } from './gallery.js';

export function openFilter(value) {
  const filterLib = value;
  const filterList = document.querySelector('#filter');
  const catalogColHeader = document.querySelector('.catalog-collection__title');
  const catalogCatHeader = document.querySelector('.catalog-category__title');

  const filterCollectionList = document.querySelector('.catalog-collection__list');
  const filterCatalogList = document.querySelector('.catalog-category__list');

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

  const categoryName = document.querySelector('.catalog__title');
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
  }

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
