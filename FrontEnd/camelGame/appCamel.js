import question from "./questions.js"
const container = document.querySelector(".container") 
const questioncontainer = document.querySelector(".questioncontainer")
const camel = document.querySelector(".camel")
const qSel=document.querySelector(".questionsspace");
let keys = {ArrowsUp: false, ArrowDown: false, Arrowleft: false, ArrowRight: false};
let x = 50;
let y = 75;
const redcar = document.querySelector(".red")
const greencar = document.querySelector(".green")
const bluecar = document.querySelector(".blue")
const yellowcar = document.querySelector(".yellow")
const playBtn = document.querySelector(".playGame")
// const redcarpath = redcar.querySelector(".carcolor")
// const greencarpath = greencar.querySelector(".carcolor")
// const bluecarpath = bluecar.querySelector(".carcolor")
// const yellowcarpath = yellowcar.querySelector(".carcolor")

// redcar.getSVGDocument().getElementById("carcolor").setAttribute("fill","red")
// bluecar.setAttribute("fill","blue")
// greencar.contentDocument().getElementById("carcolor").setAttribute("fill","green")
// yellowcar.getSVGDocument().getElementById("carcolor").setAttribute("fill","yellow")



document.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'ArrowLeft' :
        console.log("arrow key pressed") 
        x-=20  
        camel.style.transform =`translate(${x}px,${y}vh)`
    break
  
            case 'ArrowRight' :
            console.log("arrow key pressed") 
            x+=20  
            camel.style.transform =`translate(${x}px,${y}vh)`
     break       

    }

})



function animeUp(){
    y-=15
    camel.style.transform =`translate(${x}px,${y}vh)` 
}
function animeDown(){
    y+=15
    camel.style.transform =`translate(${x}px,${y}vh)` 
}

let distance = 1100
let  cars=[".red",".green",".blue"]
let carindex=0

function moveCar(){
     const t1 = gsap.timeline({defaults: {duration: .5}})
    //  t1.to('.cars', {y: '+-1000px'})
    let carclass= cars[carindex]
    carindex++
    if(carindex>2){
        carindex=0
    }
     t1.fromTo(carclass, {opacity: 1, y: '-200'}, {opacity: 1,y:distance})
     if(carindex==0){
         x=250
     } 
     else if(carindex==1){
         x=380
     }
     else{
         x=120
     }
            camel.style.transform =`translate(${x}px,${y}vh)`
}

setInterval(() => {
    moveCar()
},500)

    

// setInterval(() => {
//     moveCar(".green")
 
// },500)
// setInterval(() => {
//     moveCar(".blue")

// },500)

// fetch ("http://localhost:8080/api/qA")
//     .then(res => res.json())
//     .then(qas => {
//         console.log(qas) 
//         makequestion(qas[6],qas)
//     })
  
//  function makequestion(newquestion,allquestions){
//      questioncontainer.innerHTML=question(newquestion)
//      const submitBtn = document.querySelector(".submit");
//      submitBtn.addEventListener('click', ()=>{
//         let randomId = Math.floor(Math.random()*allquestions.length);
//          makequestion(allquestions[randomId],allquestions)
        
        
//      })

//  }   
 let qCount = 0;
 
 
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
    })

}
function createQuestion(randomId){
    fetch(`http://localhost:8080/api/qA/${randomId}`)
        .then(res => res.json())
        .then(q =>{
            displayQuestion(q)
        })

}
let wrongCount = 0;
function displayQuestion(q){
    qSel.innerHTML += question(q);
    console.log(q)
    const submitBtn = document.querySelector(".submit");
    const correctAnswer = document.querySelector(".rightAnswer");
    const answerInput = document.querySelectorAll(".answerInput");
    submitBtn.addEventListener('click', ()=>{
        answerInput.forEach(input =>{
          
            if(input.checked && input.value == correctAnswer.value){
                
              animeUp(); 
            
            qSel.innerHTML = "";
       

            getRandomId();
            endGame();
            }
            else if(input.checked && input.value != correctAnswer.value){
                animeDown();
                qSel.innerHTML ="";
                wrongCount ++;
                endGame();
              

            }
           
        })
        
        qCount ++;
    })
   console.log(correctAnswer);
   console.log(wrongCount);
   console.log("questionCount"+qCount);
}
function endGame() {
    if(wrongCount == 3) {
      document.querySelector(".camel").style.display = "none";
  }  else if(qCount == 12) {
  document.querySelector(".endGame").innerHTML = "YOU WIN! Congrats on the Safe Camel!";
  document.querySelector(".endGame").style.display = "flex";
  }
  
  }

  
  
  
  
// function (camel) {
// let myLeft = this.car;
// let myright = this.car + (this,width);
// let mytop = this.car;
// let mybottom = this.car + (this.height);
// let otherleft = otherobj.car;
// let otherright = otherobj.car + (otherobj.width);
// let othertop = otherobj.car;
// let otherbottom = otherrobj.car +(otherobj.height);
// let crash = true;
// if((mybottom < othertop) ||
// (mytop > otherbottom) ||
// (mytight < otherleft)) {
//     crash = false;
// }
// return crash;
// }



    