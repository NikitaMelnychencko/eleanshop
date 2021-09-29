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
    footerSectionMobile,
    footerSectionDesktop } = refs

checkBoxIcon.addEventListener('click', onAgreeCheckBox)
// inputStorageMobile.addEventListener('input', onFormInputMobile)
// inputStorageDesktop.addEventListener('input', onFormInputDesktop)
mobileSubmitBtn.addEventListener('submit', onSubmitBtnMobile)
// footerSectionMobile.addEventListener('click', onClickFooterMobileSection)
// footerSectionDesktop.addEventListener('click', onClickFooterDesktopSection)
desktopSubmitBtn.addEventListener('submit', onSubmitBtnDesktop)

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
function onAgreeCheckBox(evt) {
    const iconCheck = evt.currentTarget
    if (iconCheck) {
        agreeActive.classList.toggle('js-show-and-remove')
    }
}

// function onFormInputMobile(evt) {
//     const subscribe = evt.target.value;
//     if (subscribe) {
//         localStorage.setItem('Subscribe-mob', subscribe)
//         console.log(subscribe)
//     }
// }

// function onFormInputDesktop(evt) {
//     const subscribe = evt.target.value;
//     if (subscribe) {
//         localStorage.setItem('Subscribe-data-desk', subscribe)
//         console.log(subscribe)
//     }
// }



// function onClickFooterMobileSection(evt) {
//     const test = evt.target
//     console.log(test)
//     if (test === inputStorageMobile) {
//         console.log("evt.currentTarget === test")
//         // return onFormInputMobile(evt)
//     }
// }

// function onClickFooterDesktopSection(evt) {
//     const test2 = evt.target
//     console.log(test2)
//     if (test2 === inputStorageDesktop) {
//         console.log("evt.currentTarget === test")
//         return onFormInputDesktop(evt)

//     }
// }

// Назначение localStorage на input mobile
inputStorageMobile.forEach((evt) => {
    evt.addEventListener('input', (el) => {
        const subscribe = el.target.value;
        console.log(subscribe)
        if (subscribe) {
            localStorage.setItem('Subscribe-data-mob', subscribe)
        }
    });
});


// Назначение localStorage на input desktop

inputStorageDesktop.forEach((evt) => {
    console.log(evt)
    evt.addEventListener('input', (el) => {
        const subscribe = el.target.value;
        console.log(subscribe)
        if (subscribe) {
            localStorage.setItem('Subscribe-data-desk', subscribe)
        }
    });
});

function onSubmitBtnMobile(evt) {
    evt.preventDefault();
    console.log('evt.target')
}

function onSubmitBtnDesktop(evt) {
    evt.preventDefault();
    console.log(evt.target)
}