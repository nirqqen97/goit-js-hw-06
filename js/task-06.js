const inputRef = document.querySelector('#validation-input')
const getDataSet =  inputRef.getAttribute('data-length')
inputRef.addEventListener('blur', onInputBlurCheck);
function onInputBlurCheck(event) {
if (Number(getDataSet) === event.currentTarget.value.length) {
    console.log('6 words')
    event.currentTarget.classList.add("valid")
    event.currentTarget.classList.remove("invalid")

    
} else {
    console.log('less or more')
    event.currentTarget.classList.remove("valid")
    event.currentTarget.classList.add("invalid")

    
}

  

}

