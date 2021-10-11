import refs from '../../refs/refs.js';
import { scrollTo } from '../../components/blockHelp/blockHelp';
import {
  catalogRender,
  fittingRender,
  brandRender,
  productRender,
  contactRender,
  reviewsRender,
  deliveryRender,
  favoritesRender,
  showroomRender,
  checkoutRender,
} from '../../call-list';
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
  dropDownList,
  dropDown,
} = refs;

checkBoxIcon.addEventListener('click', onAgreeCheckBox);
mobileSubmitBtn.addEventListener('submit', onSubmitBtnMobile);
desktopSubmitBtn.addEventListener('submit', onSubmitBtnDesktop);

//=== smooth scrolling on  desktop
desktop.forEach(evt => {
  evt.addEventListener('click', el => {
    scrollTo(0, 700);
    if (el.target) {
    }
  });
});

//=== addEventListener Footer__Desktop on dataAction and LockalStorage===//
linkMenuFooterDesktop.forEach(evt => {
  evt.addEventListener('click', el => {
    const selected = el.target.dataset.atribute;
    if (selected) {
      localStorage.setItem('footer-filter-desktop', selected);
    }
  });
});

//=== addEventListener Footer__Mobile on id and LockalStorage===//
linkMenuFooterMobile.forEach(evt => {
  evt.addEventListener('click', el => {
    const selected = el.target.dataset.atribute;
    if (selected) {
      localStorage.setItem('content', selected);
    }
  });
});

// === drop-down menu-list ===
closeOpenPlus.forEach(evt => {
  evt.addEventListener('click', el => {
    const idMuneClickMobile = evt.id;
    if (!el.target.nextElementSibling) {
      scrollTo(0, 700);
      localStorage.setItem('footer-filtr-mobile', idMuneClickMobile);
    }
    el.preventDefault();
    if (el.target.nextElementSibling) {
      if (dropDown) {
        dropDown.classList.toggle('open-menu');
        dropDown.nextElementSibling.classList.toggle('js-dropdown-none');
        if (el.target === dropDown) {
          return;
        } else if (el.target === dropDownList) {
          dropDown.parentElement.classList.remove('.js-dropdown-none');
        }
      }
      el.target.classList.toggle('open-menu');
      el.target.nextElementSibling.classList.toggle('js-dropdown-none');
    } else {
      window.location.href = el.target;
    }
  });
});

//==== Hiding the menu when switching to another block
linkMenuFooterMobile.forEach(evt => {
  evt.addEventListener('click', el => {
    scrollTo(0, 700);
    el.preventDefault();
    const dropDown = document.querySelector('.js-dropdown-none');
    const openMenu = document.querySelector('.open-menu');
    if (el.target) {
      dropDown.classList.remove('js-dropdown-none');
      openMenu.classList.remove('open-menu');
      window.location.href = el.target;
    }
  });
});

// Activation deactivation checkbox
function onAgreeCheckBox(evt) {
  const iconCheck = evt.currentTarget;
  if (iconCheck) {
    agreeActive.classList.toggle('js-show-and-remove');
  }
}

// Appointment localStorage on input mobile
inputStorageMobile.forEach(evt => {
  evt.addEventListener('input', el => {
    const subscribe = el.currentTarget.value;
    if (subscribe) {
      localStorage.setItem(idInputMobile, subscribe);
    }
  });
});

// Appointment localStorage на input desktop
inputStorageDesktop.forEach(evt => {
  const idInputDesktop = evt.id;
  evt.addEventListener('input', el => {
    const subscribe = el.currentTarget.value;
    if (subscribe) {
      localStorage.setItem(idInputDesktop, subscribe);
    }
  });
});

//   Remuve localStorage on input mobile
function onSubmitBtnMobile(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('user_subscribe');
}

//   Remuve localStorage on input desktop
function onSubmitBtnDesktop(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('name');
  localStorage.removeItem('email');
}

//=== RENDER ===//

const dataActionCollectio = document.querySelectorAll('[data-atribute]');

dataActionCollectio.forEach(evt => {
  evt.addEventListener('click', el => {
    const targetLink = el.target.dataset.atribute;
    //==== MobileRender ===//

    //==== catalogRender ===//
    if (
      targetLink === 'autumn-winter' ||
      targetLink === 'evening-sets' ||
      targetLink === 'wedding-and-graduation' ||
      targetLink === 'tux' ||
      targetLink === 'costumes' ||
      targetLink === 'pants' ||
      targetLink === 'blouses'
    )
    {
        return catalogRender();
    }

    //==== brandRender ===//
    if (
      targetLink === 'about-the-brand' ||
      targetLink === 'about-founders' ||
      targetLink === 'blog'
    ) {
      return brandRender();
    }
    //==== showroomRender ===//
    if (targetLink === 'showroom') {
      return showroomRender();
    }

    //==== deliveryRender ===//
    if (targetLink === 'delivery' || targetLink === 'return' || targetLink === 'payment') {
      return deliveryRender();
    }

    //==== showroomRender ===//
    if (targetLink === 'showroom' || targetLink === 'showroom') {
      return showroomRender();
    }

    //==== formFittingInShowroom ===//
    if (targetLink === 'fitting') {
      return fittingRender();
    }

    //==== reviewsRender ===//
    if (targetLink === 'reviews') {
      return reviewsRender();
    }

    //==== renderDesktop ===//

    //==== DeliveryRender ===//
    if (targetLink === 'delivery' || targetLink === 'payment' || targetLink === 'return') {
      return deliveryRender();
    }

    //==== FittingRender ===//
    if (targetLink === 'fitting') {
      return fittingRender();
    }
    //==== ContactsRender ===//
    if (targetLink === 'contacts') {
      return contactRender();
    }
  });
});

export function classBody(value) {
  const BodyClass = 'footer-switch';
  if (BodyClass === value) {
    document.body.classList.add(value);
  } else {
    document.body.classList.remove(BodyClass);
  }
}
