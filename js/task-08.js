const formRef = document.querySelector('.login-form');
console.log(formRef)
formRef.addEventListener('submit', handleClick)
function handleClick(event) {
    event.preventDefault();
    if (event.target.email.value === '' || event.target.password.value === '') {
        alert('Все поля должны быть заполнены')    
        return;    
    }
    const dataForm = {
        email: event.target.email.value,
        password: event.target.password.value
    }
    event.currentTarget.reset();

   
console.log(dataForm)
    
}