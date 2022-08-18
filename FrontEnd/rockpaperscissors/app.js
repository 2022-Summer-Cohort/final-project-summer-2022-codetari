import question from "./questions.js"

const tl = gsap.timeline({ defaults: { duration: 2 } })
const t2 = gsap.timeline({ defaults: { duration: 2 } })

setInterval(() => {
    tl.fromTo('#left-bracket', { x: '0px', ease: 'bounce' }, { x: '10px', duration: 1 })
    tl.fromTo('#left-bracket', { x: '10px', ease: 'bounce' }, { x: '0px', duration: 1 })

    t2.fromTo('#right-bracket', { x: '0px', ease: 'bounce' }, { x: '-10px', duration: 1 })
    t2.fromTo('#right-bracket', { x: '-10px', ease: 'bounce' }, { x: '0px', duration: 1 })

}, 1000);

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
// const resultDisplay = document.getElementById("resultX");
const possibleChoices = document.querySelectorAll("button");
const userScoreDisplay = document.getElementById("score");
const container = document.querySelector(".container");
const cpuEL = document.querySelector(".computerChoiceImage");
const playerEL = document.querySelector(".playerChoiceImage");

let userChoice;
let computerChoice;
let result;
let score;

score = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userImageChange();
    generateComputerChoice();
    getResult();
    adjustScore();
    resultDisplay.innerHTML = result;
    Winning();
  })
);

function userImageChange() {
  if (userChoice == "rock") {
    playerEL.innerHTML = '<img class="playerChoiceImage" src="/rockpaperscissors/images/Rock.png" alt="">';
    userChoiceDisplay.innerHTML = "ROCK";
  }
  else if (userChoice == "paper") {
    playerEL.innerHTML = '<img class="playerChoiceImage" src="/rockpaperscissors/images/Paper.png" alt="">';
    userChoiceDisplay.innerHTML = "PAPER";
  }
  else if (userChoice == "scissors") {
    playerEL.innerHTML = '<img class="playerChoiceImage" src="/rockpaperscissors/images/Scissors.png" alt="">';
    userChoiceDisplay.innerHTML = "SCISSORS";
  }
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  if (randomNumber == 1) {
    computerChoice = "rock";
    cpuEL.innerHTML = '<img class="computerChoiceImage" src="/rockpaperscissors/images/Rock.png" alt="">';
    computerChoiceDisplay.innerHTML = "ROCK";
  }

  if (randomNumber == 2) {
    computerChoice = "paper";
    cpuEL.innerHTML = '<img class="computerChoiceImage" src="/rockpaperscissors/images/Paper.png" alt="">';
    computerChoiceDisplay.innerHTML = "PAPER";
  }

  if (randomNumber == 3) {
    computerChoice = "scissors";
    cpuEL.innerHTML = '<img class="computerChoiceImage" src="/rockpaperscissors/images/Scissors.png" alt="">';
    computerChoiceDisplay.innerHTML = "SCISSORS";
  }
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

// function resultFlash() {
//   document.querySelector(".result").style.display = "flex";
//   document.querySelector(".result").style.animation = "flash 1s ease-in-out 1s 1 normal forwards running";
// }

function adjustScore() {
  getResult();
  if (result == "Win!") {
    score++;
    userScoreDisplay.innerText = score;
  } else if (result == "Draw!") {
    userScoreDisplay.innerText = score;
  } else if (result == "Lose!") {
    getRandomId();
    alert("You just got a question");
    // score --;
    userScoreDisplay.innerText = score;
    // PUT WIPE BATTLEFIELD FUNCTION when question pops up
  }
}

// resultDisplay.innerText = result
// console.log(result)
// console.log(score)
function getRandomId() {
  fetch("http://localhost:8080/api/qA")
    .then(res => res.json())
    .then(qas => {
      let ids = [];
      qas.forEach(qa => {
        const idField = qa.id;
        ids.push(idField);
      })
      let randomId = ids[Math.floor(Math.random() * ids.length)];
      createQuestion(randomId)
    })

}
function createQuestion(randomId) {
  fetch(`http://localhost:8080/api/qA/${randomId}`)
    .then(res => res.json())
    .then(q => {
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
      else {
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

function exitGame() {
  makeHomeView();
}
