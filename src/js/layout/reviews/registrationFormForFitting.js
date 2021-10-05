import form_reviews from '../../../views/partials/reviews/formReviews.hbs';
export const formReviewsMarkUp = form_reviews();

export function formReviews() {
  const formReviewsAskQuestion = {
    box: document.querySelectorAll('.form-reviews'),
    name: document.querySelectorAll('[name="name"]'),
    tel: document.querySelectorAll('[name="tel"]'),
    email: document.querySelectorAll('[name="email"]'),
    comment: document.querySelectorAll('[name="comment"]'),
    form: document.querySelectorAll('.form-reviews__form'),
    formInputs: document.querySelectorAll('input'),
    formTextarea: document.querySelectorAll('textarea'),
  };
  //================listener blur and write to local storage
  [...formReviewsAskQuestion.formInputs, ...formReviewsAskQuestion.formTextarea].forEach(
    elemForm => {
      elemForm.addEventListener('blur', e => {
        // console.log(e.target.name)
        if (e.target.name === 'name') {
          localStorage.setItem('formReviewsAskQuestionData-name', e.target.value);
        } else if (e.target.name === 'tel') {
          localStorage.setItem('formReviewsAskQuestionData-tel', e.target.value);
        } else if (e.target.name === 'email') {
          localStorage.setItem('formReviewsAskQuestionData-email', e.target.value);
        } else if (e.target.name === 'comment') {
          localStorage.setItem('formReviewsAskQuestionData-comment', e.target.value);
        }
      });
    },
  );
  //========================submit form to local storage + sync
  formReviewsAskQuestion.form.forEach(elem => {
    elem.addEventListener('submit', e => {
      e.preventDefault();
      const formReviewsAskQuestionData = {
        formReviewsAskQuestionName: e.target.name.value,
        formReviewsAskQuestionTel: e.target.tel.value,
        formReviewsAskQuestionemail: e.target.email.value,
        formReviewsAskQuestionComment: e.target.comment.value,
      };
      localStorage.setItem(
        'formReviewsAskQuestionData',
        JSON.stringify(formReviewsAskQuestionData),
      ); //отправляет в localData
      localStorage.removeItem('formReviewsAskQuestionData-name');
      localStorage.removeItem('formReviewsAskQuestionData-tel');
      localStorage.removeItem('formReviewsAskQuestionData-email');
      localStorage.removeItem('formReviewsAskQuestionData-comment');
      e.target.name.value = '';
      e.target.tel.value = '';
      e.target.email.value = '';
      e.target.comment.value = '';
    });
    const getFormData = {
      name: elem.elements.name,
      tel: elem.elements.tel,
      email: elem.elements.email,
      comment: elem.elements.comment,
    };
    getFormData.name.value = localStorage.getItem('formReviewsAskQuestionData-name');
    getFormData.tel.value = localStorage.getItem('formReviewsAskQuestionData-tel');
    getFormData.email.value = localStorage.getItem('formReviewsAskQuestionData-email');
    getFormData.comment.value = localStorage.getItem('formReviewsAskQuestionData-comment');
  });
}
