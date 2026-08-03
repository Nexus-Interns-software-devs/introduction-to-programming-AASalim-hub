//  my assigment on missing sequency

const numbers = [1, 2, 3, 5, 6];

let missingNumber;

for (let i = 0; i < numbers.length - 1; i++) {

    if (numbers[i + 1] !== numbers[i] + 1) {
        missingNumber = numbers[i] + 1;
        break;
    }

}

console.log("Missing Number:", missingNumber);

//  my assigment on first largest number

const numbers = [2, 50, 55, 90, 50, 85, 40];

// Assume the first two numbers are largest and second largest
let largest = numbers[0];
let secondLargest = numbers[1];

// Arrange them correctly
if (secondLargest > largest) {
    let temp = largest;
    largest = secondLargest;
    secondLargest = temp;
}

// Check the remaining numbers
for (let i = 2; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    }

    else if (numbers[i] > secondLargest) {
        secondLargest = numbers[i];
    }

}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);

//  my assigment on rotate arrahy position


const numbers = [1, 2, 3, 4, 5];
let n = 2;

for (let i = 0; i < n; i++) {
    let first = numbers.shift();
    numbers.push(first);
}

console.log(numbers);



//  my assignment on flatten nested Array
const nested = [[1, 2], [3, 4], [5, 6]];

let flat = [];

for (let i = 0; i < nested.length; i++) {

    for (let j = 0; j < nested[i].length; j++) {

        flat.push(nested[i][j]);

    }

}

console.log(flat);
//  my assignment on  group Array items by property
const students = [
    { name: "Ahmed", grade: "A" },
    { name: "Mary", grade: "B" },
    { name: "John", grade: "A" },
    { name: "Grace", grade: "C" },
    { name: "Musa", grade: "B" }
];

let group = {};

for (let i = 0; i < students.length; i++) {

    let grade = students[i].grade;

    if (group[grade]) {
        group[grade].push(students[i]);
    }

    else {
        group[grade] = [students[i]];
    }

}

console.log(group);
//  my assignment on count character frequency
const frequency = {};

let word = "banana";

for (let i = 0; i < word.length; i++) {

    if (frequency[word[i]]) {
        frequency[word[i]]++;
    }

    else {
        frequency[word[i]] = 1;
    }

}

console.log(frequency);
//  my assignment on  Merge two objects
let student = {
    name: "Ahmed",
    level: "300L",
    department: "Computer Science"
};

let result = {
    cgpa: 3.61,
    grade: "Second Class Upper",
    status: "Passed"
};

let studentProfile = {};

// Copy student object
for (let key in student) {
    studentProfile[key] = student[key];
}

// Copy result object
for (let key in result) {
    studentProfile[key] = result[key];
}

console.log(studentProfile);
//  my assignment on  convert Array to object
const keys = ["title", "author", "ISBN", "genre"];

const values = [
    "Clean Code",
    "Robert C. Martin",
    101,
    "Software Engineering"
];

let book = {};

for (let i = 0; i < keys.length; i++) {

    book[keys[i]] = values[i];

}

console.log(book);
//  my assignment on  Count Vowels
let word = "JavaScript";

let totalVowelSound = 0;

for (let i = 0; i < word.length; i++) {

    let letter = word[i].toLowerCase();

    if ("aeiou".includes(letter)) {
        totalVowelSound++;
    }

}

console.log("Total Vowels:", totalVowelSound);
//  my assignment on  group students by grade
const students = [
    { name: "Ahmed", grade: "A" },
    { name: "Mary", grade: "B" },
    { name: "John", grade: "A" },
    { name: "Grace", grade: "C" },
    { name: "Musa", grade: "B" }
];

let grades = {};

for (let i = 0; i < students.length; i++) {

    let grade = students[i].grade;

    if (grades[grade]) {
        grades[grade].push(students[i].name);
    }

    else {
        grades[grade] = [students[i].name];
    }

}

console.log(grades);
//  my assignment on  find intersection of two Arrays
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

let intersection = [];

for (let i = 0; i < array1.length; i++) {

    for (let j = 0; j < array2.length; j++) {

        if (array1[i] === array2[j]) {
            intersection.push(array1[i]);
        }

    }

}

console.log(intersection);
//  my assignment on  find Union of two Arrays
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

let union = [];

// Add everything from the first array
for (let i = 0; i < array1.length; i++) {
    union.push(array1[i]);
}

// Add only new values from the second array
for (let i = 0; i < array2.length; i++) {

    let found = false;

    for (let j = 0; j < union.length; j++) {

        if (array2[i] === union[j]) {
            found = true;
            break;
        }

    }

    if (!found) {
        union.push(array2[i]);
    }

}

console.log(union);
//  my assignment on  find difference of two Arrays
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

let difference = [];

for (let i = 0; i < array1.length; i++) {

    let found = false;

    for (let j = 0; j < array2.length; j++) {

        if (array1[i] === array2[j]) {
            found = true;
            break;
        }

    }

    if (!found) {
        difference.push(array1[i]);
    }

}

console.log(difference);
//  my assignment on  basic phone book
const phoneBook = [
    {
        name: "Ahmed",
        phone: "08012345678"
    },
    {
        name: "Mary",
        phone: "08098765432"
    }
];

let search = "Ahmed";
let foundContact = "Contact not found.";

for (let i = 0; i < phoneBook.length; i++) {

    if (search === phoneBook[i].name) {

        foundContact =
            `Name: ${phoneBook[i].name}
Phone: ${phoneBook[i].phone}`;

    }

}

console.log(foundContact);
//  my assignment on shopping cart with quantities
const cart = [
    {
        product: "Laptop",
        price: 350000,
        quantity: 1
    },
    {
        product: "Mouse",
        price: 5000,
        quantity: 2
    }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {

    total += cart[i].price * cart[i].quantity;

}

console.log("Total Price:", total);