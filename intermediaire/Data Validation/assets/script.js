// Dom 

let inputName = document.querySelector('.inputName');
let inputMail = document.querySelector('.inputMail');
let inputPassword = document.querySelector('.inputPassword');
let inputConfirmPassword = document.querySelector('.inputConfirmPassword');

let notValid = document.querySelectorAll('.notValid')

let inputSubmit = document.querySelector('#submitButton');

// JS

const regexMail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
const regexPassWord = /(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!"$%&\/\(\)\?\^\'\\\+\-\*]))^.*/;

for(let i = 0; i < notValid.length; i++){
}

inputSubmit.addEventListener('click', () => {

    let verifRegexMail = inputMail.value === "" ? false : regexMail.test(inputMail.value);
    let verifStrongPassWord = regexPassWord.test(inputPassword.value);

    (inputName.value.trim() == '') ? notValid[0].classList.remove('vanish') : notValid[0].classList.add('vanish');
    (!verifRegexMail) ? notValid[1].classList.remove('vanish') : notValid[1].classList.add('vanish');
    (!verifStrongPassWord) ? notValid[2].classList.remove('vanish') : notValid[2].classList.add('vanish');
    (inputConfirmPassword.value !== inputPassword.value) ? notValid[3].classList.remove('vanish') : notValid[3].classList.add('vanish');
});