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

