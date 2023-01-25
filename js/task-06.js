const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', event => {
    event.currentTarget.value.length === Number(validationInputEl.dataset.length) ? greenBorder() : redBorder();
});

function greenBorder() {
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
}

function redBorder() {
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.add('invalid');
}
