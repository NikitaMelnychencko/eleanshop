import { bodyUnfixPosition } from '../components/scroll/scroll';

class Backdrop {
  constructor() {
    this.backdropRef = document.querySelector('[data-modal]');
    this.closeModalBtnRef = document.querySelector('[data-modal-close]');

    this.backdropRef.addEventListener('click', this.onClickBackdrop.bind(this));
    this.closeModalBtnRef.addEventListener('click', this.onClickButton.bind(this));
    window.addEventListener('keyup', this.onKeyPress.bind(this));

    // document.body.classList.add('modal-open');
    this.backdropRef.classList.remove('is-hidden');
  }

  closeModalForm() {
    this.backdropRef.removeEventListener('click', this.onClickBackdrop.bind(this));
    this.closeModalBtnRef.removeEventListener('click', this.onClickButton.bind(this));
    window.removeEventListener('keyup', this.onKeyPress.bind(this));

    // document.body.classList.remove('modal-open');
    this.backdropRef.classList.add('is-hidden');
  }

  onClickButton() {
    this.closeModalForm();
    bodyUnfixPosition();
  }

  onClickBackdrop(event) {
    if (event.target.className === 'wrapper') {
      console.log(`~ event`, event);
      this.closeModalForm();
    }
  }

  onKeyPress(event) {
    switch (event.key) {
      case 'Esc':
      case 'Escape':
        this.closeModalForm();
        break;
    }
  }
}
export default Backdrop;
