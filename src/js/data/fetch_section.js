import { getSection } from './firebase_Servise.js';
function sectionHome() {
  const state = {};
  const home = getSection('home');
  const components = getSection('components');
  Promise.all([home, components]).then(values => {
    state.value = values;
  });
  return state;
}
console.log(sectionHome());
