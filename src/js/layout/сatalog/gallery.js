import gallery from '../../../views/partials/сatalog/gallery.hbs';

import catalog from '../../json/catalog.json';

import { productRender } from '../../call-list.js';

import { scrollTo } from '../../components/blockHelp/blockHelp.js';

// import '../../../images/svg/catalog/catalog.svg#icon-gallery-card-heart';

export const catalogListMarkup = gallery(catalog);
export function openCategory() {
  const catalogItems = document.querySelector('.js-catalog');
  const cardHeartIcon = catalogItems.querySelectorAll('.icon-gallery-card-heart');

  const cardHeartIconArray = Array.from(cardHeartIcon);

  for (let i = 0; i < cardHeartIconArray.length; i += 1) {
    cardHeartIconArray[i].addEventListener('click', heartColorizing);
    function heartColorizing(e) {
      e.target.classList.toggle('heart-click');
    }
  }

  const catalogSeeMoreIcon = document.querySelector('.catalog-icon-raws-round');

  catalogSeeMoreIcon.addEventListener('click', seeMoreCards);
  function seeMoreCards(elem) {}

  const cardsList = document.querySelector('.catalog-list');
  cardsList.addEventListener('click', cardToProduct);
  cardsList.addEventListener('touchend', cardToProduct);

  // function myFunction() {
  //   var dots = document.getElementById('dots');
  //   var moreText = document.getElementById('more');
  //   var btnText = document.getElementById('myBtn');

  //   if (dots.style.display === 'none') {
  //     dots.style.display = 'inline';
  //     btnText.innerHTML = 'Read more';
  //     moreText.style.display = 'none';
  //   } else {
  //     dots.style.display = 'none';
  //     btnText.innerHTML = '&nbspRead less';
  //     moreText.style.display = 'inline';
  //   }
  // }
}

function cardToProduct(e) {
  if (e.target.nodeName !== 'use' && e.target.nodeName !== 'svg') {
    let id = '';
    if (!e.target.getAttribute('id')) {
      let el = e.target.parentElement;
      while (!id) {
        if (el.getAttribute('id')) {
          id = el.getAttribute('id');
        } else {
          el = el.parentElement;
        }
      }
    } else {
      id = e.currentTarget.getAttribute('id');
    }
    catalog.forEach(el => {
      if (el.id === id) {
        localStorage.setItem('productInfoData', JSON.stringify(el));
      }
    });
    productRender();
    scrollTo(0, 700);
  }
}

export function filteredCatalog(filterName) {
  const fcatalog = catalog.filter(
    el => el.category.indexOf(filterName) >= 0 || el.collection.indexOf(filterName) >= 0,
  );
  if (fcatalog.length > 0) {
    const catalogLM = gallery(fcatalog);
    document.querySelector('.catalog-list').innerHTML = catalogLM;
    openCategory();
  }
}
