import aboutTheBrand_aboutBrandTempl from '../../../views/partials/home/aboutTheBrand.hbs';

import refs from '../../refs/refs';
    
const { mainEL } = refs;
export const aboutTheBrand_parsing = aboutTheBrand_aboutBrandTempl();

export function openAboutTheBrand(){
const homeAboutBrandLink = document.querySelector('.aboutBrand__link');
homeAboutBrandLink.addEventListener('click', onAboutBrandLinkClick);
function onAboutBrandLinkClick(event){
    event.preventDefault();
    }
}