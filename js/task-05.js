const inputRef = document.querySelector("#name-input");
const anonymRef = document.querySelector('#name-output');
inputRef.addEventListener('input', onInputChange)
function onInputChange(event) {
    let changedWord = event.currentTarget.value;
    anonymRef.textContent = changedWord;
    if (event.currentTarget.value === '') {
        anonymRef.textContent = 'Anonymous'
    }
}



 
