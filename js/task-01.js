const allCategories = document.querySelectorAll('.item');

const categoriesHeadlines = document.querySelectorAll('.item h2');

const categoriesList = document.querySelectorAll('.item ul');

console.log(`Number of categories: ${allCategories.length}`);

const categoryAndOptionCount = () => {
  for (let i = 0; i < allCategories.length; i += 1) {
    console.log(`Category: ${categoriesHeadlines[i].textContent}`);
    console.log(`Elements: ${categoriesList[i].children.length}`);
    console.log('');
  }
};

categoryAndOptionCount();
