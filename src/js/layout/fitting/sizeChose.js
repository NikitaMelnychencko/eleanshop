/* Для проверки работы модалки переместить код ниже в js файл 
//создаю  ТЕСТ кнопку
const body = document.querySelector('body');
body.innerHTML = '<button type="button" dat-OPEN>OPEN - sizeTable.hbs</button>';

import mod from './sizeChose'; //Импортируем функцию. ОБЯЗАТЕЛЬНО!

const { createSizeTable } = mod; //Деструктизируем для доступа без приставки mod. Не обязательно
const OPEN = document.querySelector('[dat-OPEN]'); //Находим кнопку которая откроет модалку   
OPEN.addEventListener('click', () => createSizeTable('2')); //вешаем addEventListener по клику на кнопку 
*/

//Описание самого вызова
/* 
createSizeTable() -- функция которая вызывает модальное окно ожидает один параметр id
                     объекта из json который отвечает за выбраный товар от туда береться 
                     объект size в котором ключ это размер, а значение это буль наличия товара  

createSizeTable('2') -- вот пример вызова функции. '2' - это id из объекта
*/

import size from '../../json/sizeChose.json';
import createMarkup from '../../../views/partials/fitting/sizeChose.hbs';
export default { createSizeTable };

const body = document.querySelector('body');

window.addEventListener('keydown', value => {
  const sizeTable = document.querySelector('.size-table-backdrop');
  if (sizeTable) {
    key(value);
  }
});
//функция создания модалки
function createSizeTable(id) {
  //Передаю масив кнопок в hbs, рендерю разметку в боди
  body.insertAdjacentHTML('beforeend', createBtn(id));
  body.classList.add('.size-table-no-scrol');

  const closeBtn = document.querySelector('[data-size-table-modal-close]');
  const btnSize = document.querySelector('.size-table-size-list');

  closeBtn.addEventListener('click', () => {
    closeModal();
  });

  btnSize.addEventListener('click', value => {
    if (value.target.nodeName === 'BUTTON') {
      sendingValue(value.target.textContent);
    }
  });
}
//функция создания плашек размеров одежды
function createBtn(id) {
  const Array = size
    //нахожу в json выбраный объект(элемент одежды) и вытягиваю масив размеров
    .find(x => x.id === id)
    .size//сортирую размеры по порядку
    .sort((a, b) => Number(Object.keys(a)) - Number(Object.keys(b)))
    // создаю масив плашек размеров те что есть и нет
    .map(value => {
      const array = [];
      if (Object.values(value)[0]) {
        array.push(
          `<button class="size-table-size-list-btn" type="button">${
            Object.keys(value)[0]
          }</button>`,
        );
      } else {
        array.push(
          `<button disabled class="size-table-size-list-btn size-table-disabled" type="button">${
            Object.keys(value)[0]
          }</button>`,
        );
      }
      return array;
    });
  return createMarkup(Array);
}
//функция отслеживания клавиш
function key(value) {
  if (value.code === 'Escape') {
    closeModal();
  }
}
//функция удаления модалки
function closeModal() {
  const div = document.querySelector('.size-table-backdrop');
  body.classList.remove('.size-table-no-scrol');
  div.remove();
  window.removeEventListener('keydown', value => {
    key(value);
  });
}
//функция возвражающая строку с размером на карточке которую выбрали
function sendingValue(value) {
  save('sizeClose', value);
  closeModal();
}
//функция записывает выбраный размер в sizeClose в localStorage
function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
}
