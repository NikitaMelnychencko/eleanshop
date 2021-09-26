import size from '../../json/sizeTable.json';
import createMarkup from '../../../views/partials/fitting/sizeTable.hbs';


const body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', createMarkup());


//вешаю клас на боди что бы не скролилась страница
body.classList.toggle('.sizeTable__no-scrol');

console.log(size);
console.log(size[0].size);


//поиск по масиву  size нужного товара по id
const getUserById = (arr, id) => arr.find(x => x.id === id);
console.log(getUserById(size, '2'));

//добрался до масива с размерами и записал в константу
const s = getUserById(size, '1').size;

console.log(s);


const sortByActiveDays = (a, b) => a.Object.keys(value)[0] - b.Object.keys(value)[1];

console.log(s.sort(sortByActiveDays));



//создал масив разметки 
const ar = s.map(value => {
    console.log(Object.keys(value)[0]);
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

console.log(ar);
//разложить на ключ и значение
/* const entries = Object.entries(s);

for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`);
} */

//console.log(s.entries);

//<button class="sizeTable__size-list-btn" type="button">40</button>

/* console.log( s.entries((value) =>
  `<li style="margin-bottom: 10px">
      <img
        src="${value[0]}"
        alt="${value[1]}"
        style="
          max-width: 100%;
          height: auto;
          display: block;
          background-size: cover;
        "
      />
    </li>`).join('')
); */



/* 
1. Найти товар с размерами
2. добраться до размеров 
3. отправить на отрисовку количество и наличие размеров

*/