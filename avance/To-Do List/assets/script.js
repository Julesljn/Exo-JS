const inputText = document.querySelector('.card__input');

const addBtn = document.querySelector('.card__addBtn');
const resetBtn = document.querySelector('.card__resetBtn');

const list = document.querySelector('.card__list');
const listItem = document.querySelectorAll('.card__item');

addBtn.addEventListener('click', () => { // Event pour detecter le click du bouton add
    if(inputText.value === '') return // Condition qui permet de ne rien faire si l'input text est vide 

    let newLi = document.createElement('li'); // Nouvelle variable qui permet de manipuler les nouveaux éléments crées  \! Pas de querySelector si l'élément n'existe pas encore !/
    newLi.addEventListener('click', () => { // Event qui permet au clique sur un des nouveaux éléments crées de faire une action
        newLi.classList.toggle('card__item--crossed'); // Ajoute sur l'élément cliquer une class, et la supprimme si on re clique dessus
    })
    newLi.setAttribute('class', 'card__item'); // Permet d'ajouter une class aux nouveaux éléments crées
    newLi.innerHTML = inputText.value; // Ajoute à l'élément crée la valeur de l'input text
    list.appendChild(newLi); // Permet d'injecter une fois que la variable avec tous ces paramétres sont prêts 
    inputText.value = ''; // Permet de réinitialiser l'input text
});
resetBtn.addEventListener('click', () => { // Event pour detecter le click du bouton reset
    list.innerHTML = ''; // Supprime tous les li de mon ul
});