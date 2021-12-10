// import functions
import { score, generateThrows } from '../game.js';
// grab DOM elements

// set event listeners
// get user input
const buttons = document.querySelectorAll('.throw-button');
const selectionDisplay = document.getElementById('selection-display');
// use user input to update state
for (let button of buttons) {
    button.addEventListener('click', () => {
        selectionDisplay.textContent = button.value;
        const player = button.value;
        const computer = generateThrows();
        // update DOM to reflect the new state
        const result = score(player, computer);
        console.log(player, computer, result);

        selectionDisplay.textContent = result;

    });
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