// const refs = {
//     plusLink: document.querySelectorAll('.open-menu'),
//     minusLink: document.querySelectorAll('.footer__mobile-icon-menu-close'),
//     openSubMenu: document.querySelector('.footer__mobile-list-dropdown'),
//     isOpenIcon: document.querySelector('.footer__mobile-icon-menu-open'),
//     removeIconPlus: document.querySelector('.footer__mobile-list-item'),

// }

import refs from '../../refs/refs.js'

const { plusLink, minusLink, openSubMenu, isOpenIcon, removeIconPlus } = refs
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
// 


plusLink.forEach((evt) => { /* Для каждого Li списка*/
    console.log(evt)
    const sibl = evt.firstElementChild; /* находим ближайший сестринский элемент */
    console.log(sibl)
    evt.addEventListener('click', (el, evt) => { /* назначаем лишке обработчик события */
        el.preventDefault()/* что бы при клике не перегружалась страница*/
        const plus = sibl.querySelector('.footer__mobile-icon-menu'); /* добираемся до вложенного списка меню */
        console.log(plus)
        if (plus) { /* проверяем есть ли вложенный список */
            plus.classList.toggle('is-open'); /* обрабатываем его класс */
        }
        console.log(sibl)
    });
});