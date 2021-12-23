import { onBtnScroll } from './buttonScroll';
import { openModals } from './modals';
import { activeUser } from './activityTimer';
import { countMessagesAmount } from './messageAmount';
var debounce = require('lodash.debounce');

export function blockHelpRenderOpen() {
  openModals();
  countMessagesAmount();
  document.addEventListener('mousemove', debounce(activeUser, 300));
  onBtnScroll();
}
