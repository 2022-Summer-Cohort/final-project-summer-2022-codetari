const tl = gsap.timeline({defaults: {duration: 1}})
const t2 = gsap.timeline({defaults: {duration: .5}})


const up = document.querySelector(".up");
const down = document.querySelector(".down");
up.addEventListener('click', ()=>{
    tl.to('.bg', {y: '+=500px'})
    t2.to('#flames', {opacity: 1})
    t2.to('#flames', {opacity: 0})

})
down.addEventListener('click', ()=>{
    tl.to('.bg', {y: '0'})
})