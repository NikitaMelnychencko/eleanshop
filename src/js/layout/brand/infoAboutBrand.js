import brand_info from '../../../views/layouts/brand.hbs';
import form_brand from '../../..//views/partials/brand/formFittingInShowroom.hbs';
import brand_our_advantages from '../../..//views/partials/brand/ourAdvantages.hbs';
import card_brand_our_advantages from '../../..//views/partials/brand/cardBrandOurAdvantages.hbs';

import refs from '../../refs/refs';
import '../../../images/img/brand/elena-des.jpg';
import '../../../images/img/brand/elena-des@2x.jpg';
import '../../../images/img/brand/elena-mob.jpg';
import '../../../images/img/brand/elena-mob@2x.jpg';
import '../../../images/img/brand/two-an-des.jpg';
import '../../../images/img/brand/two-an-des@2x.jpg';
import '../../../images/img/brand/two-an-mob.jpg';
import '../../../images/img/brand/two-an-mob@2x.jpg';
import '../../../images/svg/exampl.svg';

const brandOurAdvantagesCard = [
  {
    url: './images/exampl.svg#icon-needle',
    text: 'Уровень пошива приравнивается к индивидуальному;',
  },
  {
    url: './images/exampl.svg#icon-mannequin',
    text: 'Создаем лекала для костюмов, которые подчеркивают достоинства и скрывают недостатки фигуры;',
  },
  {
    url: './images/exampl.svg#icon-flower',
    text: 'Качественное исполнение: ровные отстрочки, красивая обработка – вы можете носить вещи даже изнаночной стороной;',
  },
  {
    url: './images/exampl.svg#icon-sewing-machine',
    text: 'Используем современное оборудование и качественные материалы для изготовления изделий;',
  },
  {
    url: './images/exampl.svg#icon-cuboc',
    text: 'Наши швеи занимаются пошивом и конструированием одежды более 20 лет. За это время их навыки доведены до идеала... ',
  },
];

const cardBrandOurAdvantages = card_brand_our_advantages(brandOurAdvantagesCard);
const formBrand = form_brand();
const brandOurAdvantages = brand_our_advantages({ formBrand, cardBrandOurAdvantages });
const brandInfo = brand_info({ brandOurAdvantages });
refs.brand.insertAdjacentHTML('beforeend', brandInfo);
