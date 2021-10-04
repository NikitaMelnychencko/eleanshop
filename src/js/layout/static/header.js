const refs = {
  headerEl: document.querySelector('.js-header'),
  buttonMobEl: document.querySelector('header .js-button'),
  svgMobEl: document.querySelectorAll('header .js-button__svg'),
  svgBinEl: document.querySelectorAll('header .js-svg-bin'),
  socialMobEl: document.querySelector('header .js-social-list-mobile'),
  logoSvgEl: document.querySelector('header .js-logo__svg'),
  logoTextEl: document.querySelector('header .js-logo__text'),
  listTextEl: document.querySelectorAll('header .js-list__text'),
  svgFavoritesEl: document.querySelector('header .js-svg-favorites'),
  navigationEl: document.querySelector('header .js-navigation'),
  bodyEl: document.querySelector('body'),
  navListEl: document.querySelector('header .js-navigation-list'),
  navSublistEl: document.getElementsByClassName('js-navigation-sublist'),
  wrapperEl: document.querySelector('header .js-wrapper'),
  navLinkEl: document.getElementsByClassName('js-navigation-link'),
  navItemEl: document.querySelectorAll('header .js-navigation-item'),
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
  navItemEl,
} = refs;

const qwe = document.getElementsByClassName('navigation-sublist__link');

// ---------- МОБІЛЬНА МОДАЛКА -----------
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
  navigationEl.classList.toggle('mod-hidden-nav');
  wrapperEl.classList.toggle('wrapper');
  bodyEl.classList.toggle('mobile-open');

  if (!buttonMobEl.children[1].classList.contains('mod-hidden')) {
    navigationEl.addEventListener('click', fnMobileList);
  }

  if (buttonMobEl.children[1].classList.contains('mod-hidden')) {
    navigationEl.removeEventListener('click', fnMobileList);
  }
}

// ---------- МОБІЛЬНЕ МЕНЮ -----------
let markup;

function fnMobileList(event) {
  if (event.target.parentElement.children.length !== 1) {
    if (navListEl.children.length > 1) {
      markup = navListEl.innerHTML;
      [...navSublistEl].forEach(element => element.classList.toggle('mod-hidden'));
      [...navLinkEl].forEach(element => element.classList.toggle('mod-rotate-navigation'));
      navListEl.innerHTML = event.target.parentNode.outerHTML;
    } else {
      navListEl.innerHTML = '';
      navListEl.insertAdjacentHTML('afterbegin', markup);
    }
  }
}

// ---------- ДЕКСТОПНЕ МЕНЮ -----------
if (matchMedia('(min-width: 1378px)').matches) {
  navigationEl.addEventListener('mouseover', fnDesktopList);
  navigationEl.addEventListener('mouseout', fnDesktopList);
} else {
  navigationEl.removeEventListener('mouseover', fnDesktopList);
  navigationEl.removeEventListener('mouseout', fnDesktopList);
}

function fnDesktopList(event) {
  console.dir(event.target);
  if (event.target.nodeName === 'LI')
    [...navSublistEl]
      .find(element => element === event.target.lastElementChild)
      .classList.toggle('mod-hidden');
}
