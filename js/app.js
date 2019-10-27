/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();

document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
});

const keys = document.querySelector('#qwerty');
keys.addEventListener('click', game.handleInteraction);

