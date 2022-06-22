const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const newIngredientsList = ingredients.map(item => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = item;
  ingredientEl.classList.add('item');
  return ingredientEl;
});

ingredientsListRef.append(...newIngredientsList);
