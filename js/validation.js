function validateValue(value) {
    const intValue = parseInt(value)
    let tip = ''

    if (isNaN(intValue)) {
        return `Valor inválido`
    } else if (!(intValue >= minValue && intValue <= maxValue )) {
        return `Valor inválido: Fale um número entre ${ minValue } e ${ maxValue }`
    } else if (intValue === secretNumber) {
        tip = null
    } else if (intValue < secretNumber) {
        tip = `O número secreto é ⬆️`
    } else {
        tip = `O número secreto é ⬇️`
    }
    setAttempts(attempts + 1)
    currentValue = parseInt(intValue)
    return tip
}

function endGame(value) {
    const elementMain = document.querySelector('main')
    elementMain.innerHTML = `
        <h2>Você acertou</h2>
        <h3>O número secreto era ${ value }</h3>
    `
}
