// Import
import { catalogRender } from '../../call-list.js';

export function openContent() {
  // Links
  const ref = {
    list: document.querySelector('.content__list'),
  };

  // Target
  //localStorage.removeItem('content');
  ref.list.addEventListener('click', e => {
    localStorage.setItem('content', `${e.target.id}`);
    catalogRender();
  });
}
