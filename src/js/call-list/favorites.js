import refs from '../refs/refs.js';
import { blockHelpRender } from './help';
import Favorites from '../layout/favorites/favorites.js';
import { FetchSection } from '../data/fetch_section';

refs.numRef.innerHTML = 0;
let favoritesData = localStorage.getItem('favorites');
if (favoritesData !== null) {
  favoritesData = JSON.parse(favoritesData);
  refs.numRef.innerHTML = favoritesData['fav'].length;
}

export function favoritesRender() {
  const initFetchSection = new FetchSection({
    firstParam: 'products',
  });
  const favoritesData = initFetchSection._state;
  favoritesData.then(data => {
    const favorites = new Favorites({
      valueData: data,
    });

    if (favorites.markcup.length > 0) {
      refs.mainEL.innerHTML = favorites.markcup;
    }
    favorites.init();
    blockHelpRender();
  });
}
let data = localStorage.getItem('favorites');
if (!data == null) {
  data = JSON.parse(data);
  refs.numRef.innerHTML = data['fav'].length;
}
