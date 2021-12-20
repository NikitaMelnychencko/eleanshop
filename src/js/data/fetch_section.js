import { getSection } from './firebase_Servise.js';

//======home======//
function sectionHome() {
  const state = {};
  const home = getSection('home');
  const components = getSection('components'); // разбить на разные файлы
  Promise.all([home, components]).then(values => {
    state.value = values;
  });
  return state;
}

//======catalog=========//
function sectionСatalog() {
  const state = {};
  const category = getSection('category');
  const products = getSection('products');
  Promise.all([category, products]).then(values => {
    state.value = values;
  });
  return state;
}
//=====product========//
//????
//=====brand========//
function sectionBrand() {
  const state = {};
  getSection('aboutBrand').then(values => {
    state.value = values;
  });
  return state;
}
//=====checkout========//
function sectionCheckout() {
  const state = {};
  getSection('ordering').then(values => {
    state.value = values;
  });
  return state;
}
//=====contact========//
function sectionContact() {
  const state = {};
  getSection('contact').then(values => {
    state.value = values;
  });
  return state;
}
//=====delivery========//
function sectionDelivery() {
  const state = {};
  getSection('delivery/questionsAnswers').then(values => {
    state.value = values;
  });
  return state;
}
//=====fitting========//
function sectionFitting() {
  const state = {};
  getSection('components/videoFitting').then(values => {
    state.value = values;
  });
  return state;
}

//=====reviews========//
//переиспользованая относитеьно home

//=====showroom========//
//переиспользованая относитеьно home
