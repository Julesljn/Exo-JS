const select = document.querySelector('.card__selected');
const checkAll = document.querySelector('.card__checkAll');
const list = document.querySelectorAll('.card__list');

let arraySelect = [];

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', () => {
        arraySelect.push(list[i].value);
        console.log(arraySelect);
    });
};