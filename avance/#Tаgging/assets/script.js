const textarea = document.querySelector(".textArea");

function highlightWords() {
  const wordsToHighlight = ["lorem", "ipsum"];
  const text = textarea.value;
  let highlightedText = "";

  // Recherche chaque mot à surligner   
  for (const word of wordsToHighlight) {
    // Utilise une expression régulière pour trouver le mot dans le texte
    const regex = new RegExp(word, "gi");
    const matches = text.matchAll(regex);

    // Remplace chaque instance du mot par une version surlignée
    for (const match of matches) {
      const start = match.index;
      const end = start + match[0].length;
      const highlighted = `<mark>${match[0]}</mark>`;
      highlightedText += text.slice(highlightedText.length, start) + highlighted;
    }
  }

  // Ajoute le texte surligné au textarea
  highlightedText += text.slice(highlightedText.length);
  textarea.innerHTML = highlightedText;
}

textarea.addEventListener("input", highlightWords);




























// let textArea = document.querySelector('.textArea');


// textArea.addEventListener('input', () => {
//     let array = textArea.value.split(' ');
//     console.log(array);
//     for(let i = 0; i < array.length; i++) {
//         let word = array[i] 
//         if(word[0] === '#') {
//             console.log(`le ${word} commence par un ashTag`);
//         }
//         else {
//             console.log(`le ${word} ne commence pas par un ashTag`);
//         }
//     }
// })  