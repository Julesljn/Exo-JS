new TypeIt(".main__title", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("Tu es un très vilain chien, très vilain !", { delay: 300 })
    .move(-13, { delay: 100})
    .type(' très ', { delay: 300})
    .move(null, { to: 'END'})
    .delele(10)
    .go()













// document.addEventListener('DOMContentLoaded', () => {
//     new TypeIt('.main__title', {
//         strings: ['Tu es un vilain chien, très vilain.'],
//         speed: 50,
//     }).go();
// });