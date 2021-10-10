import markupTempl from '../../../views/layouts/favorites.hbs';
import { favoritesRender } from '../../call-list.js';
import refs from '../../refs/refs.js';

let debounce = require('lodash.debounce');

class Favorites {
  constructor() {
    this.markcup = '';
    refs.numRef.innerHTML = 0;
    this.data = localStorage.getItem('favorites');
    if (this.data !== null) {
      this.data = JSON.parse(this.data);
      refs.numRef.innerHTML = this.data['fav'].length;
      this.markcup = markupTempl(this.data['fav']);
    }
  }

  init() {
    let dataRef = document.querySelector('.favorites__data');
    if (dataRef !== null) {
      dataRef.addEventListener('click', this.onButtonsClick);
      dataRef.addEventListener('input', debounce(this.onDescriptionChange, 500));
    }
    let sendEMailRef = document.querySelector('.favorites__sand-on-email--button');
    if (sendEMailRef !== null) {
      sendEMailRef.addEventListener('click', this.onButtonSendEMailClick.bind(this));
    }
  }

  onButtonsClick(event) {
    let data = localStorage.getItem('favorites');
    data = JSON.parse(data);
    refs.numRef.innerHTML = data.length;

    if (event.target.classList[0] === 'favorites__button-buy') {
      let id = event.target.parentNode.parentNode.id;
      const ulRef = document.querySelector('.favorites__data');
      let i = 0;
      for (const el of ulRef.children) {
        if (el.id === id) {
          break;
        }
        i += 1;
      }

      if (data !== null) {
        let dataBin = localStorage.getItem('orderingData');
        if (dataBin !== null) {
          dataBin = JSON.parse(dataBin);
        } else {
          dataBin = [];
        }
        let isCont = true;
        for (const obj of dataBin) {
          if (obj.label.id === data['fav'][i].id) {
            isCont = false;
          }
        }
        if (!isCont) {
          return;
        }
        let elem = { label: {} };
        elem.label.id = data['fav'][i].id;
        elem.label.name = data['fav'][i].name;
        let imgs = [];
        if (window.screen.size < 1379) {
          imgs = data['fav'][i].image['srcset-mobile'].split(',');
        } else {
          imgs = data['fav'][i].image.srcset.split(',');
        }

        imgs[1] = imgs[1].trim();
        elem.label.img = imgs[0].split(' ')[0];
        elem.label.img2 = imgs[1].split(' ')[0];
        elem.label.price = data['fav'][i].price;
        elem.label.sizeSelected = data['fav'][i].size;
        elem.label.colorSelected = data['fav'][i].color;
        elem.label.circleSelected = '';
        elem.label.description = '';
        elem.label.count = 1;

        dataBin = [...dataBin, elem];
        localStorage.setItem('orderingData', JSON.stringify(dataBin));
      }
    } else if (
      event.target.classList[0] === 'favorites__button-delete' ||
      event.target.classList[0] === 'favorites__button-delete--icon'
    ) {
      if (data !== null) {
        let id = null;
        if (event.target.classList[0] === 'favorites__button-delete') {
          id = event.target.parentNode.parentNode.id;
        } else {
          id = event.target.parentNode.parentNode.parentNode.id;
        }

        let done = [];
        for (const element of data['fav']) {
          if (element.id != id) {
            done = [...done, element];
          }
        }
        data['fav'] = done;
      }
      localStorage.setItem('favorites', JSON.stringify(data));
      favoritesRender();
    }
    refs.numRef.innerHTML = data['fav'].length;
  }

  onButtonSendEMailClick() {
    let dataObj = {};
    let data = localStorage.getItem('favorites');
    if (data !== null) {
      data = JSON.parse(data);
      for (const element of data['fav']) {
        dataObj[element.name] = element;
      }

      localStorage.setItem('favorites-e-mail', JSON.stringify(dataObj));
    }
  }

  onDescriptionChange(event) {
    let descriptionRefArr = document.querySelectorAll('.favorites__description');
    let id = event.target.parentNode.id;
    let descrRef = null;

    for (const descr of descriptionRefArr) {
      if (descr.parentNode.id == id) {
        descrRef = descr;
      }
    }
    let data = localStorage.getItem('favorites');
    data = JSON.parse(data);
    let done = [];
    for (const element of data['fav']) {
      if (element.id == id) {
        element.description = descrRef.value;
      }
      done = [...done, element];
    }
    data['fav'] = done;
    localStorage.setItem('favorites', JSON.stringify(data));
  }
}

export default Favorites;
