// assignment on a students grade score.

// My input interface
const readline = require("readline");
const scoreGrade = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

scoreGrade.question("Enter Your Score: ", function(score) {
    score = parseInt(score);
    let grade;

if (score >=90 ) {
    grade = "A";
    console.log(`grade: ${grade}`);
} else if (score >=80 ) {
    grade = "B";
    console.log(`grade: ${grade}`);
} else if (score >=70 ) {
    grade = "C";
    console.log(`grade: ${grade}`);
} else if (score >=60 ) {
    grade = "D";
    console.log(`grade: ${grade}`);
} else if (score >=50 ) {
    grade = "E";
    console.log(`grade: ${grade}`);
} else {
    grade = "F";
    console.log(`grade: ${grade}`)
}

scoreGrade.close();
})
// Variable
// let  = 85;
