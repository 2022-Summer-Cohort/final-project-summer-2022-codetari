import playGame from "./space.js"
import question from "./questions.js"

const container = document.querySelector(".container")
const playBtn = document.querySelector(".playGame")
let qCount = 0;


playBtn.addEventListener("click", ()=>{
    getRandomId();
    playGame();
})
function getRandomId(){
    qCount++;
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
    const answers = document.querySelector("#correctAnswer");
    submitBtn.addEventListener('click', ()=>{
        if(answers.checked){
            container.innerHTML = ""
            getRandomId();
            qcount ++;
        }
        else{
            container.innerHTML = ""
            getRandomId();
        }

    })

}