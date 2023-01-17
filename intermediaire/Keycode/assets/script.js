const allInputs = document.querySelectorAll('input');
const button = document.querySelector('button');
let arrayResult = []

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('input', () => {

        let input = allInputs[i]
        let nextInput = allInputs[i + 1]
        let previousInput = allInputs[i - 1]

        if (input.value.length >= 2) {
            let value = input.value

            for (let j = 0; j < value.length; j++) {
                console.log(value);
                allInputs[j].value = value[j]
            }
        }
        else if(input.value.length !== 1){
            input.value = ""
            return
        }

        const regex = /[0-9]/g;
        let found = regex.test(allInputs[i].value);
        if (found) {
            if (previousInput) {
                previousInput.disabled = true;
            }
            if (nextInput) {
                nextInput.disabled = false;
                nextInput.focus();
            }
        }
        else {
            if (previousInput) {
                previousInput.disabled = false;
                previousInput.focus();
            }
            if (nextInput) {
                input.value = '';
                nextInput.disabled = true;
            }
        }
    });

    allInputs[i].addEventListener("keyup", (e) => {
        if (e.key !== "backspace") return
    })
};






button.addEventListener('click', () => {
    for (let e = 0; e < allInputs.length; e++) {
        arrayResult.push(allInputs[e].value);
    }
    alert(`Le code que vous avez noté est ${arrayResult.join('')}`);
})
