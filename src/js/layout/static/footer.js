import refs from '../../refs/refs.js';
import collection from '../../json/static/linkingPagesDesktopOnClick.json'
import { scrollTo } from '../../components/blockHelp/blockHelp';
import { brandRender, productRender, contactRender, reviewsRender, deliveryRender, favoritesRender, showroomRender, checkoutRender } from '../../call-list';
import { formFittingInShowroom } from '../../layout/brand/formFittingInShowroom';
import { id } from 'postcss-selector-parser';
import { indexOf } from 'lodash';
const {
    closeOpenPlus,
    inputStorageMobile,
    inputStorageDesktop,
    checkBoxIcon,
    agreeActive,
    mobileSubmitBtn,
    desktopSubmitBtn,
    desktop,
    linkMenuFooterDesktop,
    linkMenuFooterMobile,
    showroomLink,
    contactLinkDesktop,
    deliveryLink,
    reviewsLinkDesktop,
    brandRenderMobile, fittingInShowroom } = refs

checkBoxIcon.addEventListener('click', onAgreeCheckBox)
mobileSubmitBtn.addEventListener('submit', onSubmitBtnMobile)
desktopSubmitBtn.addEventListener('submit', onSubmitBtnDesktop)

//===вызов функции таргета ===//

// deliveryLink.addEventListener('click', deliveryRender);
showroomLink.addEventListener('click', showroomRender);
contactLinkDesktop.addEventListener('click', contactRender);
reviewsLinkDesktop.addEventListener('click', reviewsRender);
brandRenderMobile.addEventListener('click', brandRender);
fittingInShowroom.addEventListener('.click', formFittingInShowroom);

//===включение плавной прокрутки на  desktop
desktop.forEach((evt) => {
    evt.addEventListener('click', (el) => {
        scrollTo(0, 700);
        if (el.target) {
        }
    });
});

//=== Прослушивание меню Footer__Desktop по id и запись в LockalStorage===//
linkMenuFooterDesktop.forEach((evt) => {
    const idlinkDesktop = evt.id
    evt.addEventListener('click', (el) => {
        const selected = el.target;
        if (selected) {
            localStorage.setItem(idlinkDesktop, selected)
        }
    });
});

//=== Прослушивание меню Footer__Mobile по id и запись в LockalStorage===//
linkMenuFooterMobile.forEach((evt) => {
    const idlinkMobile = evt.dataset.atribute
    evt.addEventListener('click', (el) => {
        const selected = el.target;
        if (selected) {
            console.log(selected)
            localStorage.setItem(idlinkMobile, selected)
        }
    });


});

// === раскрытия списка-меню === 
closeOpenPlus.forEach((evt) => {
    evt.addEventListener('click', (el) => {
        const idMuneClickMobile = evt.id;
        const clickEL = el.currentTarget;
        if (!el.target.nextElementSibling) {
            scrollTo(0, 700);

            localStorage.setItem(idMuneClickMobile, clickEL)
        }
        el.preventDefault()
        const test = document.querySelector('.dropdown-content')
        const dropDown = document.querySelector('.open-menu');
        if (el.target.nextElementSibling) {
            if (dropDown) {
                dropDown.classList.toggle('open-menu')
                dropDown.nextElementSibling.classList.toggle('js-dropdown-none');
                if (el.target === dropDown) {
                    return;
                } else if (el.target === test) {
                    dropDown.parentElement.classList.remove('.js-dropdown-none');
                }
            }
            el.target.classList.toggle('open-menu');
            el.target.nextElementSibling.classList.toggle('js-dropdown-none');
        } else {

            window.location.href = el.target
        }
    });
});

//==== Скрытие меню при переходе на другой блок
linkMenuFooterMobile.forEach((evt) => {
    evt.addEventListener('click', (el) => {
        scrollTo(0, 700);
        el.preventDefault()
        const dropDown = document.querySelector('.js-dropdown-none');
        const openMenu = document.querySelector('.open-menu')
        if (el.target) {
            dropDown.classList.remove('js-dropdown-none')
            openMenu.classList.remove('open-menu')
            window.location.href = el.target
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

//   сброс localStorage на input mobile
function onSubmitBtnMobile(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem('user_subscribe')

}

//   сброс localStorage на input desktop
function onSubmitBtnDesktop(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem('name');
    localStorage.removeItem('email');

}







