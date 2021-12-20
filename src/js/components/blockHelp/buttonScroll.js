import { getRefs } from './refs';
import { scrollTo } from '../scrollTo';

//====================Smooth scroll
export function onBtnScroll() {
  getRefs().helpButtonScroll.addEventListener('click', onButtonScrollClick);
}

function onButtonScrollClick(event) {
  event.preventDefault();
  scrollTo(0, 700);
}

//===========make visible help-button-scroll
function auditYOffset() {
  if (window.pageYOffset > 400) {
    getRefs().helpButtonScroll.classList.add('isVisible');
    getRefs().helpButtonScroll.addEventListener('click', onButtonScrollClick);
  } else {
    getRefs().helpButtonScroll.classList.remove('isVisible');
    getRefs().helpButtonScroll.removeEventListener('click', onButtonScrollClick);
  }
}
setInterval(auditYOffset, 1000);
