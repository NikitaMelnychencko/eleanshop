import videoSlider from '../../../views/partials/fitting/videoSlider.hbs';
// import videoSlider_markupVideo from '../../../views/layouts/fitting.hbs';
import set from '../../../../src/js/json/videoSet.json';

// const menuEl = document.querySelector('main');
export const videoSlider_videoSliderCreate = videoSlider(set);
// export default videoSlider_videoSliderCreate;

export function fittingVideoSliderPlayer() {
  const fittingRefs = {
    play: document.querySelectorAll('.video-fitting-svg'),
    video: document.querySelectorAll('.video-fitting__image'),
    fullscreen: document.querySelectorAll('.video-fitting-fullscreen'),
    link: document.querySelector('.slider'),
  };

  fittingRefs.play.forEach((element, index) => {
    element.addEventListener('click', el => {
      fittingRefs.video[index].play();
    });
    fittingRefs.video[index].addEventListener('click', ez => {
      fittingRefs.video[index].pause();
    });
    fittingRefs.fullscreen[index].addEventListener('click', ez => {
      if (fittingRefs.video[index].requestFullscreen) {
        fittingRefs.video[index].requestFullscreen();
      } else if (fittingRefs.video[index].mozRequestFullScreen) {
        /* Firefox */
        fittingRefs.video[index].mozRequestFullScreen();
      } else if (fittingRefs.video[index].webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        fittingRefs.video[index].webkitRequestFullscreen();
      } else if (fittingRefs.video[index].msRequestFullscreen) {
        /* IE/Edge */
        fittingRefs.video[index].msRequestFullscreen();
      }
    });
  });
  fittingRefs.video.forEach((videos, index) => {
    videos.addEventListener('play', ez => {
      fittingRefs.play[index].style.display = 'none';
      fittingRefs.fullscreen[index].style.display = 'block';
    });
    videos.addEventListener('pause', ez => {
      fittingRefs.play[index].style.display = 'block';
      fittingRefs.fullscreen[index].style.display = 'none';
    });
  });
}
