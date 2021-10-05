import { stringify } from 'postcss';
import refs from '../../refs/refs.js';
import collection from '../../json/linkingPagesFooter/linkingPagesDesktopOnClick.json'
import { scrollTo } from '../../components/blockHelp/blockHelp';
import { productRender, contactRender, deliveryRender, favoritesRender, showroomRender, checkoutRender } from '../../call-list';
import { id } from 'postcss-selector-parser';
import { indexOf } from 'lodash';


const {
    closeOpenPlus,
    dropDown,
    openList,
    openSubMenu,
    inputStorageMobile,
    inputStorageDesktop,
    checkBoxIcon,
    agreeActive,
    mobileSubmitBtn,
    desktopSubmitBtn,
    testIdInput,
    desktop,
    linkMenuFooterDesktop } = refs
checkBoxIcon.addEventListener('click', onAgreeCheckBox)
mobileSubmitBtn.addEventListener('submit', onSubmitBtnMobile)
desktopSubmitBtn.addEventListener('submit', onSubmitBtnDesktop)
const test = document.querySelector('.footer__desktop-list')
test.addEventListener('click', noTestDesktop)

test.addEventListener('click', noTestDesktop)
function noTestDesktop(evt) {
    collection.forEach((el, indx) => {
        const test2 = evt.target.id
        console.log(el.id === test2)



    });
}

function testOpen(evt) {
    console.log('все ок')
}


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

// === раскрытия списка-меню === 
closeOpenPlus.forEach((evt) => {
    evt.addEventListener('click', (el) => {
        if (!el.target.nextElementSibling) {
            scrollTo(0, 700);
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
            // console.log(el.target)
            // console.log(el.target.nextElementSibling)
            el.target.nextElementSibling.classList.toggle('js-dropdown-none');
        } else {
            window.location.href = el.target
        }
    });
});

//==== Скрытие меню при переходе на другой блок
dropDown.forEach((evt) => {
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

//=== localStorage menu footer ===//




