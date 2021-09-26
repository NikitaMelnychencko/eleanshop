import size from '../../json/sizeTable.json';
import createMarkup from '../../../views/partials/fitting/sizeTable.hbs';



const body = document.querySelector('body');



body.insertAdjacentHTML('afterbegin', createMarkup());


//вешаю клас на боди что бы не скролилась страница
body.classList.toggle('.sizeTable__no-scrol');


console.log(size);



