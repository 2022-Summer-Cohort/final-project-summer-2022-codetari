import playGame from "./space.js"
import question from "./questions.js"
// import newUser from "../js/app.js"

// console.log(newUser);

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
let qCount = 0;
let wCount = 1;
if(qCount > 2){
    playGame(qCount, wCount)
}
console.log(qCount)

playBtn.addEventListener("click", ()=>{
    getRandomId();
    playGame(qCount);
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
    })

}
function createQuestion(randomId){
    fetch(`http://localhost:8080/api/qA/${randomId}`)
        .then(res => res.json())
        .then(q =>{
            displayQuestion(q)
        })

}
function displayQuestion(q){
    container.innerHTML += question(q);
    console.log(q)
    const submitBtn = document.querySelector(".submit");
    const correctAnswer = document.querySelector(".rightAnswer");
    const answerInput = document.querySelectorAll(".answerInput");
    submitBtn.addEventListener('click', ()=>{
        let t = 0;
        answerInput.forEach(input =>{
            if(input.checked && input.value == correctAnswer.value){
                t++;
                const tl = gsap.timeline({defaults: {duration: 1}})
            const t2 = gsap.timeline({defaults: {duration: 1}})

            tl.to('.correctAnswer', {opacity: 1})
            t2.to('.correctAnswer', {opacity: 0, delay: 1})

            qCount ++;
            container.innerHTML = ""
            getRandomId();
            if(qCount == 3){
                const tl = gsap.timeline({defaults: {duration: 1}})
                const t2 = gsap.timeline({defaults: {duration: 1}})

                tl.to('.upgrade', {opacity: 1})
                t2.to('.upgrade', {opacity: 0, delay: 1})
                playGame(qCount, wCount)
            }
            }
        })
        if(t==0){
            wCount ++;
            const tl = gsap.timeline({defaults: {duration: 1}})
            const t2 = gsap.timeline({defaults: {duration: 1}})

            container.innerHTML = ""
            tl.to('.wrongAnswer', {opacity: 1})
            t2.to('.wrongAnswer', {opacity: 0, delay: 1})
            getRandomId();
            if(wCount == 2){
                playGame(qCount, wCount)
            }
        }

    })

}