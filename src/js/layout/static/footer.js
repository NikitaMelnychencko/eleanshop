import { stringify } from 'postcss';
import refs from '../../refs/refs.js'

const {
    plusLink,
    minusLink,
    openSubMenu,
    isOpenIcon,
    removeIconPlus,
    iconMenu,
    inputStorageMobile,
    inputStorageDesktop,
    formSubmit,
    checkBoxIcon,
    agreeActive,
    mobileSubmitBtn,
    desktopSubmitBtn,
    footerInput,
    formRegistrMobile } = refs

saveLocalStorage()

checkBoxIcon.addEventListener('click', onAgreeCheckBox)
mobileSubmitBtn.addEventListener('click', onSubmitBtnMobile)
desktopSubmitBtn.addEventListener('click', onSubmitBtnDesktop)

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

/*удаление иконки плюс при раскрытии спика*/

plusLink.forEach((evt) => {
    const sibl = evt.firstElementChild;
    evt.addEventListener('click', (el, evt) => {
        el.preventDefault()
        const plus = sibl.querySelector('.footer__mobile-icon-menu');
        if (plus) {
            plus.classList.toggle('is-open');
        }
    });
});
// Активация деактивация чекбокса
function onAgreeCheckBox(evt) {
    const iconCheck = evt.currentTarget
    if (iconCheck) {
        agreeActive.classList.toggle('js-show-and-remove')
    }
}

// Назначение localStorage на input mobile

inputStorageMobile.forEach((evt) => {
    evt.addEventListener('input', (el) => {
        const subscribe = el.currentTarget.value;
        console.log(subscribe)
        if (subscribe) {
            localStorage.setItem(evt.target.name, evt.target.value)
        }
    });
});
console.log(formSubmit.name)
formSubmit.forEach((evt) => {
    evt.addEventListener('input', (el) => {
        console.log(subscribe)
        if (subscribe) {
            localStorage.setItem(evt.target.name, evt.target.value)
        }
    });
})


// Назначение localStorage на input desktop

inputStorageDesktop.forEach((evt) => {
    console.log(evt)
    evt.addEventListener('input', (el) => {
        const subscribe = el.currentTarget.value;
        console.log(subscribe)
        if (subscribe) {
            localStorage.setItem('Subscribe-data-desk', subscribe)
        }
        if (subscribe) {
            el.currentTarget.reset()
        }
    });
});

function onSubmitBtnMobile(evt) {
    evt.preventDefault();
    console.log(evt.currentTarget)
    if (evt.currentTarget) {
        console.log('Салют')
    }
}

function onSubmitBtnDesktop(evt) {
    evt.preventDefault();
    console.log(evt.target)

}

function saveLocalStorage() {
    const saveInput = localStorage.getItem('Subscribe-data-desk')
    if (saveInput) {
        console.log(saveInput)
        inputStorageDesktop.value = saveInput;
    }
}