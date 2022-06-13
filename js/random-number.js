const minValue = 0
const maxValue = 1000
var secretNumber = null
var currentValue = null
var attempts = 0

const elementMinValue = document.querySelector('#minValue')
elementMinValue.innerHTML += minValue
const elementMaxValue = document.querySelector('#maxValue')
elementMaxValue.innerHTML += maxValue

const elementGuess = document.querySelector('.guess')
const elementAttempts = document.querySelector('#attempts')
setAttempts(0)

const refreshButton = document.querySelector('#refresh')
refreshButton.addEventListener('click', () => {
    window.location.reload()
})

function newNumber() {
    return parseInt(Math.random() * maxValue + 1)
}

function setNewNumber() {
    secretNumber = newNumber()
    attempts = 0
    // console.log(secretNumber)
}

function setAttempts(newAttempts) {
    attempts = newAttempts
    elementAttempts.innerHTML = `Tentativas: ${ attempts }`
}

setNewNumber()
