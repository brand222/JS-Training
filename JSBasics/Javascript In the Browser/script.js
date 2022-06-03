'use strict'

// //we found the message element
// console.log(document.querySelector('.message'))
// //now create a random number
// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10
// console.log(
//     `the value of the field is ${(document.querySelector('.guess').value = 23)}`
// )
let secretNumber = Math.floor(Math.random() * 20) + 1

//add an event listener for the check button
//pass in the type of the event (click)
console.log(`random number is: ${secretNumber}`)
let scoreCount = 20
let highScore = 0

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

const setSuccessLayout = () => {
    displayMessage('YOU WON!!!!!!!')
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber
    secretNumber = Math.floor(Math.random() * 20) + 1
    scoreCount > highScore
        ? (highScore = scoreCount)
        : (scoreCount = scoreCount)
    document.querySelector('.highscore').textContent = highScore
}

const setLoserLayout = () => {
    displayMessage('YOU LOST THE GAME')
    document.querySelector('.score').textContent = 0
    document.querySelector('body').style.backgroundColor = '#ff0000'
    document.querySelector('.number').style.width = '30rem'
}

document.querySelector('.check').addEventListener('click', () => {
    let score = Number(document.querySelector('.score').textContent)

    //capture the user input (and convert it to a number)
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        displayMessage('No number was provided')
    } else if (guess === secretNumber) {
        setSuccessLayout()
        //display the high score
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? `Too high!` : `Too low!`
            scoreCount--
            document.querySelector('.score').textContent = scoreCount
        } else {
            setLoserLayout()
        }
    }
})

document.querySelector('.again').addEventListener('click', () => {
    //reset the number
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    //reset the background color
    document.querySelector('body').style.backgroundColor = '#222'
    //reset the random score
    scoreCount = 20
    document.querySelector('.score').textContent = scoreCount
    document.querySelector('.highscore').textContent = highScore
    //reset the guess text back to zero
    document.querySelector('.guess').value = null
    console.log(scoreCount)
    //reset the message
    document.querySelector('.message').textContent = 'Start guessing...'
})
