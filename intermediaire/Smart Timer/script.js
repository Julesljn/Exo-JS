let inputText = document.querySelector('#inputNumber');
let button = document.querySelector('#buttonInputNumber');
let list = document.querySelector('.listNumber');

function ajoutElementTexte(texte){
    let tmp = document.createElement('li');
    tmp.innerHTML = texte;
    list.appendChild(tmp);
    return tmp // Si pas return "let circle" ne stock rien
}

button.addEventListener('click', function() {
    let circle = ajoutElementTexte(inputText.value);
    let count = inputText.value;
    let interval = setInterval(() => {
        count--
        circle.innerText = count
        if(count <= 0){
            clearInterval(interval)
            list.removeChild(circle);   
        }
    }, 1000);

});