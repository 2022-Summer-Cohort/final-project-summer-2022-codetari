const tl = gsap.timeline({ defaults: { duration: 2 } })
const t2 = gsap.timeline({ defaults: { duration: 2 } })

setInterval(() => {
    tl.fromTo('#left-bracket', { x: '0px', ease: 'bounce' }, { x: '10px', duration: 1 })
    tl.fromTo('#left-bracket', { x: '10px', ease: 'bounce' }, { x: '0px', duration: 1 })

    t2.fromTo('#right-bracket', { x: '0px', ease: 'bounce' }, { x: '-10px', duration: 1 })
    t2.fromTo('#right-bracket', { x: '-10px', ease: 'bounce' }, { x: '0px', duration: 1 })

}, 1000);


let gBEL = document.querySelectorAll(".gameBox");

gBEL.forEach(box => {
    const gameBoxBtnEL = box.querySelector(".gameBox1");

    gameBoxBtnEL.addEventListener("click", () => {
        hideGameCatBtn();
    })

    const gameBoxBtnCloseEL = box.querySelector(".boxClose");

    gameBoxBtnCloseEL.addEventListener("click", () => {
        showGameCatBtn();
    })

    function hideGameCatBtn() {
        box.querySelector(".gameBox1").style.display = "none";
        box.querySelector(".gameBox2").style.display = "flex";
    }

    function showGameCatBtn() {
        box.querySelector(".gameBox1").style.display = "flex";
        box.querySelector(".gameBox2").style.display = "none";
    }
})

const favsBoxBtnEL = document.querySelector(".favsIcon");

favsBoxBtnEL.addEventListener("click", () => {
    hideGameFavsBtn();
})

const gameBoxBtnCloseEL = document.querySelector(".favsBoxClose");

gameBoxBtnCloseEL.addEventListener("click", () => {
    showGameFavsBtn();
})

function hideGameFavsBtn() {
    document.querySelector(".favsBtn").style.display = "none";
    document.querySelector(".favsBox").style.display = "flex";
}

function showGameFavsBtn() {
    document.querySelector(".favsBtn").style.display = "flex";
    document.querySelector(".favsBox").style.display = "none";
}

