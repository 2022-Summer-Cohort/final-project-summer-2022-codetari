import home from './home.js'
import header from './header.js'
import footer from './footer.js'
import allGames from './allGames.js'
import animation from './animation.js'
import boxes from './boxes.js'

const anchor = document.querySelector(".anchor");

function makeHomeView(){

    anchor.innerHTML = header();
    anchor.innerHTML += home();
    anchor.innerHTML += footer();
    const settingsBtn = document.querySelector(".settingsSubmit");
    settingsBtn.addEventListener("click", ()=>{
        makeGamesView();
    })

}
function makeGamesViewFromJson(games){
    anchor.innerHTML = header();
    anchor.innerHTML += allGames(games);
    anchor.innerHTML += footer();
    boxes();
}
function makeGamesView(){
    fetch ('http://localhost:8080/api/games')
    .then(res => res.json())
    .then(games =>{

        makeGamesViewFromJson(games)
    })
}
makeHomeView();
animation();