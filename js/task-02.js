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
ingredients.forEach(function (element, i) {
  const liItem = 
  document.createElement('li');
  liItem.textContent = element;
  liItem.classList.add('item');
  el.push(liItem);
})
ingredientsListRef.append(...el)






