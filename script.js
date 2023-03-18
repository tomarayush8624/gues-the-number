'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number!';

document.querySelector('.score').textContent = 29;
document.querySelector('.number').textContent = 89;

console.log((document.querySelector('.guess').value = 23));
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 21);
// document.querySelector('.number').textContent = secretNumber;
// let score = Number(document.querySelector('.score').textContent);
let score = 20;
let highScore = 0;

function displayMessage(classVal, message) {
  document.querySelector(classVal).textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === secretNumber) {
    displayMessage('.message', '🥳 Correct Number!');
    displayMessage('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (!guess) {
    displayMessage('.message', '🛑 No number');
  } else {
    let message = guess > secretNumber ? ' 📈 too High' : '📉 too Low';
    displayMessage('.message', message);

    score -= 1;
    displayMessage('.score', score);
    if (score === 0) {
      displayMessage('.message', 'You Lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (score > highScore) {
    highScore = score;
    displayMessage('.highscore', highScore);
  }

  score = 20;
  displayMessage('.score', score);
  secretNumber = Math.trunc(Math.random() * 21);

  displayMessage('.message', 'Start guessing...');
  displayMessage('.number', '?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
