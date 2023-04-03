const btnStart = document.querySelector('.main__btn');
const form = document.querySelectorAll('div');
const main = document.querySelector('.main');
const scoreDOM = document.querySelector('.main__score');
let previousNumber = null;
let randomNumber = null;
let score = 0;
function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * form.length); // Génère un nombre aléatoire entre 1 et 100
    scoreDOM.innerHTML = score;
  if (randomNumber === previousNumber) { // Vérifie si le nombre généré est égal au nombre précédent
    return generateRandomNumber(); // Génère un nouveau nombre aléatoire en appelant la fonction récursivement
  }

  previousNumber = randomNumber; // Met à jour le nombre précédent avec le nouveau nombre généré
  return randomNumber; // Retourne le nouveau nombre généré
}
for(let i = 0; i < form.length; i++) {
    btnStart.addEventListener('click', () => {
    form[0].classList.add('active');
    btnStart.disabled = true;
    })
    form[i].addEventListener('click', () => {
        
        let random = generateRandomNumber();
        if(form[i].classList.contains('active')) {
            form[i].classList.remove('active');
            score += 1;
            form[random].classList.add('active');
        }
    })
}