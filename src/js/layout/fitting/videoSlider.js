import mod from './sizeTable';

const { createSizeTable } = mod;

const OPEN = document.querySelector('[dat-OPEN]');
OPEN.addEventListener('click', () =>  createSizeTable('2'));
