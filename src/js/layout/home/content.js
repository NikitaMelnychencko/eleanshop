// Import
import model from '../../../views/partials/home/content.hbs';
import content from '../../json/home/content.json';
import { catalogRender } from '../../call-list.js';
// Cards Insert
export const cardsMarkup = model(content);

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
