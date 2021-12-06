export function bodyFixPosition() {
  if (!document.body.hasAttribute('data-body-scroll-fix')) {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.setAttribute('data-body-scroll-fix', scrollPosition);
    removeStyle('hidden', 'fixed', `-${scrollPosition}px`, '100%');
  }
}

export function bodyUnfixPosition() {
  if (document.body.hasAttribute('data-body-scroll-fix')) {
    let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
    document.body.removeAttribute('data-body-scroll-fix');
    removeStyle('', '', '', '');
    window.scroll(0, scrollPosition);
  }
}

function removeStyle(overflow, position, top, width) {
  document.body.style.overflow = overflow;
  document.body.style.position = position;
  document.body.style.top = top;
  document.body.style.width = width;
}
