// Import
import model from '../../../views/partials/home/content.hbs';
import content from '../../json/home/content.json';
import {catalogRender} from '../../call-list.js';
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
    catalogRender()
  });

  // // Lazyloading
  // (function (window) {
  //   const $q = function (q, res) {
  //       if (document.querySelectorAll) {
  //         res = document.querySelectorAll(q);
  //       } else {
  //         const d = document,
  //           a = d.styleSheets[0] || d.createStyleSheet();
  //         a.addRule(q, 'f:b');
  //         for (const l = d.all, b = 0, c = [], f = l.length; b < f; b++)
  //           l[b].currentStyle.f && c.push(l[b]);

  //         a.removeRule(0);
  //         res = c;
  //       }
  //       return res;
  //     },
  //     addEventListener = function (evt, fn) {
  //       window.addEventListener
  //         ? this.addEventListener(evt, fn, false)
  //         : window.attachEvent
  //         ? this.attachEvent('on' + evt, fn)
  //         : (this['on' + evt] = fn);
  //     },
  //     _has = function (obj, key) {
  //       return Object.prototype.hasOwnProperty.call(obj, key);
  //     };
  //   function loadImage(el, fn) {
  //     const img = new Image(),
  //       src = el.getAttribute('data-src');
  //     img.onload = function () {
  //       if (!!el.parent) el.parent.replaceChild(img, el);
  //       else el.src = src;

  //       fn ? fn() : null;
  //     };
  //     img.src = src;
  //   }

  //   function elementInViewport(el) {
  //     const rect = el.getBoundingClientRect();

  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  //     );
  //   }

  //   const images = new Array(),
  //     query = $q('img.lazy'),
  //     processScroll = function () {
  //       for (const i = 0; i < images.length; i++) {
  //         if (elementInViewport(images[i])) {
  //           loadImage(images[i], function () {
  //             images.splice(i, i);
  //           });
  //         }
  //       }
  //     };
  //   // Array.prototype.slice.call is not callable under our lovely IE8
  //   for (const i = 0; i < query.length; i++) {
  //     images.push(query[i]);
  //   }

  //   processScroll();
  //   addEventListener('scroll', processScroll);
  // })(this);
}
