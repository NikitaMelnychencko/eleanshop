import { getSection } from './firebase_Servise.js';
export class FetchSection {
  constructor({ firstParam, secondParam }) {
    this._state = null;
    this._getSection(firstParam, secondParam);
  }
  _getSection(firstParam, secondParam) {
    if (firstParam && secondParam) {
      const firstPromis = getSection(firstParam);
      const secondPromis = getSection(secondParam);
      this._state = Promise.all([firstPromis, secondPromis]).then(values => {
        return values;
      });
    } else {
      this._state = getSection(firstParam).then(values => {
        return values;
      });
    }
  }
}

//const test = new FetchSection({ firstParam: 'aboutBrand' });
//console.log(test._state);
//======home======//
//const home = getSection('home');
//const components = getSection('components'); // разбить на разные файлы
//======catalog=========//
//const category = getSection('category');
//const products = getSection('products');
//=====product========//
//переиспользованая относитеьно home
//=====brand========//
//getSection('aboutBrand').then(values => {
//=====checkout========//
//getSection('ordering').then(values => {
//=====contact========//
//getSection('contact').then(values => {
//=====delivery========//
//getSection('delivery/questionsAnswers').then(values => {
//=====fitting========//
//переиспользованая относитеьно home
//=====reviews========//
//переиспользованая относитеьно home
//=====showroom========//
//переиспользованая относитеьно home
