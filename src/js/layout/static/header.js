import { favoritesRender } from '../../call-list';
import { showroomRender } from '../../call-list';
import { contactRender } from '../../call-list';
// import { Назва функції } from '../../call-list';

import navListValue from '../../../../src/js/json/static/navListValue.json';

const refs = {
  headerEl: document.querySelector('.js-header'),
  buttonMobEl: document.querySelector('.js-header-button'),
  svgMobEl: document.querySelectorAll('.js-header-button__svg'),
  svgBinEl: document.querySelectorAll('.js-header-svg-bin'),
  socialMobEl: document.querySelector('.js-header-social-list-mobile'),
  logoSvgEl: document.querySelector('.js-header-logo__svg'),
  logoTextEl: document.querySelector('.js-header-logo__text'),
  listTextEl: document.querySelectorAll('.js-header-list__text'),
  svgFavoritesEl: document.querySelector('.js-header-svg-favorites'),
  navigationEl: document.querySelector('.js-header-navigation'),
  bodyEl: document.querySelector('body'),
  navListEl: document.querySelector('.js-header-navigation-list'),
  navSublistEl: document.getElementsByClassName('js-header-navigation-sublist'),
  wrapperEl: document.querySelector('.js-header-wrapper'),
  navLinkEl: document.getElementsByClassName('js-header-navigation-link'),
  // ----------------------------------------------
  contactEl: document.querySelector('#header-contact'),
  showroomEl: document.querySelector('#header-showroom'),
  catalogNewmEl: document.querySelector('#header-catalog-new'),
  favoritesEl: document.querySelector('#header-favorites'),
};

const {
  headerEl,
  buttonMobEl,
  svgMobEl,
  svgBinEl,
  socialMobEl,
  logoSvgEl,
  logoTextEl,
  listTextEl,
  svgFavoritesEl,
  navigationEl,
  bodyEl,
  navListEl,
  navSublistEl,
  wrapperEl,
  navLinkEl,
  contactEl,
  showroomEl,
  catalogNewmEl,
  favoritesEl,
} = refs;

//! ---------- ВИКЛИКИ ФУНКЦІЙ З КОЛ-ЛИСТА -----------
favoritesEl.addEventListener('click', favoritesRender);
showroomEl.addEventListener('click', showroomRender);
contactEl.addEventListener('click', contactRender);
// catalogNewmEl.addEventListener('click', Назва функції);

//! ---------- МОДАЛКА МОБІЛЬНОЇ ВЕРСІЇ -----------
buttonMobEl.addEventListener('click', fnMobileMenu);

function fnMobileMenu() {
  headerEl.classList.toggle('mod-background-color');
  headerEl.classList.toggle('mobile-menu');
  svgMobEl.forEach(element => element.classList.toggle('mod-hidden'));
  svgBinEl.forEach(element => element.classList.toggle('mod-hidden'));
  socialMobEl.classList.toggle('mod-hidden');
  logoSvgEl.classList.toggle('mod-fill');
  logoTextEl.classList.toggle('mod-color');
  listTextEl.forEach(element => element.classList.toggle('mod-color'));
  svgFavoritesEl.classList.toggle('mod-stroke');
  navigationEl.classList.toggle('mod-hidden-mob');
  wrapperEl.classList.toggle('wrapper');
  bodyEl.classList.toggle('mobile-open');

  if (!buttonMobEl.children[1].classList.contains('mod-hidden')) {
    navigationEl.addEventListener('click', fnMobileList);
  }

  if (buttonMobEl.children[1].classList.contains('mod-hidden')) {
    navigationEl.removeEventListener('click', fnMobileList);
  }
}

//! ---------- МЕНЮ НАВІГАЦІЇ МОБІЛЬНОЇ ВЕРСІЇ -----------
let markup;

function fnMobileList(event) {
  if (event.target.parentElement.children.length !== 1) {
    if (navListEl.children.length > 1) {
      markup = navListEl.innerHTML;
      [...navSublistEl].forEach(element => element.classList.toggle('mod-hidden-mob'));
      [...navLinkEl].forEach(element => element.classList.toggle('mod-rotate-navigation'));
      navListEl.innerHTML = event.target.parentNode.outerHTML;
    } else {
      navListEl.innerHTML = '';
      navListEl.insertAdjacentHTML('afterbegin', markup);
    }
  }
}

//! ---------- МЕНЮ НАВІГАЦІЇ ДЕКСТОПНОЇ ВЕРСІЇ (ЗАПИС В LOCAL STORAGE) -----------

navigationEl.addEventListener('click', fnSavelocalStorage);
function fnSavelocalStorage(event) {
  console.log(event.target.outerText);
  navListValue.forEach(el => {
    if (el[`${event.target.outerText.toLowerCase()}`]) {
      localStorage.setItem(
        event.target.outerText.toLowerCase(),
        el[`${event.target.outerText.toLowerCase()}`],
      );
    }
  });
}
