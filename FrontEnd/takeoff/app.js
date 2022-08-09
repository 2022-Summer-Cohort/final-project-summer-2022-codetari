import question from "./questions.js"

const container = document.querySelector(".container")
const playBtn = document.querySelector(".playGame")
const scoreEl = document.querySelector(".score");


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

function initiateCollision(){
    const element = document.querySelector('spaceship');
    const position = element.getBoundingClientRect();
    const x = position.left;
    const y = position.top;
    console.log(x, y)
    if (player._score > 1){
        if ('.bg', {y: '0'}) {
            console.log("GAMEOVER");
        } 
    }
}


playBtn.addEventListener("click", ()=>{
    getRandomId();
})
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
    console.log(q)
    const submitBtn = document.querySelector(".submit");
    const answers = document.querySelector("#correctAnswer");
    submitBtn.addEventListener('click', ()=>{
        if(answers.checked){
            player.addScore();
            getRandomId();
            animeUp();
            down();
            initiateCollision();
            container.innerHTML = ""
            console.log(player._score);
            console.log(scoreEl);
            scoreEl.innerHTML = player._score;
            

        }
        else{
            container.innerHTML = ""
            getRandomId();
        }
    })
}








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





