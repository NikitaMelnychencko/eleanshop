import brand_info from '../../../views/layouts/brand.hbs';
import form_brand from '../../..//views/partials/brand/formFittingInShowroom.hbs';
import refs from '../../refs/refs';
import '../../../images/img/brand/elena-des.jpg';
import '../../../images/img/brand/elena-des@2x.jpg';
import '../../../images/img/brand/elena-mob.jpg';
import '../../../images/img/brand/elena-mob@2x.jpg';
import '../../../images/img/brand/two-an-des.jpg';
import '../../../images/img/brand/two-an-des@2x.jpg';
import '../../../images/img/brand/two-an-mob.jpg';
import '../../../images/img/brand/two-an-mob@2x.jpg';
import '../../../images/svg/exampl.svg'



const formBrand = form_brand();
const brandInfo = brand_info({formBrand});


refs.brand.insertAdjacentHTML('beforeend', brandInfo);

