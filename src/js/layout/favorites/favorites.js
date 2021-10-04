import markupTempl from '../../../views/layouts/favorites.hbs';

class Favorites {
  constructor({ selector, place, data }) {
    this.place = document.querySelector(selector);
    this.place = place;
    this.markcup = markupTempl(data);
    this.data = { fav: [] };
    this.data['fav'] = [...data];
    localStorage.setItem('favorites', JSON.stringify(this.data));
  }

  init() {
    dataRef = document.querySelector('.favorites__data');
    sendEMailRef = document.querySelector('.favorites__sand-on-email--button');
    dataRef.addEventListener('click', onButtonsClick);
    sendEMailRef.addEventListener('click', onButtonSendEMailClick);
  }

  onButtonsClick(event) {
    if (event.target.classList.includes('favorites__button-buy')) {
      let id = event.target.paewnt.paremt.id;
      const ulRef = document.querySelector('.favorites__data');
      let i = 0;
      for (const el of ulRef.childNodes) {
        if (el.id !== id) {
          i += 1;
        } else {
          break;
        }
      }
      elem = {};
      elem.id = this.data['fav'][i].id;
      elem.name = this.data['fav'][i].name;
      let imgs = '';
      if (window.screen.size < 1379) {
        imgs = this.data['fav'][i].image['srcset-mobile'];
      } else {
        imgs = this.data['fav'][i].image.srcset;
      }
      imgs = imgs.split(',').split(' ');
      elem.img = imgs[0];
      elem.img2 = imgs[2];
      elem.price = this.data['fav'][i].price;
      elem.sizeSelected = this.data['fav'][i].size;
      elem.colorSelected = this.data['fav'][i].color;
      elem.circleSelected = '';
      elem.count = 1;

      dataBin = localStorage.getItem('orderingData');
      if (dataBin !== null) {
        dataBin = JSON.parse(dataBin);
        dataBin = [...dataBin, elem];
      } else {
        dataBin = [elem];
      }
      localStorage.setItem('orderingData', JSON.stringify(dataBin));
    } else if (event.target.classList.includes('favorites__button-delete--icon')) {
      data = localStorage.getItem('favorites');
      if (data !== null) {
        let id = event.target.paewnt.paremt.paremt.id;
        data = JSON.parse(data);
        this.data['fav'] = data['fav'].forEach(element => element.id != id);
      }
      localStorage.setItem('favorites', JSON.stringify(this.data));
    }
  }

  onButtonSendEMailClick() {
    dataObj = {};
    this.data = document.querySelectorAll('.favorites__description');
    this.data.forEach(el => {
      dataObj[el.name] = el.value;
    });

    localStorage.setItem('favorites-e-mail', JSON.stringify(dataObj));
  }
}

export default Favorites;
