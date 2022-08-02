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

