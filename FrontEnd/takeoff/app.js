import question from "./questions.js"

const container = document.querySelector(".container")
const playBtn = document.querySelector(".playGame")


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
        // console.log(randomId)
    })

}
// function makeQuestionView(q){
//     body.innerHtml = question(q);
// }


function createQuestion(randomId){
    fetch(`http://localhost:8080/api/qA/${randomId}`)
        .then(res => res.json())
        .then(q =>{
            displayQuestion(q)
            // console.log(q)
        })

}
function displayQuestion(q){
    container.innerHTML += question(q);
    console.log(q)
    const submitBtn = document.querySelector(".submit");
    const answers = document.querySelector("#correctAnswer");
    submitBtn.addEventListener('click', ()=>{
        if(answers.checked){
            animeUp();
            container.innerHTML = ""
            getRandomId();
        }
        else{
            animeDown();
            container.innerHTML = ""
            getRandomId();
        }

    })

}











function animeUp(){
    const tl = gsap.timeline({defaults: {duration: 1}})
    const t2 = gsap.timeline({defaults: {duration: .5}})
    tl.to('.bg', {y: '+=500px'})
    t2.to('#flames', {opacity: 1})
    t2.to('#flames', {opacity: 0})
}
function animeDown(){
    const tl = gsap.timeline({defaults: {duration: 1}})
    tl.to('.bg', {y: '0'})
}
