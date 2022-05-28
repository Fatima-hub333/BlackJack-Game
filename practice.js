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

let sentence = ["Hello", "my", "name", "is", "Fatima"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";

}

let player1Time = 102;
let player2Time = 107;

function getFastRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

// let fastestRace = getFastRaceTime();
// console.log(fastestRace);

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime() {
  return player1Time + player2Time;
}

let totalTime = getTotalRaceTime();
console.log(totalTime);

//Why Generate Random Numbers
let randomNumber = Math.random() * 6;
console.log(randomNumber);

//Dice game
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(rollDice());

//Logical Operators
let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true ) {
    generateCertificate();
}

function generateCertificate() {
  console.log("Generating Certificate......");
}

//Loop practice

let likesDocumentaries = true;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like.")
}

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution....")
}

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
  title: "Live like a king in my castle",
  price: 190,
  isSuperHost: true,
  images: ["img/castle.png", "img/castle.png"]
}

console.log(castle.price)
console.log(castle.isSuperHost)

// Objects Practice
// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
  title: "Learn CSS GRid for Free",
  lessons: 16,
  creator: "Fatima",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"]
}

console.log(course.tags)

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let person = {
  name: "Fatima",
  age: 25,
  country: "Pakistan"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData() {
  console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}
// Call the logData() function to verify that it works
logData();

let age = 55

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
if (age < 6) {
  console.log("Free");
} else if (age < 18) {
  console.log("Child Discount");
} else if (age < 27) {
  console.log("Student Discount");
} else if (age < 67) {
  console.log("Full Price");
} else {
  console.log("Senior Citizen Discount");
}

console.log("age");

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log("The 5 larget countries in the world: ")
for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i])
}

let movieNames = ["Damak", "Dam Mastum", "Dr.Strange", "Avengers", "Dil Lagy"]

console.log("The 5 important movies of Pakistan are: ")
for (let i = 0; i < movieNames.length; i++) {
  console.log("- " + movieNames[i]);
}

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places
largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");



console.log(largeCountries);
// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😃")
}

let hands = ["rock", "paper", "scissor"];
// Create a function that returns a random item from the array
function getItems() {
  let randomIndex = Math.floor(Math.random()*3);
  return hands[randomIndex];
}

console.log(getItems());

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit()