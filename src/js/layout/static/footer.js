import refs from '../../refs/refs.js'

const { plusLink, minusLink, openSubMenu, isOpenIcon, removeIconPlus, iconMenu,
    inputStorage } = refs
console.log(inputStorage)

// Функция раскрытия списка-меню

plusLink.forEach((evt) => { /* Для каждого Li в списке */
    const sibling = evt.nextElementSibling; /* находим ближайший сестринский элемент */
    evt.addEventListener('click', (el, evt) => { /* назначаем лишке обработчик события */
        el.preventDefault()/* что бы при клике не перегружалась страница*/
        sibling.classList.toggle('js-dropdown'); /* добавляем/убираем класс у сестринского элемента */
        const arrow = sibling.querySelector('.footer__mobile-list-dropdown'); /* добираемся до вложенного списка меню */
        if (arrow) { /* проверяем есть ли вложенный списка */
            arrow.classList.toggle('js-dropdown'); /* обрабатываем его класс */
        }
    });
});
// input-storage


/*удаление иконки плюс при раскрытии спика*/

plusLink.forEach((evt) => { /* Для каждого Li списка*/
    const sibl = evt.firstElementChild; /* находим ближайший сестринский элемент */
    evt.addEventListener('click', (el, evt) => { /* назначаем лишке обработчик события */
        el.preventDefault()/* что бы при клике не перегружалась страница*/
        const plus = sibl.querySelector('.footer__mobile-icon-menu'); /* добираемся до вложенного списка меню */
        if (plus) { /* проверяем есть ли вложенный список */
            plus.classList.toggle('is-open'); /* обрабатываем его класс */
        }
    });
});


inputStorage.forEach((evt) => { /* Для каждого Li списка*/
    evt.addEventListener('input', (evt) => { /* назначаем лишке обработчик события */
        evt.preventDefault()/* что бы при клике не перегружалась страница*/
        console.log(evt.target)
        if (evt) {
            localStorage.setItem('Input', 'js-footer-input')
        }
        // else {
        //     localStorage.removeItem('Input')
        // }
    });
});


