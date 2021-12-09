// import functions
import { score, generateThrows } from '../game.js';
// grab DOM elements

// set event listeners
// get user input
const playerInput = document.getElementById('button');
const mainDisplay = document.getElementById('main');
// use user input to update state
playerInput.addEventListener('input', () => {
    mainDisplay.textContent = playerInput.value;
}
    // update DOM to reflect the new state
    mainDisplay.addEventListener('change', () => {
    playerChoice = playerInput.value;
}

//images and audio
const audio = document.getElementById('audio');

const rockSound = document.getElementById('rock-sound');
rockSound.addEventListener('click', () => {
    audio.src = 'assets/sounds/rock.mp3';
    audio.play();
});

const paperSound = document.getElementById('paper-sound');
paperSound.addEventListener('click', () => {
    audio.src = 'assets/sounds/paper.mp3';
    audio.play();
});

const scissorsSound = document.getElementById('scissors-sound');
scissorsSound.addEventListener('click', () => {
    audio.src = 'assets/sounds/scissors.mp3';
    audio.play();
});