import aboutTheBrand_aboutBrandTempl from '../../../views/partials/home/aboutTheBrand.hbs';

const { mainEL } = refs;

mainEL.insertAdjacentHTML('beforeend', aboutTheBrand_aboutBrandTempl());
const homeAboutBrandLink = document.querySelector('.aboutBrand__link');
homeAboutBrandLink.addEventListener('click', onAboutBrandLinkClick);
function onAboutBrandLinkClick(event){
    event.preventDefault();
}