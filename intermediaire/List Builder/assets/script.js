let arrayFood = [];

//Dom Element

let buttons = document.querySelectorAll('.foodList > p');
let foodText = document.querySelector('.foodDom');

// Js

function ajoutElementTexte(texte){
    let tmp = document.createElement('span');
    tmp.innerHTML = texte;
    foodText.appendChild(tmp);
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        arrayFood.push(buttons[i].textContent);
        console.log(arrayFood);
        for(let e = 0; e < arrayFood.length; e++){
            ajoutElementTexte(arrayFood[e]);
         } 
         arrayFood = [];
    });
};