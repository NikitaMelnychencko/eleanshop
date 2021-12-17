export class VideoSetPlayer {
  constructor() {}

  clickListener() {
    this.box = document.querySelector('.video-set-js');
    this.box.onclick = e => {
      if (e.target.nodeName === 'svg' || e.target.nodeName === 'VIDEO') {
        if (e.target.attributes.name.nodeValue === 'play') {
          this.playVideo(e.target.previousElementSibling);
          return;
        } else if (e.target.attributes.name.nodeValue === 'fullscreen') {
          this.fullscreen(e.target.previousElementSibling.previousElementSibling);
          return;
        } else if (e.target.attributes.name.nodeValue === 'video') {
          this.pauseVideo(e.target);
          return;
        }
      } else if (e.target.nodeName === 'use') {
        if (e.target.parentElement.attributes.name.nodeValue === 'play') {
          this.playVideo(e.target.parentElement.previousElementSibling);
          return;
        } else if (e.target.parentElement.attributes.name.nodeValue === 'fullscreen') {
          this.fullscreen(e.target.parentElement.previousElementSibling.previousElementSibling);
          return;
        }
      }
      return;
    };
  }

  playVideo(e) {
    e.play();
    this.playToFullscreenBtn(e);
  }

  pauseVideo(e) {
    e.pause();
    this.fullscreenToPlayBtn(e);
  }

  playToFullscreenBtn(e) {
    e.nextElementSibling.style.display = 'none';
    e.nextElementSibling.nextElementSibling.style.display = 'block';
  }

  fullscreenToPlayBtn(e) {
    e.nextElementSibling.style.display = 'block';
    e.nextElementSibling.nextElementSibling.style.display = 'none';
  }

  fullscreen(e) {
    if (e.requestFullscreen) {
      e.requestFullscreen();
    } else if (e.mozRequestFullScreen) {
      /* Firefox */
      e.mozRequestFullScreen();
    } else if (e.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      e.webkitRequestFullscreen();
    } else if (e.msRequestFullscreen) {
      /* IE/Edge */
      e.msRequestFullscreen();
    }
  }
}
