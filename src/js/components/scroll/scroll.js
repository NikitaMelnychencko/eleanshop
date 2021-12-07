function getBrowserId() {
  let aKeys = ['MSIE', 'Firefox', 'Safari', 'Chrome', 'Opera'],
    sUsrAg = navigator.userAgent,
    nIdx = aKeys.length - 1;
  for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);
  return nIdx;
}
console.log(getBrowserId());

export function restoreScroll() {
  const styleArray = style().split(';');
  styleArray.splice(indexOfNeedStyle(styleArray), 1);
  const styleString = styleArray.join(';');
  document.documentElement.style.cssText = `${styleString}${browserScroll()}`;
}

const browserScroll = function () {
  if (getBrowserId() === 1) {
    return 'overflow: auto;';
  }
  return 'overflow: overlay;';
};

export function bodyFixPosition() {
  if (getBrowserId() === 2) {
    document.body.classList.remove('scrollRem');
    if (!document.body.hasAttribute('data-body-scroll-fix')) {
      let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      document.body.setAttribute('data-body-scroll-fix', scrollPosition);
      removeStyle('hidden', 'fixed', `-${scrollPosition}px`, '100%');
    }
  }
}

export function bodyUnfixPosition() {
  if (document.body.hasAttribute('data-body-scroll-fix')) {
    let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
    document.body.removeAttribute('data-body-scroll-fix');
    removeStyle('', '', '', '');
    document.body.classList.add('scrollRem');
    window.scroll(0, scrollPosition);
  }
}

function removeStyle(overflow, position, top, width) {
  document.body.style.overflow = overflow;
  document.body.style.position = position;
  document.body.style.top = top;
  document.body.style.width = width;
}
