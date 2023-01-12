let inputText = document.querySelector('#inputNumber');
let button = document.querySelector('#buttonInputNumber');
let list = document.querySelector('.listNumber');

function ajoutElementTexte(texte){
    let tmp = document.createElement('li');
    tmp.innerHTML = texte;
    list.appendChild(tmp);
}



// function interval() {
//     let e = inputText.value;
//     setInterval(e -= 1, 1000);
//     console.log(e);
//     ajoutElementTexte(e);
// };

setInterval(function(){
    let e = inputText.value;
    console.log(e);
    ajoutElementTexte(e);
}, 1000);

// button.addEventListener('click', interval);
button.addEventListener('click', interval);