export default function question(q){
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
    <div id="questionPop">
    <div>
        <div>
            <div class="questionBox">
                <h2 class="question">${q.question}</h2>
                    <div class="form">
                    <input type="hidden" class="rightAnswer" value="${q.answer}">
                    ${shuffledArray.map(ans => {
                        return `
                    <div>
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
    `
}