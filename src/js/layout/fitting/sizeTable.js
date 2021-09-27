import size from '../../json/sizeTable.json';
import createMarkup from '../../../views/partials/fitting/sizeTable.hbs';
export default { createSizeTable};

const body = document.querySelector('body');

window.addEventListener('keydown', (value) => {
    key(value);
});

//функция создания модалки
function createSizeTable(id) {
    //Передаю масив кнопок в hbs, рендерю разметку в боди
    body.insertAdjacentHTML('beforeend', createBtn(id));
    body.classList.add('.sizeTable__no-scrol');

    const closeBtn = document.querySelector('[data-sizeTable-modalClose]');
    const btnSize = document.querySelector('.sizeTable__size-list');

    closeBtn.addEventListener('click', () => {
    closeModal();
    });
    
    btnSize.addEventListener('click', (value) => {
        sendingValue(value.target.textContent);
    });  
};
//функция создания плашек размеров одежды
function createBtn(id) {
    const Array = size
        //нахожу в json выбраный объект(элемент одежды) и вытягиваю масив размеров
        .find(x => x.id === id).size
        //сортирую размеры по порядку
        .sort((a, b) => Number(Object.keys(a)) - Number(Object.keys(b)))
        // создаю масив плашек размеров те что есть и нет
        .map(value => {
            const array = [];
            if (Object.values(value)[0]) {
                array.push(
                    `<button class="sizeTable__size-list-btn" type="button">${Object.keys(value)[0]}</button>`
                )
            } else {
                array.push(
                    `<button disabled class="sizeTable__size-list-btn sizeTable__disabled" type="button">${Object.keys(value)[0]}</button>`
                )
            }
            return array;
        });
    return createMarkup(Array);
};
//функция отслеживания клавиш
function key(value) {
  	if (value.code === 'Escape') {
		closeModal();
  };
};
//функция удаления модалки
function closeModal() {
    const div = document.querySelector('.sizeTable__backdrop');
    body.classList.remove('.sizeTable__no-scrol');
    div.remove();
    window.removeEventListener('keydown', (value) => {
        key(value);
    });
};
//функция возвражающая строку с размером на карточке которую выбрали
function sendingValue(value) {
    save('sizeClose', value);
    closeModal();
};
//функция записывает выбраный размер в sizeClose в localStorage
function save (key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};