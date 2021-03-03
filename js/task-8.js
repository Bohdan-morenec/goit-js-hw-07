const containerСreatorEl = document.querySelector('#controls')
const boxEl = document.querySelector('#boxes')
const inputEl = containerСreatorEl.firstElementChild
const buttonAddEl = inputEl.nextElementSibling
const buttonDelEl = containerСreatorEl.lastElementChild


let width = 30, height = 30

const createBoxes = (amount) => {
    amount = inputEl.value

    for (let i = 0; i < amount; i += 1) {
        let r = () => Math.random() * 256;
        const divEl = document.createElement("div")
        divEl.classList.add('kol')
        divEl.style.width = `${width}px`
        divEl.style.height = `${height}px`

        divEl.style.background = `rgb(${r()}, ${r()}, ${r()})`;

        boxEl.append(divEl)

        width += 10
        height += 10
    }
}

buttonAddEl.addEventListener('click', createBoxes)
buttonDelEl.addEventListener('click', () => boxEl.innerHTML = '')