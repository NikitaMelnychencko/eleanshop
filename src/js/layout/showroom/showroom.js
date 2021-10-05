import refs from '../../refs/refs';
import showroom_Page from '../../../views/layouts/showroom.hbs';
import pageShowroomSliderData from '../../json/ourShowroom.json';
import pageShowroomMarkupTemplate from '../../../views/partials/home/ourShowRoom.hbs';
import form_brand from '../../..//views/partials/brand/formFittingInShowroom.hbs';
const formBrandMarkUp = form_brand();
const pageShowroomSliderMarkup = pageShowroomMarkupTemplate({ pageShowroomSliderData });
export const showroomPage = showroom_Page({ pageShowroomSliderMarkup, formBrandMarkUp });

// export function showroomMarkUp() {
//   refs.mainEL.insertAdjacentHTML('beforeend', showroomPage);
// }
