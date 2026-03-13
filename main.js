
// Variable Declaration
let name = "Shadrack Mwota";
let age = 22;
let isStudent = true;
let favouritecolours = ["blue","red","green"];
let today = new Date();

// Console Output
console.log("My name is:", name);
console.log("My age is:", age);
console.log("Am I a student:", isStudent);
console.log("My favourite colours are:", favouritecolours);
console.log("Today's date is:", today);

// Variable Declaration
let ageInDays = age * 365;
let ageInHours = ageInDays * 24;
let currentYear = new Date().getFullYear();
let yearAt100 = currentYear + (100 - age)

// console
console.log("Age in days:", (ageInDays))
console.log("Age in hours:", (ageInHours))
console.log("Year At 100:", (yearAt100))


// Functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 5/9) + 32;
}

function isEven(number) {
    return (number % 2 === 0);
}

function getInitials(fullName) {
    const parts = fullName.split(" ");
    let initials = "";

    for(let part of parts) {
        initials += parts[0].toUperCase();
    }
    return initials;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
