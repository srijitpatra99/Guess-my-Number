'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
function displayMessage(msg) {
    document.querySelector('.message').textContent = msg;
}
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;

    if (!guess) {
        displayMessage('Invalid input');
    } else if (guess == secretNumber) {
        displayMessage('You won');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        // ?
        // condition ? _a___ : __b__
        guess > secretNumber ?
            displayMessage('Too high') :
            displayMessage('Too low');

        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#000';
});