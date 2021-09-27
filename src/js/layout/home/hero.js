import '../../../images/img/page-hero/mobile/hero-title-01/hero-title-mobile-01.jpg';
import '../../../images/img/page-hero/mobile/hero-title-01/hero-title-mobile-01@2x.jpg';
import '../../../images/img/page-hero/mobile/hero-title-02/hero-title-mobile-02.jpg';
import '../../../images/img/page-hero/mobile/hero-title-02/hero-title-mobile-02@2x.jpg';
import '../../../images/img/page-hero/mobile/hero-title-03/hero-title-mobile-03.jpg';
import '../../../images/img/page-hero/mobile/hero-title-03/hero-title-mobile-03@2x.jpg';
import '../../../images/img/page-hero/mobile/hero-title-04/hero-title-mobile-04.jpg';
import '../../../images/img/page-hero/mobile/hero-title-04/hero-title-mobile-04@2x.jpg';
import '../../../images/img/page-hero/desktop/hero-title-01/hero-title-desktop-01.jpg';
import '../../../images/img/page-hero/desktop/hero-title-01/hero-title-desktop-01@2x.jpg';
import '../../../images/img/page-hero/desktop/hero-title-02/hero-title-desktop-02.jpg';
import '../../../images/img/page-hero/desktop/hero-title-02/hero-title-desktop-02@2x.jpg';
import '../../../images/img/page-hero/desktop/hero-title-03/hero-title-desktop-03.jpg';
import '../../../images/img/page-hero/desktop/hero-title-03/hero-title-desktop-03@2x.jpg';
import '../../../images/img/page-hero/desktop/hero-title-04/hero-title-desktop-04.jpg';
import '../../../images/img/page-hero/desktop/hero-title-04/hero-title-desktop-04@2x.jpg';
import '../../../images/svg/hero-svg-original/hero-arrow-left.svg';
import '../../../images/svg/hero-svg-original/hero-arrow-right.svg';
import '../../../images/svg/clients-svg-original/clients-arrow-right.svg';
import '../../../images/svg/clients-svg-original/clients-arrow-right.svg';

import pageHeroSliderData from '../../json/hero.json';
import pageHeroMarkupTemplate from '../../../views/partials/home/hero.hbs';
import refs from '../../refs/refs.js';
const { mainEL } = refs;

window.jQuery = window.$ = require('jquery');
require('../../slider/slick.min.js');

// Create Markup
const pageHeroSliderMarkup = pageHeroMarkupTemplate(pageHeroSliderData);
mainEL.insertAdjacentHTML('beforeend', pageHeroSliderMarkup);

// Slider options
$(document).ready(function () {
  $('.hero-slider').slick({
    arrows: true,
    dots: true, // точки
    adaptiveHeight: true, // адаптирование по высоте
    slidesToShow: 1, // сколько слайдеров активно
    slidesToScroll: 1, // по сколько пролистывать
    speed: 1000, // скорость пролистывания
    easing: 'ease', // тип анамации
    infinite: true,
    initialSlide: 0, // с какого слайда старт
    autoplay: true, // авто проигрывание
    autoplaySpeed: 2000, // скрость листания
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true, // пауза при ховере по точкам
    draggable: true, // отключение свайпа на ПК
    swipe: true,
    touchThreshold: 4, //срабатываниe свайпа
    touchMove: true, //срабатывание тача
    waitForAnimate: true, //анимация переключения
    //centerMode: false, // цент-мод
    //variableWidth: false, // выступание с боку пол слайда
    //rows: 1, // ряди слайдеров (по 2-3 и больше фоток сразу)
    //slidesPerRow: 1, // колчество слайдов в ряду
    //vertical: false, // вертикальный слайдер (если true - выключить флекс)
    //verticalSwiping: false, // вертикальный свайп вручную
    //fade: false, // заменяет перелистывание телепортом)))
    // asNavFor: 'клас-слайдера', // обмен класами между слайдерами
    //mobileFirst: false, // ( true = 721px+ / false = +721px)
    //appendArrows:$('class-name'), // $('.class-name') переместить стрелки
    //appendDots:$('class-name'), // $('.class-name') переместить точки
    responsive: [
      {
        breakpoint: 1377,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1378,
        settings: {
          mobileFirst: true,
        },
      },
    ],
  });
});
