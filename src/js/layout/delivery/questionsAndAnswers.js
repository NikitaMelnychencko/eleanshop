import '../../../index.js';
import throttle from 'lodash.throttle';
import myRefs from '../../refs/refs';

const STORAGE_KEY = 'question-message';

// myRefs.form.addEventListener('submit', onFormSubmit);
// myRefs.textarea.addEventListener('input', throttle(onTextareIput), 100);
// myRefs.inputname.addEventListener('input', throttle(onTextareIput));
populateMessag();
function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareIput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateMessag() {
  //   const saveMessage = localStorage.getItem(STORAGE_KEY);
  //   if (!saveMessage) {
  //     myRefs.textarea.value = saveMessage;
  //   }
}
