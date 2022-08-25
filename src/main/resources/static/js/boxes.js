export default function boxes(){
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

}