function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfElements = document.querySelector('input');
const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]')
const boxesEl = document.querySelector('#boxes');
let num = 0;
let size = 20;

numberOfElements.addEventListener('input', event => {
  num = event.currentTarget.value;
});

createButtonEl.addEventListener('click', onCreateButtonClick);
destroyButtonEl.addEventListener('click', onDestroyButtonClick);


function onCreateButtonClick() {
  const markup = Array(Number(num)).fill('').map(element =>
    `<div style="width:${size += 10}px;height:${size}px;background-color:${getRandomHexColor()}">${size}</div>`).join('');
  boxesEl.insertAdjacentHTML("afterbegin", markup);
}


function onDestroyButtonClick() {
  boxesEl.innerHTML = '';
  num = 0;
  size = 20;
  numberOfElements.value = num;
}
