export default function question(q){
    console.log(q.question)
    console.log(q.wrongA)
    return `
    <div class="split left">
        <div id="questionPop" class="overlay">
            <div class="popup">
                <div class="content">
                    <div class="questionBox">
                        <h2 class="question">${q.question}</h2>
                        <div class="form">
                        <label for="right">${q.answer}</label>
                        <input type="radio" name="multi" value="correct" id="correctAnswer">
                        ${q.wrongA.map(wrong => {
                            return `
                        <label for="wrong3">${wrong}</label>
                        <input type="radio" name="multi" value="wrongAnswer" id="incorrect"></input>
                        `
                            }).join("")
                        }
                        <button type="submit" class="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="x"><span class="score">..//PREPARE FOR LIFTOFF!..</span></div>
    </div>
    `
}