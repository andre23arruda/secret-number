window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

function onSpeak(event) {
    const result = event.results[0][0].transcript
    if (result) {
        if (isGameOver(result)) {
            document.body.classList.add('game-over')
            const elementMain = document.querySelector('main')
            elementMain.innerHTML = `
                <h2>GAME OVER</h2>
                <h3>O número secreto era ${ secretNumber }</h3>
            `
            currentValue = secretNumber
            return
        }
        showCurrentValue(result)
        // console.log(result)
    }
}

recognition.addEventListener('result', onSpeak)
recognition.addEventListener('end', () => {
    if (currentValue === secretNumber)
        return
    recognition.start()
})

function showCurrentValue(value) {
    const tip = validateValue(value)
    // console.log(tip)
    if (tip) {
        const renderComponent = `
            <div class="text">Você disse:</div>
            <span class="box">${ value }</span>
            <div id="tip" class="text">${ tip }</div>
        `
        elementGuess.innerHTML = renderComponent
        return
    }
    endGame(value)
}

function isGameOver(result) {
    return result.toLowerCase() === 'game over'
}
