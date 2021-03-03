const categoriesInTheListEl = document.querySelectorAll('.item');


console.log(`В списке ${categoriesInTheListEl.length} категории.`);
categoriesInTheListEl.forEach(heading => {
    console.log(`Категория: ${heading.querySelector('h2').textContent}`)
    console.log(`Количество элементов: ${heading.querySelectorAll('li').length}`)
});



