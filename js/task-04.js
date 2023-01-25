let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    counterValue -= 1;
    counterColor()
    counterEl.textContent = counterValue;
}

function onIncrementButtonClick() {
    counterValue += 1;
    counterColor()
    counterEl.textContent = counterValue;

}

// Additional practice :))
function counterColor() {
    if (counterValue === 0) {
        counterEl.style.color = 'rgb(252, 252, 252)';
    } else if (counterValue < 0) {
        counterEl.style.color = 'rgb(255, 8, 8)';
    } else {
        counterEl.style.color = 'rgb(98, 255, 8)';
    }
}