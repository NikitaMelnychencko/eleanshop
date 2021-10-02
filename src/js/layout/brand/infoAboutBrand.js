import refs from '../../refs/refs';
import brand_info from '../../../views/layouts/brand.hbs';
import form_brand from '../../..//views/partials/brand/formFittingInShowroom.hbs';
import brand_our_advantages from '../../..//views/partials/brand/ourAdvantages.hbs';
import card_brand_our_advantages from '../../..//views/partials/brand/cardBrandOurAdvantages.hbs';
import video_brand from '../../..//views/partials/brand/videoBrand.hbs';
import brandOurAdvantagesCard from '../../json/brandOurAdvantagesCard.json';
const cardBrandOurAdvantages = card_brand_our_advantages(brandOurAdvantagesCard);
const formBrand = form_brand();
const videoBrand = video_brand();
const brandOurAdvantages = brand_our_advantages({ formBrand, cardBrandOurAdvantages });
const brandInfo = brand_info({ brandOurAdvantages, videoBrand });
refs.mainEL.insertAdjacentHTML('beforeend', brandInfo);

const playerBrandStart = {
  meow: document.querySelector('.brand-video__player-svg'),
  vidos: document.querySelector('.brand-video__player-play'),
  preview: document.querySelector('.brand-video__player'),
};

const { meow, vidos, preview } = playerBrandStart;

meow.addEventListener('click', e => {
  vidos.classList.remove('brandVideoDisplay');
  meow.classList.add('brandVideoDisplay');
  preview.classList.remove('brandVideoPreview');
});
