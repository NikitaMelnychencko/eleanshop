import { refs } from '../../refs/refs.js'
import set from '../../../../src/js/json/exampl.json';
import setHbs from "../../../../src/views/partials/reviews/videoSet.hbs";
import '../../../sass/layout/reviews/_videoSet.scss'
import '../../../images/img/Reviews/poster/Black2V.jpg'

// 1. Содание разметки сета
const createSetList = (set) => {
    return setHbs(set);
}


const setListMarkup = createSetList(set);

refs.setList.insertAdjacentHTML('beforeend',setListMarkup);


// 2. Создание click
setList.addEventListener('click', onOpenModal);
BtnEl.addEventListener('click', onCloseModal);
overlay.addEventListener('click', onCloseModal);


  
  //3. работа модального окна
function onOpenModal(evt) {
 console.log(evt);
// evt.preventDefault();
//     if (evt.target.nodeName !== 'IMG') {
//     return;
}

// function replaceAtribute(src, alt ) {
//   videoEl.src = src;
//   videoEl.alt = alt;
// }

// function onCloseModal(e) {
//    e.videobox.classList.remove('is-open')
//     replaceAtribute(" ", " ")
// };
// // 4. Закрытие модалки с помощью "ESC"
// window.addEventListener('keydown', onCloseModalEsc);

// function onCloseModalEsc(evt) {
//   if (evt.code === 'Escape') {
//     onCloseModal()
//   };
  
// }
