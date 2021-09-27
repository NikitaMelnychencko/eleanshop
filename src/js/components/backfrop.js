const backdropRef = document.querySelector('[data-modal]');
const closeModalBtnRef = document.querySelector('[data-modal-close]');

backdropRef.addEventListener('click', onClickButton);
closeModalBtnRef.addEventListener('click', onClickButton);
window.addEventListener('keyup', onKeyPress);

function closeModalForm() {
  document.body.classList.toggle('modal-open');
  backdropRef.classList.toggle('is-hidden');
  window.removeEventListener('keyup', onKeyPress);
}

function onClickButton() {
  closeModalForm();
}

function onClickOverlay() {
  closeModalForm();
}

function onKeyPress(event) {
  switch (event.key) {
    // Закрытие модального окна по нажатию клавиши ESC.
    case 'Esc':
    case 'Escape':
      closeModalForm();
      break;
  }
}
