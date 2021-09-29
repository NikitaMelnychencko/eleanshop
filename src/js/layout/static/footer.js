import { stringify } from 'postcss';
import refs from '../../refs/refs.js'

const {
    plusLink,
    minusLink,
    openSubMenu,
    isOpenIcon,
    removeIconPlus,
    iconMenu,
    inputStorage,
    formSubmit,
    checkBoxIcon,
    agreeActive,
    mobileSubmitBtn } = refs

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
            plus.classList.add('is-open'); /* обрабатываем его класс */
        }
    });
});

checkBoxIcon.addEventListener('click', onAgreeCheckBox)
inputStorage.addEventListener('input', onFormInput)
mobileSubmitBtn.addEventListener('submit', onSubmitBtnMobile)
desktopSubmitBtn.addEventListener('submit', onSubmitBtnDesktop)
console.log(desktopSubmitBtn)
function onAgreeCheckBox(evt) {
    const iconCheck = evt.currentTarget
    if (iconCheck) {
        agreeActive.classList.toggle('js-show-and-remove')
    }
}

function onFormInput(evt) {
    const subscribe = evt.currentTarget.value;
    localStorage.setItem('Subscribe-data', subscribe)
    console.log(subscribe)

}

function onSubmitBtnMobile(evt) {
    evt.preventDefault();
    // localStorage.setItem('Subscribe-data', submitBt)
    console.log(evt.currentTarget)

}


function onSubmitBtnDesktop(evt) {
    evt.preventDefault();
    // localStorage.setItem('Subscribe-data', submitBt)
    console.log(evt.target)

}


