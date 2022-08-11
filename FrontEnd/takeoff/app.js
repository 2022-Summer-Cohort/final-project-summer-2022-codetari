import question from "./questions.js"
import scoreview from "./score.js";

const container = document.querySelector(".container")
const playBtn = document.querySelector(".playGame")
const scoreEl = document.querySelector(".score");
const testEl = document.querySelector(".split left");

class Player {
    constructor() {
        this._score = 0;
    }
    get score() {
        return this._score;
    }
    addScore() {
        this._score ++;
    }
}

const player = new Player();

// y: -increase upon descent 
// fullscreen main monitor without inspect open: css top: 53%; y: -6987.4375
// fullscreen laptop monitor without inspect open: top: 43%; y: -4707.95849609375
function initiateCollision(){
    const element = document.querySelector('spaceship');
    if (player._score > 1){
        if ('.bg', {y: -159}) {
            console.log(background.getBoundingClientRect());
            console.log("GAMEOVER");
        } 
    }
}
initiateCollision()
const background = document.querySelector('.bg');
function collidesWithGround() {
    const background = document.querySelector('.bg');
    // if (background.offsetHeight == window.innerHeight && player.score > 0) {
    //     console.log("gameOver");
    // }
    if (player.score > 0 && background.getBoundingClientRect({y: '-4700'})) {
        console.log("GAMEOVERRRRRRRR");
    }
}

playBtn.addEventListener("click", ()=>{
    getRandomId(); 
})

// function scoreMaker() {
//     let questionContainer = document.querySelectorAll(".x");

//     questionContainer.forEach(test => {
//     const scoreEl = test.querySelector(".score");
//     console.log(scoreEl);
//     // scoreEl.innerHTML = "__::Score::__ " + player._score;
//     scoreEl.innerHTML = "__::Score::__ " + player._score;
// })          
// }

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
        console.log(randomId)
    })
    
}
collidesWithGround()

function makeQuestionView(q){
    body.innerHtml = question(q);
    
}

function createQuestion(randomId){
    fetch(`http://localhost:8080/api/qA/${randomId}`)
        .then(res => res.json())
        .then(q =>{
            displayQuestion(q)
            console.log(q)
        })
}

function displayQuestion(q){
    
    container.innerHTML += question(q);
    // testEl.innerHTML += scoreview();
    console.log(q)
    const submitBtn = document.querySelector(".submit");
    const answers = document.querySelector("#correctAnswer");
    submitBtn.addEventListener('click', ()=>{
        console.log(background.getBoundingClientRect());
        if(answers.checked){
            player.addScore();
            getRandomId();
            animeUp();
            down();
            // collidesWithGround()
            initiateCollision()
            container.innerHTML = ""
            console.log(player._score);
            
            scoreEl.innerHTML = "__::Score::__ " + player._score;
            
        }
        else{
            container.innerHTML = ""
            getRandomId();
        }
        
    })
     
}

console.log(background.height);
console.log(window.innerHeight);


function animeUp(){
    
    const tl = gsap.timeline({defaults: {duration: 5}})
    const t2 = gsap.timeline({defaults: {duration: .5}})
    tl.to('.bg', {y: '+=500px', ease: "power4.out"})
    t2.to('#flames', {opacity: 1})
    t2.to('#flames', {opacity: 0})
}

function animeDown(){
    const tl = gsap.timeline({defaults: {duration: 5}})
    tl.to('.bg', {y: '0'})
}

function down(){
    const tl = gsap.timeline({defaults: {duration: 5}})

    tl.to('.bg', {y: '0', delay: 5, ease: "power4.in"})
    
}





