const button = document.querySelector('.button');

const body = document.querySelector('.bodyMain');

const rectangle = document.querySelector('.rectangle');
const triangle = document.querySelector('.triangle');
const cercle = document.querySelector('.cercle');

button.addEventListener('click', () => {
    body.style.opacity = '0.33';
    rectangle.style.opacity = '0';
})