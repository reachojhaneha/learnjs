'use strict';

// console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

function messageOutput(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Wow, number matched!!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (guess > 20 || guess < 0) {
      messageOutput('Invalid number, please try between 1-20');
    } else if (score > 1) {
      messageOutput(
        guess > secretNumber ? 'Too High, try again' : 'Too low, try again'
      );
      score--;
      console.log('********', guess);
      document.querySelector('.score').textContent = score;
    } else {
      messageOutput('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '10rem';
  document.querySelector('.score').textContent = score;
});
