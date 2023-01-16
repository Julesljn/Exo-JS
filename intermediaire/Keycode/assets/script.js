const allInputs = document.querySelectorAll('input');
const button = document.querySelector('button');

for(let i = 0; i < allInputs.length; i++){
    console.log('looping');
    allInputs[i].addEventListener('change', () => {
        console.log('sff')
        const regex = /[0-9]/g;
        let found =  allInputs[i].match(regex);
        console.log(found);
        if(this.match(regex) !== null) {
            console.log(found);
        }
    })
}