import refs from '../../refs/refs.js';
import { favoritesRender, showroomRender, contactRender, catalogRender } from '../../call-list.js';

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
  catalogNewEl,
  favoritesEl,
} = refs;

//! ---------- ВИКЛИКИ ФУНКЦІЙ З КОЛ-ЛИСТА -----------
favoritesEl.addEventListener('click', favoritesRender);
showroomEl.addEventListener('click', showroomRender);
contactEl.addEventListener('click', contactRender);
catalogNewEl.addEventListener('click', catalogRender);

//! ---------- МОДАЛКА МОБІЛЬНОЇ ВЕРСІЇ -----------
buttonMobEl.addEventListener('click', fnMobileMenu);

function fnMobileMenu() {
  headerEl.classList.toggle('mod-background-color');
  headerEl.classList.toggle('mobile-menu');
  svgMobEl.forEach(element => element.classList.toggle('mod-hidden'));
  svgBinEl.classList.toggle('mod-stroke');
  svgBinEl.classList.toggle('mod-fill-transp');
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
  if (event.target.dataset.atribute)
    localStorage.setItem(event.target.textContent, event.target.dataset.atribute);
}
