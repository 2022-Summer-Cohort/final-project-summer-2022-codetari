import question from "./questions.js"
import scoreview from "./score.js";

const tl = gsap.timeline({ defaults: { duration: 2 } })
const t2 = gsap.timeline({ defaults: { duration: 2 } })

setInterval(() => {
    tl.fromTo('#left-bracket', { x: '0px', ease: 'bounce' }, { x: '10px', duration: 1 })
    tl.fromTo('#left-bracket', { x: '10px', ease: 'bounce' }, { x: '0px', duration: 1 })

    t2.fromTo('#right-bracket', { x: '0px', ease: 'bounce' }, { x: '-10px', duration: 1 })
    t2.fromTo('#right-bracket', { x: '-10px', ease: 'bounce' }, { x: '0px', duration: 1 })

}, 1000);

const container = document.querySelector(".container")
const playBtn = document.querySelector(".playGame")
const testEl = document.querySelector(".split left");
const rightEl = document.querySelector(".split right");
const hiddenScoreEl = document.querySelector(".hiddenScore");


class Player {
    constructor() {
        this._score = 0;
    }
    get score() {
        return this._score;
    }
    addScore() {
        this._score += 1;
    }
    subScore() {
        this._score -= 1;
    }
}

const player = new Player();
let hS = 1;
function initiateCollision() {
    if (hS <= -1) {
    document.querySelector(".spaceship").style.display="none";
    document.querySelector(".gameOver").innerHTML = "GAMEOVER";
    document.querySelector("#boom").style.display="flex";  
    }
}

hiddenScoreEl.addEventListener("onChange", ()=> {
    hiddenScoreEl = hS;
})

const background = document.querySelector('.bg');
playBtn.addEventListener("click", ()=> {
    getRandomId(); 
    document.querySelector(".playGame").style.visibility="hidden";
})


function getRandomId(){
    fetch ("/api/qA")
    .then(res => res.json())
    .then(qas => {
        let ids = [];
        qas.forEach(qa =>{
            const idField = qa.id;
            ids.push(idField);
        })
        let randomId = ids[Math.floor(Math.random()*ids.length)];
        createQuestion(randomId);
    })
}

function makeQuestionView(q){
    body.innerHtml = question(q);
    
}

function createQuestion(randomId){
    fetch(`/api/qA/${randomId}`)
        .then(res => res.json())
        .then(q =>{
            displayQuestion(q)
        })
}

function displayQuestion(q){
    container.innerHTML = question(q);
    const scoreEl = document.querySelector(".score");
    scoreEl.innerText = "<//Current Score//> _ " + player._score;
    console.log(q)
    const submitBtn = document.querySelector(".submit");
    const correctAnswer = document.querySelector(".rightAnswer");
    const answerInput = document.querySelectorAll(".answerInput");
    submitBtn.addEventListener('click', ()=>{
        answerInput.forEach(input =>{
            if(input.checked && input.value == correctAnswer.value){
                player.addScore();
                console.log("hiddenScore " + hS);
                getRandomId();
                animeUp();
                down();
                winGame();
                container.innerHTML = ""
                console.log(player._score);
            }
            else if (input.checked && input.value != correctAnswer.value) {

                player.subScore();
                hS--;
                console.log("hiddenScore " + hS);
                console.log(player._score);
                container.innerHTML = ""
                getRandomId();
                
            }
        })
    })
}        

function winGame() {
    const topReached = document.querySelector(".youWin");
    const newgame = document.querySelector(".newgame");
    if (player._score >= 10) {
        topReached.innerHTML = "victory!!!";
        setTimeout( ()=>{
        location.reload();
        }, 5000); 
    }
}

function animeUp(){
    
    const tl = gsap.timeline({defaults: {duration: 5}})
    const t2 = gsap.timeline({defaults: {duration: .5}})
    tl.to('.bg', {y: '+=800px', ease: "power4.out"})
    t2.to('#flames', {opacity: 1})
    t2.to('#flames', {opacity: 0})
}

// function animeDown(){
//     const tl = gsap.timeline({defaults: {duration: 5}})
//     tl.to('.bg', {y: '0'})
// }

function down(){
    const t3 = gsap.timeline({defaults: {duration: 5}})
    
        t3.to('.bg', {y: '0', delay: 5, ease: "power4.in", onComplete: initiateCollision})
}







