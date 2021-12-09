export function score(player, computer){
    if (player === 'rock' && computer === 'rock'){
        return 'tie!';
    }
    if (player === 'scissors' && computer === 'scissors'){
        return 'tie!';
    }
    if (player === 'paper' && computer === 'paper'){
        return 'tie!';
    }
    if (player === 'scissors' && computer === 'rock'){
        return 'computer wins!';
    }
    if (player === 'scissors' && computer === 'paper'){
        return 'player wins!';
    }
    if (player === 'rock' && computer === 'paper'){
        return 'computer wins!';
    }
    if (player === 'rock' && computer === 'scissors'){
        return 'player wins!';
    }
    if (player === 'paper' && computer === 'rock'){
        return 'computer wins!';
    }
    if (player === 'paper' && computer === 'scissors'){
        return 'computer wins!';
    }
    if (player === 'scissors' && computer === 'paper'){
        return 'player wins!';
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
const throws = ['rock', 'paper', 'scissors'];
//computer throws
export function generateThrows(){
    const index = getRandomIntInclusive(0, 2);
    return throws[index];

}
export function playerThrows(){
    const player = document.getElementById('button');
    return player; 
}