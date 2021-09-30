import aboutTheBrand_aboutBrandTempl from '../../../views/partials/home/aboutTheBrand.hbs';

import refs from '../../refs/refs';
    
const { mainEL } = refs;
const aboutTheBrand_parsing = aboutTheBrand_aboutBrandTempl();
mainEL.insertAdjacentHTML('beforeend', aboutTheBrand_parsing);
const homeAboutBrandLink = document.querySelector('.aboutBrand__link');
homeAboutBrandLink.addEventListener('click', onAboutBrandLinkClick);
function onAboutBrandLinkClick(event){
    event.preventDefault();
}