import 'animate.css';
import pageShowroomSliderData from '../../json/ourShowroom.json';
import pageShowroomMarkupTemplate from '../../../views/partials/home/ourShowRoom.hbs';

// Create markup and render in html
export const pageShowroomSliderMarkup = pageShowroomMarkupTemplate({ pageShowroomSliderData });
