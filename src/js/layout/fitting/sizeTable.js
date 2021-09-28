import sizeTable_sizeTable from '../../../views/partials/fitting/sizeTable.hbs';
import sizeTable_markupAboutSizeTable from '../../../views/layouts/fitting.hbs';
import videoSlider_videoSliderCreate from './videoSlider'
import informationAboutFitting_informationCreate from './informationAboutFitting'
import'../../../images/img/elean47390.png'
const menuEl = document.querySelector('main')
const sizeTable_tableCreate = sizeTable_sizeTable();
const fitting = sizeTable_markupAboutSizeTable( {sizeTable_tableCreate,videoSlider_videoSliderCreate,informationAboutFitting_informationCreate})
menuEl.insertAdjacentHTML('beforeend',  fitting)
