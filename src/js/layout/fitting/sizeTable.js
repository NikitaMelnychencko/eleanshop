import sizeTable_sizeTable from '../../../views/partials/fitting/sizeTable.hbs';
import sizeTable_markupAboutSizeTable from '../../../views/layouts/fitting.hbs';
import videoSlider_videoSliderCreate from './videoSlider.js'
import informationAboutFitting_informationCreate from './informationAboutFitting.js'
const sizeTable_tableCreate = sizeTable_sizeTable();
export const fitting = sizeTable_markupAboutSizeTable( {sizeTable_tableCreate,videoSlider_videoSliderCreate,informationAboutFitting_informationCreate})

