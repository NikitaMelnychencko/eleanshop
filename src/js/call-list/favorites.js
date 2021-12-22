import refs from '../refs/refs.js';
import { blockHelpRender } from './help';
import Favorites from '../layout/favorites/favorites.js';
// import favorit from './json/favorites.json';

refs.numRef.innerHTML = 0;
let favoritesData = localStorage.getItem('favorites');
if (favoritesData !== null) {
  favoritesData = JSON.parse(favoritesData);
  refs.numRef.innerHTML = favoritesData['fav'].length;
}

export function favoritesRender() {
  // let data = {};
  // data['fav'] = [...favorit];
  // localStorage.setItem('favorites', JSON.stringify(data));

  const favorites = new Favorites();

  if (favorites.markcup.length > 0) {
    refs.mainEL.innerHTML = favorites.markcup;
  }
  favorites.init();
  blockHelpRender();
}
let data = localStorage.getItem('favorites');
if (!data == null) {
  data = JSON.parse(data);
  refs.numRef.innerHTML = data['fav'].length;
}
