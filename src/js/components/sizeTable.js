import modalFormMarkupTempl from '../../views/components/sizeTable.hbs';
import getRefs from '../refs/refs.js';
import Backdrop from '../components/backdrop.js';
import backdropMarkupTempl from '../../views/components/backdrop.hbs';

const { mainEL } = getRefs;


const sizeTableMarkup = modalFormMarkupTempl();
const backdropMarkup = backdropMarkupTempl(sizeTableMarkup);

export function onBtnClick() {
  mainEL.insertAdjacentHTML('beforebegin', backdropMarkup)
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.remove('is-hidden');
  
  const buttonClose = document.querySelector('[data-modal-close]')
  buttonClose.style.display = 'block'

  buttonClose.addEventListener('click', onButtonCloseModalClick)

}


function onButtonCloseModalClick(event) {
  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.add('is-hidden');
  backdrop.remove()
}
