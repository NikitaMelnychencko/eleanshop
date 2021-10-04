import form_brand from '../../..//views/partials/brand/formFittingInShowroom.hbs';
import brand_our_advantages from '../../..//views/partials/brand/ourAdvantages.hbs';
import card_brand_our_advantages from '../../..//views/partials/brand/cardBrandOurAdvantages.hbs';
import video_brand from '../../..//views/partials/brand/videoBrand.hbs';
import brandOurAdvantagesCard from '../../json/brandOurAdvantagesCard.json';
const cardBrandOurAdvantages = card_brand_our_advantages(brandOurAdvantagesCard);
export const formBrand = form_brand();
export const videoBrand = video_brand();
export const brandOurAdvantages = brand_our_advantages({ formBrand, cardBrandOurAdvantages });

export function infoAboutBrand() {
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
}
