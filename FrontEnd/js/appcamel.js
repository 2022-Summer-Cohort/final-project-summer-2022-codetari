const container = document.querySelector(".container") 
const camel = document.querySelector(".camel")
let keys = {ArrowsUp: false, ArrowDown: false, Arrowleft: false, ArrowRight: false};
let x = 50;
let y = 90;


document.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'ArrowLeft' :
        console.log("arrow key pressed") 
        x-=20  
        camel.style.transform =`translate(${x}px,${y}vh)`
            

    }
})