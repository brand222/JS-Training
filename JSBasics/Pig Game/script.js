'use strict'

//elements on the page
const btnRollDice = document.querySelector('.btn--roll')
const diceDisplay = document.querySelector('.dice')
const btnHold = document.querySelector('.btn--hold')
const player0Score = document.querySelector('#current--0')
const btnNewGame = document.querySelector('.btn--new')
const player1Score = document.getElementById('current--1')
const player0Section = document.querySelector('.player--0')
const player1Section = document.querySelector('.player--1')
const player0TotalScore = document.getElementById('score--0')
const player1TotalScore = document.getElementById('score--1')
let scores, currentScore, activePlayer, playing

const init = function () {
    playing = true
    //array of scores
    scores = [0, 0]
    activePlayer = 0

    //starting conditions
    currentScore = 0
    player0Score.textContent = 0
    player1Score.textContent = 0
    player0TotalScore.textContent = 0
    player1TotalScore.textContent = 0
    diceDisplay.classList.add('hidden')
}

init()
//create a random dice roll

const switchPlayer = function () {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent =
        currentScore
    //switch to the next player
    activePlayer = activePlayer === 0 ? 1 : 0
    player0Section.classList.toggle('player--active')
    player1Section.classList.toggle('player--active')
}

btnRollDice.addEventListener('click', function () {
    if (playing) {
        let diceRoll = Math.floor(Math.random() * 6) + 1
        console.log(`your roll is ${diceRoll}`)
        diceDisplay.src = `dice-${diceRoll}.png`
        diceDisplay.classList.remove('hidden')
        if (diceRoll !== 1) {
            currentScore += diceRoll
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore
        } else {
            switchPlayer()
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        //1. Add current score to active player's total score
        scores[activePlayer] += currentScore

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer]

        //2. Check score is >= 100

        if (scores[activePlayer] >= 100) {
            //finish the game
            playing = false
            diceDisplay.classList.add('hidden')
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner')
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active')
        }

        //otherwise, switch to the next player
        switchPlayer()
    }
})

btnNewGame.addEventListener('click', function () {
    //reset the state of the page
    init()
    //reset the schemes for both the active player and the non-active player
    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--0`).classList.remove('player--active')
    document.querySelector(`.player--1`).classList.remove('player--winner')
    document.querySelector(`.player--1`).classList.remove('player--active')
})
