export default function allGames(games){
    return`
    <section class="mainContainer">
    <section class="allGamesPage">
        <h1>GAMES</h1>
        <section class="allGamesBoxes">

            ${games.map(game =>{
                let gameCat = game.category
                return `
                <article class="gameBox">
                <div class="gameBox1">
                <h2 class="boxOpen">${gameCat}</h2>
            </div>
            <div class="gameBox2">
                <ul>
                    <a href="${game.href}">${game.title}</a>
                </ul>
                <p class="boxClose">Close</p>
            </div>
            </article>
                `

            }).join("")
            }
        </section>
        </section>
        </section>


    `
}