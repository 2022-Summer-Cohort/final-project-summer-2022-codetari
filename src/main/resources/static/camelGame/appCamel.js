import question from "./question.js"
const container = document.querySelector(".container") 
const questioncontainer = document.querySelector(".questioncontainer")
const camel = document.querySelector(".camel")
const qSel=document.querySelector(".questionsspace");
let keys = {ArrowsUp: false, ArrowDown: false, Arrowleft: false, ArrowRight: false};
let x = 50;
// let y = 75;
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

const tl = gsap.timeline({ defaults: { duration: 2 } })
const t2 = gsap.timeline({ defaults: { duration: 2 } })

setInterval(() => {
    tl.fromTo('#left-bracket', { x: '0px', ease: 'bounce' }, { x: '10px', duration: 1 })
    tl.fromTo('#left-bracket', { x: '10px', ease: 'bounce' }, { x: '0px', duration: 1 })

    t2.fromTo('#right-bracket', { x: '0px', ease: 'bounce' }, { x: '-10px', duration: 1 })
    t2.fromTo('#right-bracket', { x: '-10px', ease: 'bounce' }, { x: '0px', duration: 1 })

}, 1000);


document.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'ArrowLeft' :
        console.log("arrow key pressed") 
        x-=20  
        // camel.style.transform =`translate(${x}px,${y}vh)`
        camel.style.transform =`translate(${x}px)`
    break
  
            case 'ArrowRight' :
            console.log("arrow key pressed") 
            x+=20  
            // camel.style.transform =`translate(${x}px,${y}vh)`
            camel.style.transform =`translate(${x}px)`
     break       

    }

})



function animeUp(){
    // y-=15
    // camel.style.transform =`translate(${x}px,${y}vh)` 
    camel.style.transform =`translate(${x}px)`
}
function animeDown(){
    // y+=15
    // camel.style.transform =`translate(${x}px,${y}vh)` 
    camel.style.transform =`translate(${x}px)`
}

let distance = 110;
// let distance = 5000
let gameOver = false
let  cars=[".red",".green",".blue"]
let carindex=0

function moveCar(distanceChange){
     const t1 = gsap.timeline({defaults: {duration: .5}})
    //  t1.to('.cars', {y: '+-1000px'})
    let carclass= cars[carindex]
    if(!gameOver){
        carindex++
        if(carindex>2){
            carindex=0
    }
    
    }
     t1.fromTo(carclass, {opacity: 1, y: '-200'}, {opacity: 1, y:(distance-distanceChange)+"vh"})
     if(carindex==0){
         x=2
     } 
     else if(carindex==1){
         x=9
     }
     else{
         x=16
     }
            // camel.style.transform =`translate(${x}px,${y}vh)`
            camel.style.transform =`translate(${x}vw)`
}

setInterval(() => {
    if(!gameOver){
        moveCar(0)
    }
    
},500)

    

// setInterval(() => {
//     moveCar(".green")
 
// },500)
// setInterval(() => {
//     moveCar(".blue")

// },500)

// fetch ("/api/qA")
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
    fetch ("/api/qA")
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
    fetch(`/api/qA/${randomId}`)
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
                getRandomId()
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
        gameOver=true
        carindex=1
    //   document.querySelector(".camel").style.display = "YOU LOSE!";
      setTimeout(function(){
          moveCar(40)
          
      },1000)
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



    