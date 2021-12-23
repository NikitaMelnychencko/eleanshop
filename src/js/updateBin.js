import animateHeader from './components/animateHeader';

export default function updateBin() {
  let data = localStorage.getItem('orderingData');
  let count = 0;
  if (data) {
    data = JSON.parse(data);
    count = data.reduce((total, el) => {
      return (total += Number(el.label.count));
    }, 0);
  }
  document.querySelector('.js-bin .header__product-text').textContent = count;
  animateHeader('js-text-bin');
}
