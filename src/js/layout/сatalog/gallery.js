

const catalogItem = document.querySelector('.js-catalog');

function catalogCreating() {
  const catalogListMarkup = catalog.map(elem => galleryTemplate(elem)).join('');
  catalogItem.innerHTML = catalogListMarkup;
}

catalogCreating();
