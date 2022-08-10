const container = document.querySelector(".container") 
const camel = document.querySelector(".camel")
let keys = {ArrowsUp: false, ArrowDown: false, Arrowleft: false, ArrowRight: false};
let x = 50;
let y = 75;
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
    const t1 = gsap.timeline({defaults: {duration: 1}})
    const t2 = gsap.timeline({defaults: {duratioon: .5}})
    t1.to('.bg' , {y: '+-500px'})
    t2.to('#Flames', {opacity: 1})
    t2.to('#Flames', {opacity: 0})

}
function animeDown(){
    const t1 = gsap.timeline({defaults: {duration: 1}})
    t1.to('.bg', {y: '0'})
}


function moveCar(carclass){
     const t1 = gsap.timeline({defaults: {duration: 1}})
    //  t1.to('.cars', {y: '+-1000px'})
     t1.fromTo(carclass, {opacity: 0, y: '0'}, {opacity: 1,y:"500"})
}

setInterval(() => {
    moveCar(".red")
},1000)
setInterval(() => {
    moveCar(".yellow")
    
},400)
setInterval(() => {
    moveCar(".green")
 
},500)
setInterval(() => {
    moveCar(".blue")

},1000)


  

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



    