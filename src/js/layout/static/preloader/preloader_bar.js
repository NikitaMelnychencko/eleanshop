import refs from '../../../refs/refs.js';
export function preloaderIsHided() {
  refs.preloader.classList.add('loading--hiden');
}
export function preloaderDisable() {
  refs.preloader.style.display = 'none';
}
