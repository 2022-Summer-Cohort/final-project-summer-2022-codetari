// function shuffleArray(array) {
//     let curId = array.length;
//     // There remain elements to shuffle
//     while (0 !== curId) {
//       // Pick a remaining element
//       let randId = Math.floor(Math.random() * curId);
//       curId -= 1;
//       // Swap it with the current element.
//       let tmp = array[curId];
//       array[curId] = array[randId];
//       array[randId] = tmp;
//     }
//     return array;
//   }
//   // Usage of shuffle
//   let arr = [1, 2, 3, 4, 5];
//   arr = shuffleArray(arr);
//   console.log(arr);

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

let aEL = document.querySelector(".a").innerHTML;
let bEL = document.querySelector(".b").innerHTML;
let cEL = document.querySelector(".c").innerHTML;
let dEL = document.querySelector(".d").innerHTML;

let d1EL = document.querySelector(".one");
let d2EL = document.querySelector(".two");
let d3EL = document.querySelector(".three");
let d4EL = document.querySelector(".four");

const mixBtn = document.querySelector(".mixBtn");
const answerBlockEL = document.querySelector(".answerBlock");

mixBtn.addEventListener("click", () => {
// answerBlockEL.addEventListener("onload", () => {
    let answers = [aEL, bEL, cEL, dEL];
    result = shuffleArray(answers);
    console.log(answers);

    d1EL.innerHTML = answers[0];
    d2EL.innerHTML = answers[1];
    d3EL.innerHTML = answers[2];
    d4EL.innerHTML = answers[3];

    let correctAnswerEL = document.querySelector("#correctAnswer");
    let textResultEL = document.querySelector(".textResult");
    const answerBtn = document.querySelector(".answerSubmit");

    answerBtn.addEventListener('click', () => {
        if (correctAnswerEL.checked) {
            textResultEL.innerHTML = "CORRECT!";
        }
        else {
            textResultEL.innerHTML = "WRONG!";
        }
    })
})

