import Favorites from '../layout/favorites/favorites.js';
import { mainEL } from '../refs/refs.js';

const favorites = new Favorites({});

mainEL.insertAdjacentHTML('beforeend', favorites.markcup);
favorites.init();
