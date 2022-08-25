
window.onbeforeunload = () => {
    window.localStorage.setItem('userData', JSON.stringify(userData));
};

const chefSelect = document.getElementById('chef-select');


const userData = [];
userData[0] = 'image location';
userData[1] = 'user name';
userData[2] = 1;
userData[3] = 0;

chefSelect.addEventListener('click', collectChefChoice);
function collectChefChoice(event) {
    event.preventDefault();
    let playerChef = event.target.src;
    userData.splice(0, 1, playerChef);
}


const playerName = document.getElementById('player-name');
playerName.addEventListener('submit', playerNameSubmit);
function playerNameSubmit(event) {

    // Cannot advance if a charater isn't selected 
    if(userData[0] === 'image location'){
        event.preventDefault();
        alert('Please click on a character.');
    }
    // Move on if character selected
    else {
        event.preventDefault();
        let userName = event.target.username.value;
        userData.splice(1, 1, userName);
        window.location.replace('gameapp.html');
    }
}



