const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = fontSizeControlEl.value + 'px';

fontSizeControlEl.addEventListener('input', event => {
    textEl.style.fontSize = event.currentTarget.value + 'px';
})
