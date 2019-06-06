const card = document.querySelector('.card-login');
const start = document.querySelector('.btn-start');
const leave = document.getElementById('cross-leave');

start.addEventListener('click', () => {
  card.classList.add('display');
});

leave.addEventListener('click', () => {
  card.classList.remove('display');
});
