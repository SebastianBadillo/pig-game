'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

function roll() {}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1, if true, next player
  if (dice !== 1) {
    // Add dice to current store
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    // Change later
  } else {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    // switch to next player
  }
});

btnHold.addEventListener('click', function () {
  let num1 = parseInt(
    document.querySelector(`#score--${activePlayer}`).textContent
  );
  let num2 = parseInt(
    document.querySelector(`#current--${activePlayer}`).textContent
  );
  document.querySelector(`#score--${activePlayer}`).textContent = num1 + num2;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  if (
    parseInt(document.querySelector(`#score--${activePlayer}`).textContent) >=
    100
  ) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    btnHold.removeEventListener();
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
  // activePlayer = activePlayer === 0 ? 1 : 0;
  // player0El.classList.toggle('player--active');
  // player1El.classList.toggle('player--active');
});
