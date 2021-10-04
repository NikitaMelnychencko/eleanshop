import videoSlider from '../../../views/partials/fitting/videoSlider.hbs';
import videoSlider_markupVideo from '../../../views/layouts/fitting.hbs';
import '../../../images/svg/arrow-left.svg'
import '../../../images/svg/arrow-right.svg'


const menuEl = document.querySelector('main')
const videoSlider_videoSliderCreate = videoSlider();

export default videoSlider_videoSliderCreate


//SLIDER SETTINGS
$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        autoPlaySpeed: 2000,
        pauseFocus: true,
        pauseHover: true,
        pauseOnDotsHover: true,
        swipe: true,
        
        
      //  mobileFirst: true,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });
});
