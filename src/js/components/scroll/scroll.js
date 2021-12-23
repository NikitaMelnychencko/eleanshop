function getBrowserId() {
  let aKeys = ['MSIE', 'Firefox', 'Safari', 'Chrome', 'Opera'],
    sUsrAg = navigator.userAgent,
    nIdx = aKeys.length - 1;
  for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);
  return nIdx;
}

export function restoreScroll() {
  const styleArray = style().split(';');
  styleArray.splice(indexOfNeedStyle(styleArray), 1);
  const styleString = styleArray.join(';');
  document.documentElement.style.cssText = `${styleString}${browserScroll()}`;
}

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

export function browserCheck() {
  if (getBrowserId() === 2) {
    document.documentElement.classList.remove('scrollRem');
  }
}
