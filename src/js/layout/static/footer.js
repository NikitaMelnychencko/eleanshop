import refs from '../../refs/refs.js';
import { scrollTo } from '../../components/scrollTo';
import { deliveryRender } from '../../call-list/delivery.js';
import { contactRender } from '../../call-list/contact.js';
import { fittingRender } from '../../call-list/fitting.js';
import { brandRender } from '../../call-list/brand.js';
import { showroomRender } from '../../call-list/showroom.js';
import { catalogRender } from '../../call-list/catalog.js';
import { reviewsRender } from '../../call-list/reviews.js';


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
} = refs;

//=== smooth scrolling on  desktop

desktop.forEach(evt => {
  evt.addEventListener('click', el => {
    scrollTo(0, 700);
    if (el.target) {
    }
  });
});

class FooterLocalStorage {
  constructor() {
    this.linkMenuFooterMobile();
    this.linkMenuFooterMobile();
  }
  //=== addEventListener Footer__Desktop on dataAction and LockalStorage===//
  linkMenuFooterDesktop() {
    linkMenuFooterDesktop.forEach(evt => {
      evt.addEventListener('click', el => {
        const selected = el.target.dataset.atribute;
        if (selected) {
          localStorage.setItem('footer-filter-desktop', selected);
        }
      });
    });
  }

  linkMenuFooterMobile() {
    //=== addEventListener Footer__Mobile on id and LockalStorage===//
    linkMenuFooterMobile.forEach(evt => {
      evt.addEventListener('click', el => {
        const selected = el.target.dataset.atribute;
        if (selected) {
          localStorage.setItem('content', selected);
        }
      });
    });
  }
}
const footerLocalStorage = new FooterLocalStorage();

// === drop-down menu-list ===

class DropdownMenu {
  constructor() {
    this.iconMenu();
  }
  iconMenu() {
    closeOpenPlus.forEach(evt => {
      evt.addEventListener('click', el => {
        const idMenuClickMobile = evt.id;
        const dropDown = document.querySelector('.open-menu');
        if (!el.target.nextElementSibling) {
          scrollTo(0, 700);
          localStorage.setItem('footer-filtr-mobile', idMenuClickMobile);
        } else {
          el.preventDefault();
        }
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
        }
        return;
      });
    });
  }
}
const dropdownMenu = new DropdownMenu();

//==== Hiding the menu when switching to another block

class menuFooter {
  constructor() {
    this.MenuFooterMobile();
  }
  MenuFooterMobile() {
    linkMenuFooterMobile.forEach(evt => {
      evt.addEventListener('click', el => {
        scrollTo(0, 700);
        el.preventDefault();
        const dropDown = document.querySelector('.js-dropdown-none');
        if (el.target) {
          const openMenu = document.querySelector('.open-menu');
          dropDown.classList.remove('js-dropdown-none');
          openMenu.classList.remove('open-menu');
          window.location.href = el.target;
        }
      });
    });
  }
}
const newMenuFooter = new menuFooter();

// Activation deactivation checkbox

class onAgreeCheckBox {
  constructor() {
    this.check();
  }
  check() {
    checkBoxIcon.addEventListener('click', el => {
      const iconCheck = el.currentTarget;
      if (iconCheck) {
        agreeActive.classList.toggle('js-show-and-remove');
      }
    });
  }
}
const newOnAgreeCheckBox = new onAgreeCheckBox();

// Appointment localStorage on input mobile

const arrAll = [...inputStorageDesktop, ...inputStorageMobile];
const arrAllBtn = [mobileSubmitBtn, desktopSubmitBtn];

class inputStorage {
  constructor(mobileSubmitBtn) {
    this.forInput();
    this.clearFormSubmit();
  }

  forInput() {
    arrAll.forEach(el => {
      el.addEventListener('input', e => {
        const subscribe = e.currentTarget.value;
        let idInputValue;
        idInputValue = e.target.id;
        localStorage.setItem(idInputValue, subscribe);
      });
    });
  }
  //   Remove localStorage on input

  clearFormSubmit() {
    arrAllBtn.forEach(el => {
      el.addEventListener('submit', e => {
        e.preventDefault();
        e.currentTarget.reset();
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('user_subscribe');
      });
    });
  }
}
const newInputStorage = new inputStorage();

//=== RENDER ===//
const dataActionCollection = document.querySelectorAll('[data-atribute]');

class renderIsFooter {
  constructor() {
    this.render();
  }
  render() {
    dataActionCollection.forEach(evt => {
      evt.addEventListener('click', el => {
        const targetLink = el.target.dataset.atribute;

        //     //==== catalogRender ===//
        if (
          targetLink === 'autumn-winter' ||
          targetLink === 'evening-sets' ||
          targetLink === 'wedding-and-graduation' ||
          targetLink === 'tux' ||
          targetLink === 'costumes' ||
          targetLink === 'pants' ||
          targetLink === 'blouses'
        ) {
          return catalogRender();
        }
        //     //==== brandRender ===//
        if (
          targetLink === 'about-the-brand' ||
          targetLink === 'about-founders' ||
          targetLink === 'blog'
        ) {
          return brandRender();
        }
        //     //==== showroomRender ===//
        if (targetLink === 'showroom') {
          return showroomRender();
        }
        //     //==== deliveryRender ===//
        if (targetLink === 'delivery' || targetLink === 'return' || targetLink === 'payment') {
          return deliveryRender();
        }

        //     //==== formFittingInShowroom ===//
        if (targetLink === 'fitting') {
          return fittingRender();
        }
        //     //==== reviewsRender ===//
        if (targetLink === 'reviews') {
          return reviewsRender();
        }

        //     //==== ContactsRender ===//
        if (targetLink === 'contacts') {
          return contactRender();
        }
      });
    });
  }
}
const newFooter = new renderIsFooter();

export class classBody {
  constructor(value) {
    this.value = value;
    this.handValue();
  }
  handValue() {
    const BodyClass = 'footer-switch';
    if ('footer-switch' === this.value) {
      document.body.classList.add(this.value);
    } else {
      document.body.classList.remove(BodyClass);
    }
  }
}
