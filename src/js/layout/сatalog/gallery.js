import gallery from '../../../views/partials/сatalog/gallery.hbs';

import catalog from '../../json/catalog.json';

import '../../../images/svg/catalog/catalog.svg#icon-gallery-card-heart';

const catalogItems = document.querySelector('.js-catalog');

function catalogCreating() {
  const catalogListMarkup = catalog.map(elem => gallery(elem)).join('');
  catalogItems.innerHTML = catalogListMarkup;
}

catalogCreating();

const cardHeartIcon = catalogItems.querySelectorAll('.icon-gallery-card-heart');

const cardHeartIconArray = Array.from(cardHeartIcon);

for (let i = 0; i < cardHeartIconArray.length; i += 1) {
  cardHeartIconArray[i].addEventListener('click', heartColorizing);
  function heartColorizing(e) {
    e.target.classList.toggle('heart-click');
  }
}

const catalogSeeMoreIcon = document.querySelector('.catalog-icon-raws-round');
console.log(catalogSeeMoreIcon);

// const seemoreDesktopItems = document.querySelectorAll('.seeMoreDesktop');
// console.log(seemoreDesktopItems);
// const seemoreMobileItems = document.querySelectorAll('.seeMoreMobile');
// console.log(seemoreMobileItems);
// const seemoreDesktopItemsArray = Array.from(seemoreDesktopItems);
// console.log(seemoreDesktopItemsArray);
catalogSeeMoreIcon.addEventListener('click', seeMoreCards);
function seeMoreCards(elem) {}

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
