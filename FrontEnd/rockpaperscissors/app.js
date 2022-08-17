import question from "./questions.js"

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const userScoreDisplay = document.getElementById("score");
const container = document.querySelector(".container")
let userChoice;
let computerChoice;
let result;
let score;

score = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    adjustScore();
    resultDisplay.innerHTML = result;
    Winning();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  if (randomNumber == 1) {
    computerChoice = "rock";
  }

  if (randomNumber == 2) {
    computerChoice = "paper";
  }

  if (randomNumber == 3) {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice == "rock" && userChoice == "paper") {
    result = "Win!";
  } else if (computerChoice == "rock" && userChoice == "scissors") {
    result = "Lose!";
  } else if (computerChoice == "paper" && userChoice == "scissors") {
    result = "Win!";
  } else if (computerChoice == "paper" && userChoice == "rock") {
    result = "Lose!";
  } else if (computerChoice == "scissors" && userChoice == "rock") {
    result = "Win!";
  } else if (computerChoice == "scissors" && userChoice == "paper") {
    result = "Lose!";
  } else if (computerChoice == userChoice) {
    result = "Draw!";
  }
  console.log(result);
  resultDisplay.innerText = result;
}

function adjustScore() {
  getResult();
  if (result == "Win!") {
    score++;
    userScoreDisplay.innerText = score;
  } else if (result == "Draw!") {
    userScoreDisplay.innerText = score;
  } else if (result == "Lose!") {
    getRandomId()
    alert("You just got a question");
    // score --;
    userScoreDisplay.innerText = score;
  }
}

// resultDisplay.innerText = result
// console.log(result)
// console.log(score)
function getRandomId(){
  fetch ("http://localhost:8080/api/qA")
  .then(res => res.json())
  .then(qas => {
      let ids = [];
      qas.forEach(qa =>{
          const idField = qa.id;
          ids.push(idField);
      })
      let randomId = ids[Math.floor(Math.random()*ids.length)];
      createQuestion(randomId)
  })

}
function createQuestion(randomId){
  fetch(`http://localhost:8080/api/qA/${randomId}`)
      .then(res => res.json())
      .then(q =>{
          displayQuestion(q)
      })

}

function displayQuestion(q) {
    container.innerHTML += question(q);
    console.log(q);
    const submitBtn = document.querySelector(".submit");
    const correctAnswer = document.querySelector(".rightAnswer");
    const answerInput = document.querySelectorAll(".answerInput");
    submitBtn.addEventListener("click", () => {
      answerInput.forEach((input) => {
        if (input.checked && input.value == !correctAnswer.value) {
          score--;
          userScoreDisplay.innerText = score;
          container.innerHTML = ""
        }
        else{
          score++;
          userScoreDisplay.innerText = score;
          container.innerHTML = ""
        }
      });
    });
  }


function Winning() {
  if (score < 0) {
    alert("Sorry, You Lose!");
    exitGame();
  }
  if (score == 10) {
    alert("You Win! Yay!");
    exitGame();
  }
}

function exitGame(){
    makeHomeView();
}
