let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

function onIncrementButtonClick() {
    counterValue += 1;
    counterEl.textContent = counterValue;
}