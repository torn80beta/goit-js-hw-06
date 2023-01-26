function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfElements = document.querySelector('input');
const createButtonEl = document.querySelector('button[data-create]');
const boxesEl = document.querySelector('#boxes');
let num = 0;

numberOfElements.addEventListener('input', event => {
  num = event.currentTarget.value;

})

createButtonEl.addEventListener('click', onCreateButtonClick);

function onCreateButtonClick() {
  let size = 20;
  const collection = Array(+num).fill('');
  let boxes = collection.map(element => {
    let color = getRandomHexColor();
    size += 10;
    return `<div style="color:${color}; width:${size}px; height:${size}px"></div>`;
  });

  boxesEl.insertAdjacentHTML("afterbegin", ...boxes);
  console.log(boxes);
}



// function createBoxes(amount) {
//   let size = 20;
//   const collection = Array(amount).fill('');
//   return collection.map(element => {
//     let color = getRandomHexColor();
//     size += 10;
//     return `<div width="${size}px" height="${size}px" style="color:${color}"></div>`;
//   });
// }

// console.log(createBoxes(5));

