import brand_info from '../../../views/layouts/brand.hbs';
// import '../../../sass/layout/brand/_infoAboutBrand.scss'
// import refs from '../../refs/refs.js';
import '../../../images/img/brand/elena-des.jpg';
import '../../../images/img/brand/elena-des@2x.jpg';
import '../../../images/img/brand/elena-mob.jpg';
import '../../../images/img/brand/elena-mob@2x.jpg';
import '../../../images/img/brand/two-an-des.jpg';
import '../../../images/img/brand/two-an-des@2x.jpg';
import '../../../images/img/brand/two-an-mob.jpg';
import '../../../images/img/brand/two-an-mob@2x.jpg';
import '../../../images/svg/exampl.svg'




const refs = {
brand: document.querySelector('main')
}



const brandInfo = brand_info();
refs.brand.insertAdjacentHTML('beforeend', brandInfo);

