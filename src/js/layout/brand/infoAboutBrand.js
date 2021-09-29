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
import 'https://www.youtube.com/iframe_api';

const player = document.querySelector('player')
const formBrand = form_brand();
const brandInfo = brand_info({formBrand});


refs.brand.insertAdjacentHTML('beforeend', brandInfo);
      // // 2. This code loads the IFrame Player API code asynchronously.
      // var tag = document.createElement('script');

      // tag.src = "https://www.youtube.com/iframe_api";
      // var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // // 3. This function creates an <iframe> (and YouTube player)
      // //    after the API code downloads.
      // var player;
      // function onYouTubeIframeAPIReady() {
      //   player = new YT.Player('player', {
      //     height: '360',
      //     width: '640',
      //     videoId: 'M7lc1UVf-VE',
      //     events: {
      //       'onReady': onPlayerReady,
      //       'onStateChange': onPlayerStateChange
      //     }
      //   });
      // }

      // // 4. The API will call this function when the video player is ready.
      // function onPlayerReady(event) {
      //   event.target.playVideo();
      // }

      // // 5. The API calls this function when the player's state changes.
      // //    The function indicates that when playing a video (state=1),
      // //    the player should play for six seconds and then stop.
      // var done = false;
      // function onPlayerStateChange(event) {
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }
      // }
      // function stopVideo() {
      //   player.stopVideo();
      // }


//       const YTPlayer = require('yt-player')
// const player = new YTPlayer('#player')
 
// player.load('GKSRyLdjsPA')
// player.setVolume(100)
 
// player.on('playing', () => {
//   console.log(player.getDuration()) // => 351.521
// })



const YTPlayer = require('yt-player')
// const player = new YTPlayer('#player')

// player.load('fpyu_GgmpQc')
// player.setVolume(100)

// player.on('playing', () => {
//   console.log(player.getDuration()) // => 351.521
// })

const refBrand = {
  player: document.querySelector('#player')
}

const opts = {
  autoplay: true,
width: 500,
height: 500,
videoId: 'JHAof88rAuI',
annotations: false,
}

const yplayer = new YTPlayer(refBrand.player, opts);

console.log(yplayer);

refBrand.player.insertAdjacentHTML('beforeend', yplayer);

