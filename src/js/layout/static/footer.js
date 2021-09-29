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
    checkBoxIcon,
    agreeActive,
    mobileSubmitBtn,
    desktopSubmitBtn,
    footerInput,
    formRegistrMobile,
    testIdInput } = refs

console.log(testIdInput)
checkBoxIcon.addEventListener('click', onAgreeCheckBox)
mobileSubmitBtn.addEventListener('submit', onSubmitBtnMobile)
desktopSubmitBtn.addEventListener('submit', onSubmitBtnDesktop)
console.log(desktopSubmitBtn)
// Функция раскрытия списка-меню
plusLink.forEach((evt) => {
    const sibling = evt.nextElementSibling;
    evt.addEventListener('click', (el, evt) => {
        el.preventDefault()
        sibling.classList.toggle('js-dropdown');
        const arrow = sibling.querySelector('.footer__mobile-list-dropdown');
        if (arrow) {
            arrow.classList.toggle('js-dropdown');
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
    const idInputMobile = evt.id
    evt.addEventListener('input', (el) => {
        const subscribe = el.currentTarget.value;
        console.log(subscribe)
        if (subscribe) {
            localStorage.setItem(idInputMobile, subscribe)
        }
    });
});


// Назначение localStorage на input desktop

inputStorageDesktop.forEach((evt) => {
    const idInputDesktop = evt.id
    evt.addEventListener('input', (el) => {
        const subscribe = el.currentTarget.value;
        console.log(subscribe)
        if (subscribe) {
            localStorage.setItem(idInputDesktop, subscribe)
        }
    });
});

function onSubmitBtnMobile(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem('user_subscribe')

}

function onSubmitBtnDesktop(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem('name');
    localStorage.removeItem('email');

}
// тут ловим все ссылки и перебераем все дата атребуты для преренаправления на нужную страницу
const a = document.querySelectorAll('a')
a.forEach((evt) => {
    const idSeorch = evt.dataset
    evt.addEventListener('click', (el) => {
        const click = el.currentTarget;
        console.log(click)
        if (click === idSeorch) {
            window.location.href = ""
            console.log("Работает?")
        }
    })
});
