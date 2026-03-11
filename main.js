// variables declaration
let myName = "Shadrack Mwota";
let myAge = 22;
let isStudent = true;
let favoriteColors = ["red", "blue", "green"];
let todayDate = new Date();

console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today's date:", todayDate);

// operation
let ageDays = myAge * 365;
let ageHours = myAge * 365 * 24;
let year100 = 2026 + (100 - myAge);

console.log("Age in days:", ageDays);
console.log("Age in hours:", ageHours);
console.log("Year I turn 100:", year100);

function calculateArea(width, height) {
return width * height;
}

function celsiusToFahrenheit(celsius) {
return (celsius * 9/5) + 32;
}

function isEven(number) {
return number % 2 === 0;
}

function getInitials(fullName) {
let names = fullName.split(" ");
return names[0][0] + names[1][0];
}

function reverseString(str) {
return str.split("").reverse().join("");
}

function calculateTip(bill, tipPercent = 15) {
return bill * (tipPercent / 100);
}

function calculateArea(width, height) {
return width * height;
}

function celsiusToFahrenheit(celsius) {
return (celsius * 9/5) + 32;
}

function isEven(number) {
return number % 2 === 0;
}

function getInitials(fullName) {
let names = fullName.split(" ");
return names[0][0] + names[1][0];
}

function reverseString(str) {
return str.split("").reverse().join("");
}

function calculateTip(bill, tipPercent = 15) {
return bill * (tipPercent / 100);
}

