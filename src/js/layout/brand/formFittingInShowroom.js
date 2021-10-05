export function formFittingInShowroom() {
  const formFitting = {
    box: document.querySelectorAll('.form-fitting-showroom'),
    name: document.querySelectorAll('[name="name"]'),
    tel: document.querySelectorAll('[name="tel"]'),
    date: document.querySelectorAll('[name="date"]'),
    comment: document.querySelectorAll('[name="comment"]'),
    form: document.querySelectorAll('.form-fitting-showroom__form'),
    formInputs: document.querySelectorAll('input'),
    formTextarea: document.querySelectorAll('textarea'),
  };
  //================listener blur and write to local storage
  [...formFitting.formInputs, ...formFitting.formTextarea].forEach(elemForm => {
    elemForm.addEventListener('blur', e => {
      // console.log(e.target.name)
      if (e.target.name === 'name') {
        localStorage.setItem('formFittingData-name', e.target.value);
      } else if (e.target.name === 'tel') {
        localStorage.setItem('formFittingData-tel', e.target.value);
      } else if (e.target.name === 'date') {
        localStorage.setItem('formFittingData-date', e.target.value);
      } else if (e.target.name === 'comment') {
        localStorage.setItem('formFittingData-comment', e.target.value);
      }
    });
  });
  //========================submit form to local storage + sync
  formFitting.form.forEach(elem => {
    elem.addEventListener('submit', e => {
      e.preventDefault();
      const formFittingData = {
        formFittingName: e.target.name.value,
        formFittingTel: e.target.tel.value,
        formFittingdate: e.target.date.value,
        formFittingComment: e.target.comment.value,
      };
      localStorage.setItem('formFittingData', JSON.stringify(formFittingData)); //отправляет в localData
      localStorage.removeItem('formFittingData-name');
      localStorage.removeItem('formFittingData-tel');
      localStorage.removeItem('formFittingData-date');
      localStorage.removeItem('formFittingData-comment');
      e.target.name.value = '';
      e.target.tel.value = '';
      e.target.date.value = '';
      e.target.comment.value = '';
    });
    const getFormData = {
      name: elem.elements.name,
      tel: elem.elements.tel,
      date: elem.elements.date,
      comment: elem.elements.comment,
    };
    getFormData.name.value = localStorage.getItem('formFittingData-name');
    getFormData.tel.value = localStorage.getItem('formFittingData-tel');
    getFormData.date.value = localStorage.getItem('formFittingData-date');
    getFormData.comment.value = localStorage.getItem('formFittingData-comment');
  });
  //============see to block size
  formFitting.box.forEach(elem => {
    if (elem.offsetWidth > 499 && elem.offsetWidth < 800) {
      elem.classList.add('in-page');
      elem.querySelector('.form-fitting-showroom__title').classList.add('in-page');
      elem.querySelector('.form-fitting-showroom__button').classList.add('in-page');
      elem.querySelector('.form-fitting-showroom__comment').classList.add('in-page');
      elem.querySelector('.form-fitting-showroom__comment-box').classList.add('in-page');
      elem.querySelector('.form-fitting-showroom__input-center').classList.add('in-page');
      elem.querySelector('.form-fitting-showroom__icon').classList.add('in-page');
      const allHorizBlockFormFitting = elem.querySelectorAll('.form-fitting-showroom__horiz-block');
      allHorizBlockFormFitting[0].classList.add('in-page');
      allHorizBlockFormFitting[1].classList.add('in-page');
      const allInputFormFitting = elem.querySelectorAll('.form-fitting-showroom__input');
      allInputFormFitting[0].classList.add('in-page');
      allInputFormFitting[1].classList.add('in-page');
      allInputFormFitting[2].classList.add('in-page');
      // console.log('в странице');
    } else {
      elem.classList.add('in-form');
      elem.querySelector('.form-fitting-showroom__title').classList.add('in-form');
      elem.querySelector('.form-fitting-showroom__button').classList.add('in-form');
      elem.querySelector('.form-fitting-showroom__comment').classList.add('in-form');
      elem.querySelector('.form-fitting-showroom__comment-box').classList.add('in-form');
      elem.querySelector('.form-fitting-showroom__input-center').classList.add('in-form');
      elem.querySelector('.form-fitting-showroom__icon').classList.add('in-form');
      const allHorizBlockFormFitting = elem.querySelectorAll('.form-fitting-showroom__horiz-block');
      allHorizBlockFormFitting[0].classList.add('in-form');
      allHorizBlockFormFitting[1].classList.add('in-form');
      const allInputFormFitting = elem.querySelectorAll('.form-fitting-showroom__input');
      allInputFormFitting[0].classList.add('in-form');
      allInputFormFitting[1].classList.add('in-form');
      allInputFormFitting[2].classList.add('in-form');
      // console.log('в форме');
    }
  });
}
