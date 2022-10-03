const counterValue = document.querySelector("#value");
const minusbtn = document.querySelector('button[data-action="decrement"]');
const plusbtn = document.querySelector('button[data-action="increment"]');;
let counter = 0;
minusbtn.addEventListener('click',()=>{
    counter -= 1;
    counterValue.textContent = counter
})
plusbtn.addEventListener('click',()=>{
    counter += 1;
    counterValue.textContent = counter
})

