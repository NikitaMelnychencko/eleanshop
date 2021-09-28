// Try on Modal ("ХОТИТЕ ПРИМЕРИТЬ ДАННУЮ МОДЕЛЬ ПЕРЕД ПОКУПКОЙ? ЛЕГКО!")
// console.log('Hello world');
import tryOnModelsModal from '../../../views/components/tryOnModelsModal.hbs';
import orderForm from '../../../views/components/orderForm.hbs';

// create content for Pre-order Modal which placed at Body (for example)
const body = document.querySelector('body');
body.insertAdjacentHTML('beforeend', tryOnModelsModal());

// add Order Form as second part of Pre-order Modal content
const tryOnEl = document.querySelector('.try-on');
tryOnEl.insertAdjacentHTML('beforeend', orderForm());
