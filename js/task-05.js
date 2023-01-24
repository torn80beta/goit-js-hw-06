const nameInputEl = document.querySelector('#name-input');
let nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', event => {
    event.currentTarget.value === ""
        ? nameOutputEl.textContent = "Anonymous"
        : nameOutputEl.textContent = event.currentTarget.value;
});