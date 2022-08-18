import home from './home.js'
import header from './header.js'
import footer from './footer.js'
import allGames from './allGames.js'
import animation from './animation.js'
import boxes from './boxes.js'
import user from './user.js'

const anchor = document.querySelector(".anchor");

function makeHomeView(){

    anchor.innerHTML = header();
    anchor.innerHTML += home();
    anchor.innerHTML += footer();
    const settingsBtn = document.querySelector(".settingsSubmit");
    const levelInput = document.querySelectorAll(".level");
    const languageInput = document.querySelectorAll(".languageInput")
    settingsBtn.addEventListener("click", ()=>{
        let userLang;
        let userLevel;
        languageInput.forEach(lang =>{
            if(lang.checked){
                userLang = lang.value;
            }
        })
        levelInput.forEach(level =>{
            if(level.value){
                userLevel = level.value;
            }
        })
        const newUser = new user(userLevel, userLang)
        makeGamesView(newUser);
    })

}
function makeGamesViewFromJson(newUser, games){
    console.log(newUser.language)
    anchor.innerHTML = header(newUser.language, newUser.level);
    anchor.innerHTML += allGames(games);
    anchor.innerHTML += footer();
    boxes();
}
function makeGamesView(newUser){
    fetch ('http://localhost:8080/api/games')
    .then(res => res.json())
    .then(games =>{

        makeGamesViewFromJson(newUser, games)
    })
}
makeHomeView();
animation();
