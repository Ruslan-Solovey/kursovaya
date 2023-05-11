const burger = document.querySelector('.burger');
const menu = document.querySelector('.ul1');

burger.addEventListener('click', () => {
burger.classList.toggle('active');
menu.classList.toggle('active');
});