/* globals GameApp */
'use strict';

const gameApp = new GameApp();
const dom = gameApp.render();
const root = document.getElementById('root');
root.appendChild(dom);
const container = document.querySelector('.container');


getRandomId();

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
    container.innerHTML = question(q);
    const submitBtn = document.querySelector(".submit");
    const correctAnswer = document.querySelector(".rightAnswer");
    const answerInput = document.querySelectorAll(".answerInput");
    submitBtn.addEventListener('click', ()=>{
        answerInput.forEach(input =>{
            if(input.checked && input.value == correctAnswer.value){
                // select the correct ingredients
            container.innerHTML = ""
            getRandomId();
            console.log("correct");
            }
            else{
                container.innerHTML = ""
                getRandomId();
                console.log("wrong");
            }
        })

    })

}

function question(q){
    console.log(q.answer)
    const answersArr = [q.answer];
    q.wrongA.forEach(wrong =>{
        answersArr.push(wrong);
    })
    function shuffleArray(array) {
        let curId = array.length;
    
        while (0 !== curId) {
    
            let randId = Math.floor(Math.random() * curId);
            curId -= 1;
    
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
        return array;
    }
    const shuffledArray = shuffleArray(answersArr);
    return `
    <div>
    <div id="questionPop" class="fix">
    <div>
        <div class="questionContent">
            <div class="questionBox">
                <h2 class="question">${q.question}</h2>
                    <div class="form">
                    <input type="hidden" class="rightAnswer" value="${q.answer}">
                    ${shuffledArray.map(ans => {
                        return `
                    <div class="joinLabelInput">
                    <label for="wrong3" class="incorrect" >${ans}</label>
                    <input type="radio" name="multi" value="${ans}" id="" class="answerInput"></input>
                    </div>
                    `
                    }).join("")
                }
                    <button type="submit" class="submit">Submit</button>
                    </div>
            </div>
        </div>
    </div>
</div>
</div>
    `
}