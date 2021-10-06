import '../../../index.js';
import throttle from 'lodash.throttle';
import myRefs from '../../refs/refs';

// const STORAGE_KEY = 'question-message';

// myRefs.form.addEventListener('submit', onFormSubmit);
// myRefs.textarea.addEventListener('input', throttle(onTextareIput), 100);
// myRefs.inputname.addEventListener('input', throttle(onTextareIput));
// populateMessag();
// function onFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareIput(event) {
//   const message = event.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateMessag() {
//   const saveMessage = localStorage.getItem(STORAGE_KEY);
//   if (!saveMessage) {
//     myRefs.textarea.value = saveMessage;
//   }
// }
//==============================works
const formquestion = {
  boxquestion: document.querySelectorAll('.js-question-box'),
  namequestion: document.querySelectorAll('[name="name"]'),
  numberquestion: document.querySelectorAll('[name="number"]'),
  timequestion: document.querySelectorAll('[name="input-time"]'),
  comentquestion: document.querySelectorAll('[name="input-coment"]'),
  formquestioninput: document.querySelectorAll('.js-question-form'),
  formQuestionInputs: document.querySelectorAll('input'),
  formQuestionTextarea: document.querySelectorAll('textarea'),
};

[...formquestion.formQuestionInputs, ...formquestion.formQuestionTextarea].forEach(elemForm => {
  elemForm.addEventListener('blur', e => {
    // console.log(e.target.name);
    if (e.target.name === 'name') {
      localStorage.setItem('formQuestionData-name', e.target.value);
    } else if (e.target.name === 'number') {
      localStorage.setItem('formQuestionData-number', e.target.value);
    } else if (e.target.name === 'time') {
      localStorage.setItem('formQuestionData-time', e.target.value);
    } else if (e.target.name === 'coment') {
      localStorage.setItem('formQuestionData-coment', e.target.value);
    }
  });
});

formquestion.formquestioninput.forEach(elem => {
  elem.addEventListener('submit', e => {
    e.preventDefault();
    const formQuestionData = {
      formQuestionName: e.target.name.value,
      formQuestionNumber: e.target.nubmer.value,
      formQuestionTime: e.target.time.value,
      formQuestionComent: e.target.coment.value,
    };
    localStorage.setItem('formQuestionData', JSON.stringify(formQuestionData));
    localStorage.removeItem('formQuestionData-name');
    localStorage.removeItem('formQuestionData-number');
    localStorage.removeItem('formQuestionData-time');
    localStorage.removeItem('formQuestionData-coment');
    e.target.name.value = '';
    e.target.number.value = '';
    e.target.time.value = '';
    e.target.coment.value = '';
  });
  const getFormQuestionData = {
    name: elem.elements.name,
    number: elem.elements.number,
    time: elem.elements.time,
    coment: elem.elements.coment,
  };
  getFormQuestionData.name.value = localStorage.getItem('formQuestionData-name');
  getFormQuestionData.number.value = localStorage.getItem('formQuestionData-number');
  // getFormQuestionData.time.value = localStorage.getItem('formQuestionData-time');
  getFormQuestionData.coment.value = localStorage.getItem('formQuestionData-coment');
});
//=======================works
