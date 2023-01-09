let arrayContained = ['Positive Content', 'Negative Content', 'Neutral Content'];

let buttons = document.querySelectorAll('#containerSelection > button');
let text = document.querySelector('.selection');
let input = document.querySelector('.inputNumber')
let inputButton = document.querySelector('.inputButton');


inputButton.addEventListener('click', function() {
    if(input.value <= 3 && input.value >= 1){
        text.textContent = arrayContained[input.value -1];
        for(let g = 0; g < buttons.length; g++){
            buttons[g].classList.remove('active');
        }
        buttons[input.value -1].classList.add('active');
    }
})

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {
    console.log(i);
    for(let e = 0; e < buttons.length; e++) {
        buttons[e].classList.remove('active');
    }
    buttons[i].classList.add('active');
    text.textContent = arrayContained[i];
})
}