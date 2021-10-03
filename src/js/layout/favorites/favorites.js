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
    data = document.querySelector('.favorites__data');
    sendEMail = document.querySelector('.favorites__sand-on-email--button');
    data.addEventListener('click', onButtonsClick);
    sendEMail.addEventListener('click', onButtonSendEMailClick);
  }

  onButtonsClick(event) {
    if (event.target.classList.includes('favorites__button-buy')) {
      // bin
    } else if (event.target.classList.includes('favorites__button-delete--icon')) {
      data = localStorage.getItem('favorites');
      if (data !== null) {
        id = event.target.paewnt.paremt.paremt.id;
        data = data.JSON.parse(data);
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
