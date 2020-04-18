const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')


let result = 0
let currentTime = timeLeft.textContent

//function that clears the squares of "mole" class and adds "mole" class on a random position
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to use later
    hitPosition = randomPosition.id
}

//add an eventListener for our click on an elemnt and then compare it with the hitPosition to determine a hit
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result += 1
            score.textContent = result
        }
    })
})

//function to move the mole after a set amount of time
function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 800)
}

moveMole()

//countdown timer for the game
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let timerId = setInterval(countDown, 1000)