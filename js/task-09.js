function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const textEl = document.querySelector('span.color');


changeColorButton.addEventListener('click', onButtonClick);


function onButtonClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = bodyEl.style.backgroundColor;
}
