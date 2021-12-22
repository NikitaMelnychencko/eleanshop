export default function animateHeader(id) {
  const qsProd = document.querySelector(`#${id}`);
  qsProd.animate(
    [
      {
        transform: 'scale(1)',
      },
      {
        transform: 'scale(2)',
      },
      {
        transform: 'scale(1)',
      },
    ],
    250,
  );
}
