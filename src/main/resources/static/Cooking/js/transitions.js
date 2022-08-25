
/* exported highScoreList Transition  */
/* globals userArrayParse */


'use strict';


const highScoreData = window.localStorage.getItem('highScore');
let highScore = JSON.parse(highScoreData);

if(!highScore) {
    highScore = [];
}

const transitionTemplate = document.getElementById('transition-template');

class Transition {
    constructor(roundNumber, score, playerName, roundScore) {
        this.roundNumber = roundNumber;
        this.playerName = playerName;
        this.score = score;
        this.message = '';
        this.roundScore = roundScore;
    }
    
    render() {
        

        //if statement selects proper transition message based on score and round
        const dom = transitionTemplate.content.cloneNode(true);
        this.messageContainer = dom.getElementById('transition-message-container');
        this.messageSection = dom.querySelector('section');

        if(this.roundNumber === 1 && this.roundScore < 60){
            this.message = 'Well, that\'s OK to move on but you can do better! Got to step it up in the next round!';

        } else if(this.roundNumber === 1 && this.roundScore < 120) {
            this.message = 'Nice work, you\'ve cooked before, but you\'re up against real competition in the next round!';

        } else if(this.roundNumber === 1 && this.roundScore <= 150) {
            this.message = 'Amazing! You should be a judge - that\'s a perfect dish!';
        }
        
        if(this.roundNumber === 2 && this.roundScore < 60){
            this.message = 'You need to step it up if you\'re going to stay in this kitchen!! On to the last round!';

        } else if(this.roundNumber === 2 && this.roundScore < 120) {
            this.message = 'Fair... OK... Boring!! But good enough to move on to the next round!';
            
        } else if(this.roundNumber === 2 && this.roundScore <= 150) {
            this.message = 'Are you sure you aren\'t a professional? This dish is fantastic! Now go take on the final round!';
        }
        
        if(this.roundNumber === 3 && this.roundScore < 60) {
            this.message = 'Game over! Time for you to go home! You\'re not cut out for our Hall of Fame!';
            //pushes object into highScoreList array
            highScore.push({
                playerName: this.playerName,
                score: this.score
            });
            userArrayParse[2] = 1;
            userArrayParse[3] = 0;

        } else if(this.roundNumber === 3 && this.roundScore < 100) {
            this.message = 'You may not be the #1 score, but you did yourself proud! Great cooking skills!';
            //pushes object into highScoreList array
            highScore.push({
                playerName: this.playerName,
                score: this.score
            });
            userArrayParse[2] = 1;
            userArrayParse[3] = 0;
        } else if(this.roundNumber === 3 && this.roundScore <= 150) {
            this.message = 'You\'re among the greats! This dish is sure to put you in our Hall of Fame!';
            //pushes object into highScoreList array
            highScore.push({
                playerName: this.playerName,
                score: this.score
            });
            userArrayParse[2] = 1;
            userArrayParse[3] = 0;
        }
        this.transitionMessage = dom.querySelector('h2');
        this.transitionMessage.textContent = this.message;
        return dom;
    }
    clearTransitionMessage() {

        
        while(this.messageSection.lastElementChild) {
            this.messageSection.lastElementChild.remove();
        }
        this.transitionMessage.textContent = '';
    }
}