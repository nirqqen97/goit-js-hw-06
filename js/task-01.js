const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);
// -----------
const itemsEL = document.querySelectorAll('.item')
itemsEL.forEach(function (el, number)  {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    const preLenght = (el.querySelectorAll('li'))
    console.log(`Elements ${preLenght.length}`)

})
