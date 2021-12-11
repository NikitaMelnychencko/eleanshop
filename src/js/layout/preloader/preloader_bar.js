import refs from '../../refs/refs.js';
window.onload = function () {
  setTimeout(preloaderIsHided, 1500);
  setTimeout(preloaderDisable, 2000);
};
export function preloaderIsHided() {
  refs.preloader.classList.add('loading--hiden');
}
export function preloaderDisable() {
  refs.preloader.style.display = 'none';
}
