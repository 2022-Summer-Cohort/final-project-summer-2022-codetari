'use strict';
/* exported highScoreData clearHighScoresArray */


renderHighScores();


function bubbleSort(array, property) {
    let swapped = true;
    while(swapped === true) {
        swapped = false;
        for(let i = 1; i < array.length; i++) {
            if(array[i - 1][property] < array[i][property]) {
                let temp;
                temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
                swapped = true;
            }
        }
    }
}

function renderHighScores() {
    const selectTableBody = document.querySelector('tbody');
    
    while(selectTableBody.lastElementChild) {
        selectTableBody.lastElementChild.remove();
    }

    //Tells the computer to go get high score data
    let highScoreData = window.localStorage.getItem('highScore');
    highScoreData = JSON.parse(highScoreData);
    

    bubbleSort(highScoreData, 'score');
    
    //Loops through data and populates the table with it
    for(var i = 0; i < highScoreData.length; i++) {
        let tRow = document.createElement('tr');
        selectTableBody.appendChild(tRow);

        let child1 = document.createElement('td');
        child1.textContent = highScoreData[i].playerName;
        tRow.appendChild(child1);

        let child2 = document.createElement('td');
        child2.classList = 'number-row';
        child2.textContent = highScoreData[i].score;
        tRow.appendChild(child2);
    }

}

//Goes to local storage and deletes
let clearHighScoresArray = function(){
    window.localStorage.removeItem('highScore');
    renderHighScores();
};
