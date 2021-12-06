import pageInInstagramSliderData from '../../json/inInstagram.json';
import pageInInstagramMarkupTemplate from '../../../views/partials/home/inInstagram.hbs';

// Create markup and render in html
export const pageInInstagramSliderMarkup = pageInInstagramMarkupTemplate({
  pageInInstagramSliderData,
});