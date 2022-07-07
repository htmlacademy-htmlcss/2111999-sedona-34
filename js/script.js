const button = document.querySelector('.button-search');
const popup = document.querySelector('.modal-conteiner');
const popupClose = document.querySelector('.modal-close-button');

button.addEventListener('click', () => {
  popup.classList.remove('modal-conteiner-close');
  popupClose.addEventListener('click', () => {
    popup.classList.add('modal-conteiner-close');
  });
});
