
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

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Error: Cannot divide by zero" : a / b; }
function modulus(a, b) { return a % b; }
function power(a, b) { return a ** b; }

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return modulus(num1, num2);
        case "**": return power(num1, num2);
        default: return "Invalid operator";
    }
}

// Tests
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error
console.log(calculate(2, "**", 3));   // 8

const numbers = [2, -5, 12, 7, -3, 4];

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

const nonNegative = numbers.filter(num => num >= 0);
console.log("Non-negative:", nonNegative);
const firstGreaterThanTen = numbers.find(num => num > 10);
console.log("First > 10:", firstGreaterThanTen);
const product = numbers.reduce((total, num) => total * num, 1);
console.log("Product:", product);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

// Accessing
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

// Modifying
person.age = 31;
person.email = "john@example.com";


// Student object
const student = {
    firstName: "Shadrack",
    lastName: "Mwota",
    age: 22,
    isEnrolled: true,
    courses: ["HTML", "CSS", "JavaScript"],
    address: {
        town: "Juja",
        country: "Kenya"
    },

    // Method: returns full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method: adds a new course
    addCourse(courseName) {
        this.courses.push(courseName);
    }
};

// 1. Access properties
console.log("Name:", student.getFullName());
console.log("Town:", student.address.town);
console.log("Courses:", student.courses);

// 2. Modify properties
student.age = 23;
student.isEnrolled = false;

// 3. Add new properties
student.email = "shadrack@example.com";

// 4. Use method to add a course
student.addCourse("React");

// 5. Log final object
console.log(student);

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];
const names = students.map(student => student.name);
console.log(names);

const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);

const charlie = students.find(student => student.name === "Charlie");
console.log(charlie);

const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log(avgGrade);

const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors);

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);

const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent);

const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);

// Mini-Project: Student Grade Tracker 
const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const scores = Object.values(student.grades);
        const total = scores.reduce((sum, score) => sum + score, 0);
        return total / scores.length;
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;

        this.students.forEach(student => {
            if (student.grades[subject] !== undefined) {
                total += student.grades[subject];
                count++;
            }
        });

        return count === 0 ? null : total / count;
    },
    
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;

        let top = null;
        let highestAvg = 0;

        this.students.forEach(student => {
            const avg = this.getStudentAverage(student.name);
            if (avg > highestAvg) {
                highestAvg = avg;
                top = student;
            }
        });

        return top;
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => {
            const avg = this.getStudentAverage(student.name);
            return avg < 70;
        });
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found.";

        const grades = student.grades;
        const avg = this.getStudentAverage(name).toFixed(2);
        const letter = this.getLetterGrade(avg);

        let report = `Report Card for ${name}\n`;
        report += "-------------------------\n";

        for (const subject in grades) {
            report += `${subject}: ${grades[subject]}\n`;
        }

        report += `Average: ${avg}\n`;
        report += `Letter Grade: ${letter}`;

        return report;
    }
};

// Test Code
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // Alice
console.log(gradeTracker.getStrugglingStudents());         // [Charlie]
console.log(gradeTracker.generateReportCard("Alice"));
