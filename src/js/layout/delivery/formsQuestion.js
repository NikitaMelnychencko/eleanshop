// Суда буду вносить функционал
// import '../../../index.js';
// import myRefs from '../../refs/refs';
// import questionJson from '../../../js/json/formsQuestion.json';
// import questionForm from '../../../views/partials/delivery/formsQuestion.hbs';

// const { questanswer: myAnswer } = myRefs;

// const QuestionMarkUp = createFotoDelivery(questionJson);

// // myAnswer.insertAdjacentHTML('beforeend', QuestionMarkUp);

// function createFotoDelivery(menu) {
//   return menu.map(questionForm).join('');
// }

import form_delivery from '../../../views/partials/delivery/formDelivery.hbs';
export const formDeliveryMarkUp = form_delivery();

export function formDelivery() {
  const formDeliveryAskQuestion = {
    box: document.querySelectorAll('.form-delivery'),
    name: document.querySelectorAll('[name="name"]'),
    tel: document.querySelectorAll('[name="tel"]'),
    time: document.querySelectorAll('[name="time"]'),
    comment: document.querySelectorAll('[name="comment"]'),
    form: document.querySelectorAll('.form-delivery__form'),
    formInputs: document.querySelectorAll('input'),
    formTextarea: document.querySelectorAll('textarea'),
  };
  //================listener blur and write to local storage
  [...formDeliveryAskQuestion.formInputs, ...formDeliveryAskQuestion.formTextarea].forEach(
    elemForm => {
      elemForm.addEventListener('blur', e => {
        // console.log(e.target.name)
        if (e.target.name === 'name') {
          localStorage.setItem('formDeliveryAskQuestionData-name', e.target.value);
        } else if (e.target.name === 'tel') {
          localStorage.setItem('formDeliveryAskQuestionData-tel', e.target.value);
        } else if (e.target.name === 'time') {
          localStorage.setItem('formDeliveryAskQuestionData-time', e.target.value);
        } else if (e.target.name === 'comment') {
          localStorage.setItem('formDeliveryAskQuestionData-comment', e.target.value);
        }
      });
    },
  );
  //========================submit form to local storage + sync
  formDeliveryAskQuestion.form.forEach(elem => {
    elem.addEventListener('submit', e => {
      e.preventDefault();
      const formDeliveryAskQuestionData = {
        formDeliveryAskQuestionName: e.target.name.value,
        formDeliveryAskQuestionTel: e.target.tel.value,
        formDeliveryAskQuestiontime: e.target.time.value,
        formDeliveryAskQuestionComment: e.target.comment.value,
      };
      localStorage.setItem(
        'formDeliveryAskQuestionData',
        JSON.stringify(formDeliveryAskQuestionData),
      ); //отправляет в localData
      localStorage.removeItem('formDeliveryAskQuestionData-name');
      localStorage.removeItem('formDeliveryAskQuestionData-tel');
      localStorage.removeItem('formDeliveryAskQuestionData-time');
      localStorage.removeItem('formDeliveryAskQuestionData-comment');
      e.target.name.value = '';
      e.target.tel.value = '';
      e.target.time.value = '';
      e.target.comment.value = '';
    });
    const getFormData = {
      name: elem.elements.name,
      tel: elem.elements.tel,
      time: elem.elements.time,
      comment: elem.elements.comment,
    };
    getFormData.name.value = localStorage.getItem('formDeliveryAskQuestionData-name');
    getFormData.tel.value = localStorage.getItem('formDeliveryAskQuestionData-tel');
    getFormData.time.value = localStorage.getItem('formDeliveryAskQuestionData-time');
    getFormData.comment.value = localStorage.getItem('formDeliveryAskQuestionData-comment');
  });
}
