// Objects
const dice = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// functions
let playing = true;
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
function init() {
  dice.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
}
// Reseting Values
init();

// Variables

// roll functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    let number = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${number}.png`;
    if (number == 1) {
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        parseInt(currentScore);

      changePlayer();
    } else {
      currentScore += number;
      document.querySelector(`#current--${activePlayer}`).textContent =
        parseInt(currentScore);
    }
  }
});

// Changing Player
function changePlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Holding the result
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    let score = document.querySelector(`#score--${activePlayer}`);
    score.textContent = scores[activePlayer];

    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    if (parseInt(score.textContent) >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      changePlayer();
    }
  }
});

btnNew.addEventListener('click', init);
