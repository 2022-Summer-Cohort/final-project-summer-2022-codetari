/* exported JudgeDisplay */
/* globals */

'use strict';

const judgeDisplayTemplate = document.getElementById('judge-display-template');

class JudgeDisplay {
    constructor(score) {
        this.score = score;
        this.judgeState = './images/Judge-default.png';

    }

    update(score) {
        const roundScore = Math.abs(this.score - score);
        this.score = score;

        if(roundScore < 60) {
            this.judgeState = './images/Judge-sad.png';
        }
        else if(roundScore < 100) {
            this.judgeState = './images/Judge-default.png';
        }
        else {
            this.judgeState = './images/Judge-happy.png';
        }

        this.judgeImage.src = this.judgeState;

    }

    render() {
        const dom = judgeDisplayTemplate.content.cloneNode(true);
        this.judgeImage = dom.querySelector('img');
        this.judgeImage.src = this.judgeState;
        return dom;
    }
}