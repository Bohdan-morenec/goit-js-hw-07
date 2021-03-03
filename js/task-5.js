const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')


const changesName = () => spanEl.textContent = inputEl.value ? inputEl.value : 'незнакомец'


inputEl.addEventListener('input', changesName)
