import '../../../images/img/page-clients/client-01/starClient-01.jpg';
import '../../../images/img/page-clients/client-01/starClient-01@2x.jpg';
import '../../../images/img/page-clients/client-01/starClient-01@3x.jpg';
import '../../../images/img/page-clients/client-01/starClient-01@4x.jpg';
import '../../../images/img/page-clients/client-02/starClient-02.jpg';
import '../../../images/img/page-clients/client-02/starClient-02@2x.jpg';
import '../../../images/img/page-clients/client-02/starClient-02@3x.jpg';
import '../../../images/img/page-clients/client-02/starClient-02@4x.jpg';
import '../../../images/img/page-clients/client-03/starClient-03.jpg';
import '../../../images/img/page-clients/client-03/starClient-03@2x.jpg';
import '../../../images/img/page-clients/client-03/starClient-03@3x.jpg';
import '../../../images/img/page-clients/client-03/starClient-03@4x.jpg';
import '../../../images/img/page-clients/client-04/starClient-04.jpg';
import '../../../images/img/page-clients/client-04/starClient-04@2x.jpg';
import '../../../images/img/page-clients/client-04/starClient-04@3x.jpg';
import '../../../images/img/page-clients/client-04/starClient-04@4x.jpg';
import '../../../images/img/page-clients/client-05/starClient-05.jpg';
import '../../../images/img/page-clients/client-05/starClient-05@2x.jpg';
import '../../../images/img/page-clients/client-05/starClient-05@3x.jpg';
import '../../../images/img/page-clients/client-05/starClient-05@4x.jpg';
import '../../../images/svg/clients-svg-original/clients-arrow-right.svg';
import '../../../images/svg/clients-svg-original/clients-arrow-left.svg';

import pageStarClientsSliderData from '../../json/starClients.json';
import pageStarClientsMarkupTemplate from '../../../views/partials/reviews/starClients.hbs';
import refs from '../../refs/refs.js';
const { mainEL } = refs;

window.jQuery = window.$ = require('jquery');
require('../../slider/slick.min.js');

// Create Markup
const pageStarClientsSliderMarkup = pageStarClientsMarkupTemplate(pageStarClientsSliderData);
mainEL.insertAdjacentHTML('beforeend', pageStarClientsSliderMarkup);

// Slider options
$(document).ready(function () {
  $('.star-clients__slider').slick({
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
