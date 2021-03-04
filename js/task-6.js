const inputEl = document.querySelector('#validation-input')

const fn1 = (add, remove) => {
    inputEl.classList.remove(remove)
    inputEl.classList.add(add)

}

inputEl.addEventListener('input', () => {
    if (Number(inputEl.value.length) !== Number(inputEl.dataset.length)) {
        fn1('invalid', 'valid')

    }
    else {
        fn1('valid', 'invalid')
    }
})
