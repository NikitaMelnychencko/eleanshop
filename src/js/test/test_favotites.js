import Favorites from '../layout/favorites/favorites.js';
import { mainEL } from '../refs/refs.js';

const favorites = new Favorites({});
console.log(favorites.markcup);

mainEL.insertAdjacentHTML('beforeend', favorites.markcup);
favorites.init();
