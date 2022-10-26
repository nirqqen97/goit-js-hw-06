const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const el = [];
const ingredientsListRef = document.querySelector("#ingredients")

ingredients.map((item)=>{
  const liItem = document.createElement('li');
  liItem.textContent = item;
  liItem.classList.add('item')
  console.log(liItem)
  el.push(liItem)
})
ingredientsListRef.append(...el)






