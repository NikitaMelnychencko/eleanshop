import refs from '../../refs/refs';
import showroom_Page from '../../../views/layouts/showroom.hbs';
import pageShowroomSliderData from '../../json/ourShowroom.json';
import pageShowroomMarkupTemplate from '../../../views/partials/home/ourShowRoom.hbs';
import { Forms } from '../../components/forms';
const forms = new Forms('fittingPage');

const formBrandMarkUp = forms.insertForm();
const pageShowroomSliderMarkup = pageShowroomMarkupTemplate({ pageShowroomSliderData });
export const showroomPage = showroom_Page({ pageShowroomSliderMarkup, formBrandMarkUp });

// export function showroomMarkUp() {
//   refs.mainEL.insertAdjacentHTML('beforeend', showroomPage);
// }
