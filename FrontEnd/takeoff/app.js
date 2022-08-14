import question from "./questions.js"
import scoreview from "./score.js";

const container = document.querySelector(".container")
const playBtn = document.querySelector(".playGame")
const scoreEl = document.querySelector(".score");
const leftEl = document.querySelector(".split left");
const rightEl = document.querySelector(".split right");
const hiddenScoreEl = document.querySelector(".hiddenScore");
const spaceshipEl = document.querySelector(".spaceship");


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
    subScore() {
        this._score --;
    }
}

const player = new Player();




const background = document.querySelector('.bg');
function collidesWithGround() {
    // if (background.offsetHeight == window.innerHeight && player.score > 0) {
    //     console.log("gameOver");
    // }
    if (player.score > 0 && background.getBoundingClientRect({y: '-6900px'})) {
        console.log("GAMEOVERRRRRRRR");
    }
}

playBtn.addEventListener("click", ()=>{
    getRandomId(); 
})

function scoreMaker() {
    let questionContainer = document.querySelectorAll(".score");

    questionContainer.forEach(test => {
    const scoreEl = test.querySelector(".score");
    console.log(scoreEl);
    scoreEl.innerHTML = "__::Score::__ " + player._score;
})          
}
scoreMaker();
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
// collidesWithGround()

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

let hS = 1;

function displayQuestion(q){
    
    container.innerHTML += question(q);
    // leftEl.innerHTML = scoreview();
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
            collide();
            collidesWithGround();
            hS++;
            container.innerHTML = "";
            console.log(player._score);
            scoreEl.innerHTML = "__::Score::__ " + player._score;
            
        }
        else{
            container.innerHTML = "";
            getRandomId();
            // initiateCollision();
            hS--;
        }    
        
    })  
    // initiateCollision();
    console.log("hiddenscore" + hS); 
}


function initiateCollision() { 
    // if (hS <= 0) {
        document.querySelector(".spaceship").style.display="none";
        document.querySelector(".gameOver").innerHTML = "GAMEOVER";
        document.querySelector("#boom").style.display="flex";
        // document.querySelector("#boom").style.animationDelay="11s";
    //}
}
hiddenScoreEl.addEventListener("onChange", ()=> {
    hiddenScoreEl = hS;
    initiateCollision();
    
    })


window.addEventListener('scroll', function() { 
    document.getElementById('showScroll').innerHTML = window.pageYOffset + '5000px'; 
});

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
    const zeroAxisEl = window.getComputedStyle(background).getPropertyValue("transform-origin").substring(9);
    console.log(zeroAxisEl);
    tl.to('.bg', {y: '0', delay: 5, ease: "power4.in", onComplete: initiateCollision})
    
    
    
    
    // let t3 = new TimeLineMax({
    //     onComplete: console.log('finish')
    // })
    
    
    
    // collide();
        // if (player._score > 1 && window.getComputedStyle(background).getPropertyValue("transform-origin").substring(9) == zeroAxisEl) {
        //     console.log("explosion");
        // }
        // const animated = window.querySelector('.bg');
        // animated.addEventListener('animationend',() => {
        //     console.log('Animation ended');
        //   });
}
// const animated = document.querySelector(tl);
// animated.addEventListener('animationend',() => {
//     console.log('Animation ended');
//   });

function collide(){
const zeroAxisEl = window.getComputedStyle(background).getPropertyValue("transform-origin").substring(9);
console.log(zeroAxisEl);
    if (player._score > 1 && window.getComputedStyle(background).getPropertyValue("transform-origin").substring(9) == zeroAxisEl) {
        console.log("blah");
    }
}

// var yAxis = document.querySelector('.bg');
// // set inline-style transform to element
// yAxis.style.transform = "translateY(" + (-200) + "px) scaleX(" + 1.6 + ") scaleY(" + 1.2 + ")";

// function getTranslateY() {
//   var style = window.getComputedStyle(yAxis);
//   var matrix = new WebKitCSSMatrix(style.transform);
//   console.log('translateY: ', matrix.m41);
// }

// document.querySelector('button').addEventListener('click', getTranslateY);




