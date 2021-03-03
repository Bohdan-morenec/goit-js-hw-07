const inputEl = document.querySelector('#font-size-control')
const spanTextEl = document.querySelector('#text')
spanTextEl.style.fontSize

inputEl.addEventListener('input', () => spanTextEl.style.fontSize = `${inputEl.value}px`)