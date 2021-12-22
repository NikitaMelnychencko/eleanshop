export function brandPlayer() {
  const brandVideoRefs = {
    play: document.querySelector('.brand-video__player-svg'),
    video: document.querySelector('.brand-video__player-play'),
    fullscreen: document.querySelector('.brand-video__player-fullscreen'),
    link: document.querySelector('.brand-video'),
  };

  brandVideoRefs.link.addEventListener('click', ez => {
    if (ez.target === brandVideoRefs.video && ez.target !== brandVideoRefs.play) {
      brandVideoRefs.video.pause();
    } else if (ez.target === brandVideoRefs.play) {
      brandVideoRefs.video.play();
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
