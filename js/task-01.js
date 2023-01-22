const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);
console.log('');


for (const cat of categories) {
    console.log(`Category: ` + cat.querySelector('h2').textContent);
    console.log(`Elements: ` + cat.querySelectorAll('li').length);
    console.log('');
}
