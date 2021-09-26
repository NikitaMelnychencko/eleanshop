import galleryTemplate from '../../../views/partials/сatalog/gallery.hbs';
import catalog from '../../json/catalog-gallery.json';
import '../../../images/img/catalog/card-1.jpg';
import '../../../images/img/catalog/card-1@2x.jpg';
import '../../../images/img/catalog/card-2.jpg';
import '../../../images/img/catalog/card-2@2x.jpg';
import '../../../images/img/catalog/card-3.jpg';
import '../../../images/img/catalog/card-3@2x.jpg';
import '../../../images/img/catalog/card-4.jpg';
import '../../../images/img/catalog/card-4@2x.jpg';
import '../../../images/img/catalog/card-5.jpg';
import '../../../images/img/catalog/card-5@2x.jpg';
import '../../../images/img/catalog/card-6.jpg';
import '../../../images/img/catalog/card-6@2x.jpg';
import '../../../images/img/catalog/card-7.jpg';
import '../../../images/img/catalog/card-7@2x.jpg';
import '../../../images/img/catalog/card-8.jpg';
import '../../../images/img/catalog/card-8@2x.jpg';
import '../../../images/img/catalog/card-9.jpg';
import '../../../images/img/catalog/card-9@2x.jpg';
import '../../../images/img/catalog/card-10.jpg';
import '../../../images/img/catalog/card-10@2x.jpg';
import '../../../images/img/catalog/card-11.jpg';
import '../../../images/img/catalog/card-11@2x.jpg';
import '../../../images/img/catalog/card-12.jpg';
import '../../../images/img/catalog/card-12@2x.jpg';
import '../../../images/img/catalog/card-13.jpg';
import '../../../images/img/catalog/card-13@2x.jpg';
import '../../../images/img/catalog/card-14.jpg';
import '../../../images/img/catalog/card-14@2x.jpg';
import '../../../images/img/catalog/card-15.jpg';
import '../../../images/img/catalog/card-15@2x.jpg';
import '../../../images/img/catalog/card-16.jpg';
import '../../../images/img/catalog/card-16@2x.jpg';
import '../../../images/img/catalog/card-17.jpg';
import '../../../images/img/catalog/card-17@2x.jpg';
import '../../../images/img/catalog/card-18.jpg';
import '../../../images/img/catalog/card-18@2x.jpg';
import '../../../images/img/catalog/card-19.jpg';
import '../../../images/img/catalog/card-19@2x.jpg';
import '../../../images/svg/catalog-gallery-icons.svg';

const catalogItem = document.querySelector('.js-catalog');

function catalogCreating() {
  const catalogListMarkup = catalog.map(elem => galleryTemplate(elem)).join('');
  catalogItem.innerHTML = catalogListMarkup;
}

catalogCreating();
