import '../../../images/img/page-hero/mobile/hero-title-01/hero-title-mobile-01.jpg';
import '../../../images/img/page-hero/mobile/hero-title-02/hero-title-mobile-02.jpg';
import '../../../images/img/page-hero/mobile/hero-title-03/hero-title-mobile-03.jpg';
import '../../../images/img/page-hero/mobile/hero-title-04/hero-title-mobile-04.jpg';
import '../../../images/img/page-hero/mobile/hero-title-05/hero-title-mobile-05.jpg';
import pageHeroSliderData from '../../json/hero.json';
import pageHeroMarkupTemplate from '../../../views/partials/home/hero.hbs';
import refs from '../../refs/refs.js';

window.jQuery = window.$ = require('jquery');
require('./slick.min.js');

const { bodyEl, mainEL, pageHeroEL, pageHeroByIdEl } = refs;

// Create Markup
const pageHeroSliderMarkup = pageHeroMarkupTemplate(pageHeroSliderData);
pageHeroByIdEl.insertAdjacentHTML('beforeend', pageHeroSliderMarkup);

// document.addEventListener('DOMContentLoaded', insertHtml);

// Slider options
$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true, // точки
    adaptiveHeight: true, // адаптирование по высоте
    slidesToShow: 1, // сколько слайдеров активно
    slidesToScroll: 1, // по сколько пролистывать
    speed: 2000, // скорость пролистывания
    easing: '_ease_', // тип анамации
    infinite: true,
    // initialSlide: arr, // с какого слайда старт
    autoplay: true, // авто проигрывание
    autoplaySpeed: 3500, // скрость листания
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true, // пауза при ховере по точкам
    draggable: false, // отключение свайпа на ПК
    swipe: true,
    touchThreshold: 5, //срабатываниe свайпа
    touchMove: true, //срабатывание тача
    waitForAnimate: true, //анимация переключения
  });
});
