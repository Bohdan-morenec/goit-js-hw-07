const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listRef = document.querySelector('#ingredients')


const enumerationOfIngredientsRef = ingredients.map(item => {
    const liRef = document.createElement('li')
    liRef.textContent = `${item}`
    return liRef
});
listRef.append(...enumerationOfIngredientsRef)
