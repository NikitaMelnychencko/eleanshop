import { getSection } from './firebase_Servise.js';
export class FetchSection {
  constructor({ firstParam, secondParam }) {
    this._state = null;
    this._getSection(firstParam, secondParam);
  }
  _getSection(firstParam, secondParam) {
    if (firstParam && secondParam) {
      const firstPromis = getSection(firstParam);
      const secondPromis = getSection(secondParam);
      this._state = Promise.all([firstPromis, secondPromis]).then(values => {
        return values;
      });
    } else {
      this._state = getSection(firstParam).then(values => {
        return values;
      });
    }
  }
}
