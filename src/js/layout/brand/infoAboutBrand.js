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
  //   const playerBrandStart = {
  //     meow: document.querySelector('.brand-video__player-svg'),
  //     vidos: document.querySelector('.brand-video__player-play'),
  //     preview: document.querySelector('.brand-video__player'),
  //   };
  //   const { meow, vidos, preview } = playerBrandStart;
  //   meow.addEventListener('click', e => {
  //     vidos.classList.remove('brandVideoDisplay');
  //     meow.classList.add('brandVideoDisplay');
  //     preview.classList.remove('brandVideoPreview');
  //   });
}

export function brandPlayer() {
  const brandVideoRefs = {
    play: document.querySelector('.brand-video__player-svg'),
    video: document.querySelector('.brand-video__player-play'),
    fullscreen: document.querySelector('.brand-video__player-fullscreen'),
    link: document.querySelector('.brand-video'),
  };

  // brandVideoRefs.play.addEventListener('click', el => {
  //   brandVideoRefs.video.play();
  //   console.log('play');
  // });

  brandVideoRefs.link.addEventListener('click', ez => {
    if (ez.target === brandVideoRefs.video && ez.target !== brandVideoRefs.play) {
      brandVideoRefs.video.pause();
      // console.log('pause');
    } else if (ez.target === brandVideoRefs.play) {
      brandVideoRefs.video.play();
      // console.log('play');
    }
  });

  brandVideoRefs.fullscreen.addEventListener('click', ez => {
    if (brandVideoRefs.video.requestFullscreen) {
      brandVideoRefs.video.requestFullscreen();
    } else if (brandVideoRefs.video.mozRequestFullScreen) {
      /* Firefox */
      brandVideoRefs.video.mozRequestFullScreen();
    } else if (brandVideoRefs.video.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      brandVideoRefs.video.webkitRequestFullscreen();
    } else if (brandVideoRefs.video.msRequestFullscreen) {
      /* IE/Edge */
      brandVideoRefs.video.msRequestFullscreen();
    }
  });

  brandVideoRefs.video.addEventListener('play', ez => {
    brandVideoRefs.play.style.display = 'none';
    brandVideoRefs.fullscreen.style.display = 'block';
  });
  brandVideoRefs.video.addEventListener('pause', ez => {
    brandVideoRefs.play.style.display = 'block';
    brandVideoRefs.fullscreen.style.display = 'none';
  });
}
