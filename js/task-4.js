let counterValue = 0
const buttonsContainerWithEl = document.querySelector('#counter')
const valueСounterEl = buttonsContainerWithEl.querySelector('#value')

const increment = () => {
    const number = counterValue -= 1

    return valueСounterEl.textContent = number
}

const decrement = () => {
    const number = counterValue += 1

    return valueСounterEl.textContent = number
}


buttonsContainerWithEl.firstElementChild.addEventListener('click', increment)
buttonsContainerWithEl.lastElementChild.addEventListener('click', decrement)

