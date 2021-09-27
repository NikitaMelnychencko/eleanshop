class Backdrop {
  constructor() {
    this.backdropRef = document.querySelector('[data-modal]');
    this.closeModalBtnRef = document.querySelector('[data-modal-close]');

    backdropRef.addEventListener('click', this.onClickButton);
    closeModalBtnRef.addEventListener('click', this.onClickButton);
    window.addEventListener('keyup', this.onKeyPress);
  }

  closeModalForm() {
    document.body.classList.toggle('modal-open');
    backdropRef.classList.toggle('is-hidden');
    window.removeEventListener('keyup', onKeyPress);
  }

  onClickButton() {
    this.closeModalForm();
  }

  onClickOverlay() {
    this.closeModalForm();
  }

  onKeyPress(event) {
    switch (event.key) {
      // Закрытие модального окна по нажатию клавиши ESC.
      case 'Esc':
      case 'Escape':
        this.closeModalForm();
        break;
    }
  }
}
