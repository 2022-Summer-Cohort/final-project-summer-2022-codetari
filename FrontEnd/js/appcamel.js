const container = document.querySelector(".container") 
const camel = document.querySelector(".camel")
let keys = {ArrowsUp: false, ArrowDown: false, Arrowleft: false, ArrowRight: false};
let x = 50;
let y = 90;
const redcar = document.querySelector(".red")
const greencar = document.querySelector(".green")
const bluecar = document.querySelector(".blue")
const yellowcar = document.querySelector(".yellow")
// const redcarpath = redcar.querySelector(".carcolor")
// const greencarpath = greencar.querySelector(".carcolor")
// const bluecarpath = bluecar.querySelector(".carcolor")
// const yellowcarpath = yellowcar.querySelector(".carcolor")

// redcar.getSVGDocument().getElementById("carcolor").setAttribute("fill","red")
// bluecar.setAttribute("fill","blue")
greencar.contentDocument().getElementById("carcolor").setAttribute("fill","green")
// yellowcar.getSVGDocument().getElementById("carcolor").setAttribute("fill","yellow")



document.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'ArrowLeft' :
        console.log("arrow key pressed") 
        x-=20  
        camel.style.transform =`translate(${x}px,${y}vh)`

  
            case 'ArrowRight' :
            console.log("arrow key pressed") 
            x+=20  
            camel.style.transform =`translate(${x}px,${y}vh)`
            

    }
})