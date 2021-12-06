export function bodyFixPosition() {
  if (!document.body.hasAttribute('data-body-scroll-fix')) {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.setAttribute('data-body-scroll-fix', scrollPosition);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollPosition + 'px';
    document.body.style.width = '100%';
  }
}

export function bodyUnfixPosition() {
  if (document.body.hasAttribute('data-body-scroll-fix')) {
    let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
    document.body.removeAttribute('data-body-scroll-fix');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflowY = '';
    window.scroll(0, scrollPosition);
  }
}
