import refs from '../refs/refs.js';
import { classBody } from '../layout/static/footer.js';
import { FetchSection } from '../data/fetch_section';
import { Forms } from '../components/forms';
import { blockHelpRender } from './help';
import { VideoSetPlayer } from '../components/videoSetPlayer.js';
//=hbs=
import sizeTable_markup from '../../views/layouts/fitting.hbs';
import informationAboutFitting from '../../views/partials/fitting/informationAboutFitting.hbs';
import sizeTable_sizeTable from '../../views/partials/fitting/sizeTable.hbs';
import videoSlider from '../../views/partials/fitting/videoSlider.hbs';
//=js=
import { openVideoSlider } from '../layout/fitting/videoSlider.js';

export function fittingRender() {
  const videoSetPlayer = new VideoSetPlayer();
  const formsPage = new Forms('fittingPage');
  const formBrand = {
    page: formsPage.insertForm(),
  };
  const initFetchSection = new FetchSection({
    firstParam: 'components',
  });
  const fittingData = initFetchSection._state;

  fittingData.then(data => {
    const informationAboutFitting_informationCreate = informationAboutFitting();
    const sizeTable_tableCreate = sizeTable_sizeTable();
    const videoSlider_videoSliderCreate = videoSlider(data.videoFitting);
    const initFooter = new classBody();
    const fittingMarkUp = sizeTable_markup({
      sizeTable_tableCreate,
      videoSlider_videoSliderCreate,
      informationAboutFitting_informationCreate,
      formBrand,
    });
    refs.mainEL.innerHTML = fittingMarkUp;
    openVideoSlider();
    videoSetPlayer.clickListener();
    blockHelpRender();
    formsPage.init();
  });
}
