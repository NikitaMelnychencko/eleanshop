
//создаю  ТЕСТ кнопку
const body = document.querySelector('body');
body.innerHTML = '<button type="button" dat-OPEN>OPEN - sizeTable.hbs</button>';

import mod from './sizeTable'; //Импортируем функцию. ОБЯЗАТЕЛЬНО!

const { createSizeTable } = mod; //Деструктизируем для доступа без приставки mod. Не обязательно
const OPEN = document.querySelector('[dat-OPEN]'); //Находим кнопку которая откроет модалку   
OPEN.addEventListener('click', () => createSizeTable('2')); //вешаем addEventListener по клику на кнопку

createSizeTable('1')
/* 
createSizeTable() -- функция которая вызывает модальное окно ожидает один параметр id
                     объекта из json который отвечает за выбраный твар от туда береться 
                     объект size в котором ключ это размер, а значение это буль наличия товара  

createSizeTable('2') -- вот пример вызова функции. '2' - это id из объекта
*/
