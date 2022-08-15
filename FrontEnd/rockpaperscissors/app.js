const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
const userScoreDisplay = document.getElementById("score")
let userChoice
let computerChoice
let result
let score

score == 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice= e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    resultDisplay.innerHTML = result
}))

function generateComputerChoice(){
    const randomNumber =( Math.floor(Math.random()*3) +1)
    console.log(randomNumber)

    if(randomNumber == 1 ){
        computerChoice = "rock"
    }

    if(randomNumber == 2 ){
        computerChoice = "paper"
    }

    if(randomNumber == 3 ){
        computerChoice = "scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {

    if (computerChoice == "rock" && userChoice == "paper") {
        result = "Win!"
    }

    else if (computerChoice == "rock" && userChoice == "scissors") {
        result = "Lose!"
    }

    else if (computerChoice == "paper" && userChoice == "scissors") {
        result = 'Win!'
    }

    else if (computerChoice == "paper" && userChoice == "rock") {
        result = "Lose!"
    }
    else if (computerChoice == "scissors" && userChoice == "rock") {
        result = "Win!"
    }
    else if (computerChoice == "scissors" && userChoice == "paper") {
        result = "Lose!"
    }
    else if (computerChoice == userChoice) {
        result = "Draw!"
    }
    console.log(result)
    resultDisplay.innerHTML = result
    adjustScore();
}

function adjustScore(){
    if(result = "Win!"){
        score = ++
    } 
    else if( result = "Lose!"){
        score = --
    }
}
