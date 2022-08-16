/* exported PlayerDisplay */
/* globals */

'use strict';


const playerDisplayTemplate = document.getElementById('player-display-template');


class PlayerDisplay {
    constructor(playerName, chefSelect) {
        this.playerName = playerName;
        this.chefSelect = chefSelect;
    }

    render() {
        const dom = playerDisplayTemplate.content.cloneNode(true);
        const playerImage = dom.querySelector('img');
        const playerDisplayedName = dom.querySelector('h3');
        playerDisplayedName.textContent = this.playerName;
        playerImage.src = this.chefSelect;
        return dom;
    }
}