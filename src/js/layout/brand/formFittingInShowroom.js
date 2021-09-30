const formFittingInShowroom = {
  box: document.querySelector('.form-fitting-showroom'),
  name: document.querySelector('[name="formFittingName"]'),
  tel: document.querySelector('[name="formFittingTel"]'),
  time: document.querySelector('[name="formFittingTime"]'),
  comment: document.querySelector('[name="formFittingComment"]'),
  buttom: document.querySelector('.form-fitting-showroom__send-btn-text'),
  form: document.querySelector('.form-fitting-showroom__form'),
};

formFittingInShowroom.form.addEventListener('input', e => {
  // console.log(e.target.name)
  if (e.target.name === 'formFittingName') {
    localStorage.setItem('formFittingData-name', e.target.value);
  } else if (e.target.name === 'formFittingTel') {
    localStorage.setItem('formFittingData-tel', e.target.value);
  } else if (e.target.name === 'formFittingTime') {
    localStorage.setItem('formFittingData-time', e.target.value);
  } else if (e.target.name === 'formFittingComment') {
    localStorage.setItem('formFittingData-comment', e.target.value);
  }
});

formFittingInShowroom.form.addEventListener('submit', e => {
  e.preventDefault();
  const formFittingData = {
    formFittingName: e.target.formFittingName.value,
    formFittingTel: e.target.formFittingTel.value,
    formFittingTime: e.target.formFittingTime.value,
    formFittingComment: e.target.formFittingComment.value,
  };

  // console.dir(formFittingData);

  localStorage.setItem('formFittingData', JSON.stringify(formFittingData)); //отправляет в localData

  localStorage.removeItem('formFittingData-name');
  localStorage.removeItem('formFittingData-tel');
  localStorage.removeItem('formFittingData-time');
  localStorage.removeItem('formFittingData-comment');
  e.target.formFittingName.value = '';
  e.target.formFittingTel.value = '';
  e.target.formFittingTime.value = '';
  e.target.formFittingComment.value = '';
});
// console.dir(formFittingInShowroom.form.elements);
formFittingInShowroom.form.elements.formFittingName.value =
  localStorage.getItem('formFittingData-name');
formFittingInShowroom.form.elements.formFittingTel.value =
  localStorage.getItem('formFittingData-tel');
formFittingInShowroom.form.elements.formFittingTime.value =
  localStorage.getItem('formFittingData-time');
formFittingInShowroom.form.elements.formFittingComment.value =
  localStorage.getItem('formFittingData-comment');

if (formFittingInShowroom.box.offsetWidth > 499 && formFittingInShowroom.box.offsetWidth < 800) {
  formFittingInShowroom.box.classList.add('in-page');
  formFittingInShowroom.box.querySelector('.form-fitting-showroom__title').classList.add('in-page');
  formFittingInShowroom.box
    .querySelector('.form-fitting-showroom__button')
    .classList.add('in-page');
  formFittingInShowroom.box
    .querySelector('.form-fitting-showroom__comment')
    .classList.add('in-page');
  formFittingInShowroom.box
    .querySelector('.form-fitting-showroom__comment-box')
    .classList.add('in-page');
  formFittingInShowroom.box
    .querySelector('.form-fitting-showroom__input-center')
    .classList.add('in-page');
  formFittingInShowroom.box.querySelector('.form-fitting-showroom__icon').classList.add('in-page');
  const allHorizBlockFormFitting = formFittingInShowroom.box.querySelectorAll(
    '.form-fitting-showroom__horiz-block',
  );
  allHorizBlockFormFitting[0].classList.add('in-page');
  allHorizBlockFormFitting[1].classList.add('in-page');
  const allInputFormFitting = formFittingInShowroom.box.querySelectorAll(
    '.form-fitting-showroom__input',
  );
  allInputFormFitting[0].classList.add('in-page');
  allInputFormFitting[1].classList.add('in-page');
  allInputFormFitting[2].classList.add('in-page');
  console.log('в странице');
} else {
  formFittingInShowroom.box.classList.add('in-form');
  formFittingInShowroom.box.querySelector('.form-fitting-showroom__title').classList.add('in-form');
  formFittingInShowroom.box
    .querySelector('.form-fitting-showroom__button')
    .classList.add('in-form');
  formFittingInShowroom.box
    .querySelector('.form-fitting-showroom__comment')
    .classList.add('in-form');
  formFittingInShowroom.box
    .querySelector('.form-fitting-showroom__comment-box')
    .classList.add('in-form');
  formFittingInShowroom.box
    .querySelector('.form-fitting-showroom__input-center')
    .classList.add('in-form');
  formFittingInShowroom.box.querySelector('.form-fitting-showroom__icon').classList.add('in-form');
  const allHorizBlockFormFitting = formFittingInShowroom.box.querySelectorAll(
    '.form-fitting-showroom__horiz-block',
  );
  allHorizBlockFormFitting[0].classList.add('in-form');
  allHorizBlockFormFitting[1].classList.add('in-form');
  const allInputFormFitting = formFittingInShowroom.box.querySelectorAll(
    '.form-fitting-showroom__input',
  );
  allInputFormFitting[0].classList.add('in-form');
  allInputFormFitting[1].classList.add('in-form');
  allInputFormFitting[2].classList.add('in-form');
  console.log('в форме');
}
