// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
let firstCard = 10;
let secondCard = 7;
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw a new card? 😀");
} else if (sum === 21) {
  console.log("Wohoo! You've got BlackJack! 🙃");
} else{
  console.log("You're out of the game!");
}
console.log(sum);


// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age1 = 22;

if (age1 < 21) {
  console.log("You can not enter the club!")
} else {
  console.log("Welcome")
}

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// Check if the person is elegible for a birthday card from the King! (100)

let age = 150;

if (age < 100) {
  console.log("Not elegible")
} else if (age === 100) {
  console.log("Here is your birthday card from the King!")
} else {
  console.log("Not elegible, you have already gotten one")
}

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

console.log(4 === 3)  // False
console.log(5 > 2)    // true 
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false

//Arrays Practice- ordered list of items

let featuredposts = [
  "Check out my Netflix clone",
  "Here's the code for my projec",
  "I've just relaunched my portfolio"
];
console.log(featuredposts[0]);
// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let experience = [
  "Full-Stack Web developer",
  "Admin executive",
  "Marketing Strategist",
  "Internee",
  "Techer"
];
console.log( experience);

let education = [
  "Matric (2012)",
  "FA (2014)",
  "BA (2016)",
  "Msc (2018)",
  "Ms (2020)"
];
console.log(education);

let licenses = [
  "Driver License",
  "Abrod working License"
];
console.log(licenses);

let fatima = ["Fatima Zahir", 25, true];
console.log(fatima);

let cardss = [7, 4];
cardss.push(6);
console.log(cardss);

let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately."
];

let newMessage = "Same here!";

messages.push(newMessage);
console.log(messages);

messages.pop();
console.log(messages);

//Counting JavaScript
for (let count = 1; count < 11; count += 2 ) {
  console.log(count);
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
for (let count = 10; count < 101; count += 10) {
  console.log(count);
}

//For loops and arrays
let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my protfolio lately.",
  "Same here!"
]

//DRY - Don't Repeat Yourself
// console.log(messages[0]);
// console.log(messages[1]);
// console.log(messages[2]);
// console.log(messages[3]);

for (let i = 0; i < messages.length; i++) {
  console.log(messages[i]);
}

let chairs = [7, 3, 9];

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < chairs.length; i += 1) {
  console.log(chairs[i]);
}