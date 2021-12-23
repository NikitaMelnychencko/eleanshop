// Import
import { catalogRender } from '../../call-list/catalog.js';

export function openContent() {
  // Links
  const ref = {
    list: document.querySelector('.content__list'),
  };

  // Target
  ref.list.addEventListener('click', e => {
    localStorage.setItem('content', `${e.target.id}`);
    catalogRender();
  });
}
