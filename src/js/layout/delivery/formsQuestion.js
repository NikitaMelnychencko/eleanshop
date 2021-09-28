// Суда буду вносить функционал
import '../../../index.js';
import myRefs from '../../refs/refs';
import questionJson from '../../../js/json/formsQuestion.json';
import questionForm from '../../../views/partials/delivery/formsQuestion.hbs';

const { questanswer: myAnswer } = myRefs;

const QuestionMarkUp = createFotoDelivery(questionJson);

myAnswer.insertAdjacentHTML('beforeend', QuestionMarkUp);

function createFotoDelivery(menu) {
  return menu.map(questionForm).join('');
}
