import refs from '../../refs/refs.js';
import { scrollTo } from '../../components/blockHelp/blockHelp';
import { formFittingInShowroom } from '../../layout/fitting/formFittingInShowroom';
import { brandRender, productRender, contactRender, reviewsRender, deliveryRender, favoritesRender, showroomRender, checkoutRender } from '../../call-list';
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
} = refs

checkBoxIcon.addEventListener('click', onAgreeCheckBox)
mobileSubmitBtn.addEventListener('submit', onSubmitBtnMobile)
desktopSubmitBtn.addEventListener('submit', onSubmitBtnDesktop)

//=== smooth scrolling on  desktop
desktop.forEach((evt) => {
    evt.addEventListener('click', (el) => {
        scrollTo(0, 700);
        if (el.target) {
        }
    });
});

//=== addEventListener Footer__Desktop on dataAction and LockalStorage===//
linkMenuFooterDesktop.forEach((evt) => {
    const idlinkDesktop = evt.textContent
    evt.addEventListener('click', (el) => {
        const selected = el.target.dataset.atribute;
        if (selected) {
            localStorage.setItem(idlinkDesktop, selected)
        }
    });
});

//=== addEventListener Footer__Mobile on id and LockalStorage===//
linkMenuFooterMobile.forEach((evt) => {
    const idlinkMobile = evt.textContent
    console.log(idlinkMobile)
    evt.addEventListener('click', (el) => {
        const selected = el.target.dataset.atribute;
        console.log(selected)
        if (selected) {
            localStorage.setItem(idlinkMobile, selected)
        }
    });
});

// === drop-down menu-list ===
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

//==== Hiding the menu when switching to another block
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

// Activation deactivation checkbox
function onAgreeCheckBox(evt) {
    const iconCheck = evt.currentTarget
    if (iconCheck) {
        agreeActive.classList.toggle('js-show-and-remove')
    }
}

// Appointment localStorage on input mobile
inputStorageMobile.forEach((evt) => {

    evt.addEventListener('input', (el) => {
        const subscribe = el.currentTarget.value;
        if (subscribe) {
            localStorage.setItem(idInputMobile, subscribe)
        }
    });
});


// Appointment localStorage на input desktop
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

//   Remuve localStorage on input mobile
function onSubmitBtnMobile(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem('user_subscribe')

}

//   Remuve localStorage on input desktop
function onSubmitBtnDesktop(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem('name');
    localStorage.removeItem('email');

}

const dataActionCollectio = document.querySelectorAll('[data-atribute]')

dataActionCollectio.forEach((evt) => {
    evt.addEventListener('click', (el) => {
        console.log(el.target.dataset)
        const targetLink = el.target.dataset.atribute
        //==== MobileRender ===//

        //==== catalogRender ===//
        if (targetLink === 'autumn-winter' || targetLink === 'evening-sets' || targetLink === 'edding-and-graduation' || targetLink === 'the-tuxedo' || targetLink === 'costumes' || targetLink === 'pants' || targetLink === 'blouses') {
            console.log('catalog')
            return catalogRender()
        }

        //==== brandRender ===//
        if (targetLink === 'about-the-brand' || targetLink === 'about-founders' || targetLink === 'blog') {
            console.log('brandRender');
            return brandRender();
        }
        //==== showroomRender ===//
        if (targetLink === 'showroom') {
            console.log('showroomRender');
            return showroomRender();
        }

        //==== deliveryRender ===//
        if (targetLink === 'delivery' || targetLink === 'return' || targetLink === 'payment') {
            console.log('deliveryRender');
            return deliveryRender();
        }

        //==== showroomRender ===//
        if (targetLink === 'showroom' || targetLink === 'showroom') {
            console.log('showroomRender');
            return showroomRender();
        }

        //==== formFittingInShowroom ===//
        if (targetLink === 'fitting') {
            console.log('formFittingInShowroom');
            return formFittingInShowroom();
        }

        //==== reviewsRender ===//
        if (targetLink === 'reviews') {
            console.log('reviewsRender');
            return reviewsRender();
        }

        //==== renderDesktop ===//

        //==== DeliveryRender ===//
        if (targetLink === 'Delivery' || targetLink === 'Payment' || targetLink === 'Return') {
            console.log('deliveryRender: Desktop')
            return deliveryRender();
        }

        //==== FittingRender ===//
        if (targetLink === 'Fitting') {
            console.log('formFittingInShowroom: Desktop')
            return formFittingInShowroom();
        }
        //==== ContactsRender ===//
        if (targetLink === 'Contacts') {
            console.log('contactRender: Desktop')
            return contactRender();
        }
    })

});








