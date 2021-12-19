import { getSection } from './firebase_Servise.js';

function sectionHome() {
  const state = {};
  const home = getSection('home');
  const components = getSection('components');
  Promise.all([home, components]).then(values => {
    state.value = values;
  });
  return state;
}
function sectionProduct() {
  const state = {};
  const category = getSection('category');
  const products = getSection('products');
  Promise.all([category, products]).then(values => {
    state.value = values;
  });
  return state;
}
function sectionBrand() {
  const state = {};
  getSection('aboutBrand').then(values => {
    state.value = values;
  });
  return state;
}
function sectionCheckout() {
  const state = {};
  getSection('ordering').then(values => {
    state.value = values;
  });
  return state;
}
