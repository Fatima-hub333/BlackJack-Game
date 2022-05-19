// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
// let firstCard = 10;
// let secondCard = 7;
// 2. Create a variable, sum, and set it to the sum of the two cards
// let sum = firstCard + secondCard;

// if (sum < 21) {
//   console.log("Do you want to draw a new card? 😀");
// } else if (sum === 21) {
//   console.log("Wohoo! You've got BlackJack! 🙃");
// } else{
//   console.log("You're out of the game!");
// }
// console.log(sum);


// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22

// if (age < 21) {
//   console.log("You can not enter the club!")
// } else {
//   console.log("Welcome")
// }

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 150

// if (age < 100) {
//   console.log("Not elegible")
// } else if (age === 100) {
//   console.log("Here is your birthday card from the King!")
// } else {
//   console.log("Not elegible, you have already gotten one")
// }

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum <= 20) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳" ;
  hasBlackJack = true;
} else {
  message = "You're out of the game! 😭";
  isAlive = false;
}

console.log(message);


// console.log(4 === 3)  // False
// console.log(5 > 2)    // true 
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false

