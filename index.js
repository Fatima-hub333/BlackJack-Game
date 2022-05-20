let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
// let sumEl = document.querySelector('#sum-el');

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  // render out firstCard and secondCard
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  // render out All the cards we have

  if (sum <= 20) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack!" ;
  hasBlackJack = true;
} else {
  message = "You're out of the game!";
  isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 7;
  sum += card;
  cards.push(card);
  renderGame();
}




