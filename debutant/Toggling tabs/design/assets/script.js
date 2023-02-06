// Dom Element

const input = document.querySelectorAll('p');
const media = window.matchMedia('(max-width: 800px)');
const media2 = window.matchMedia('(min-width: 800px)');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const select = document.querySelector('#selectScreen2')

// JS
let valueSelect;
for(let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', () => {
        for(let e = 0; e < input.length; e++) {
            input[e].classList.remove('select');
        }
        input[i].classList.add('select');
        select.selectedIndex = i; 
    })
}

//Responsive 

window.onload = () => {
    window.addEventListener('resize', () => {
        if(media.matches) {
                screen1.classList.add('none');
                screen2.classList.remove('none')
        } else if(media2.matches) {
            screen2.classList.add('none');
            screen1.classList.remove('none');
        }
    })
};
select.addEventListener('change', () => {
    for(let i = 0; i < input.length; i++) {
        input[i].classList.remove('select');
    }
    input[select.value -1].classList.add('select');
})

