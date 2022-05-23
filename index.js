let player = {
  name: "Fatima", chips: 200,
  sayHello: function () {
  console.log("Heissan!")
  }
}

player.sayHello()
let cards = [] //array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
// let sumEl = document.querySelector('#sum-el');

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  //Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

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
  //Only allow the player to get a new card if she is alie and doesnot have blackJack
  if (isAlive === true && hasBlackJack === false) {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
  }
}

// Objects Practice
// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//   title: "Learn CSS GRid for Free",
//   lessons: 16,
//   creator: "Fatima",
//   length: 63,
//   level: 2,
//   isFree: true,
//   tags: ["html", "css"]
// }

// console.log(course.tags)























