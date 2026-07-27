// my assignment on how to perform calculation two numbers using operators and get the answer

// the two variable i will be working with

let num1 = 36;
let num2 = 22;

// here i will be carrying out operation on the two variable
let sum = num1 + num2;
let product = num1 * num2;
let  modulo = num1 % num2;


console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Modulo: ${modulo}`);


// works on equal operator
if(num1 === num2) {
    console.log("Is Equal: " + "True");
} 
else {
    console.log("Is Equal: " + "False");
}

// works on greater than operator
if(num1 >= num2) {
    console.log("GREATER: " + "True");
} 
else {
    console.log("GREATER: " + "False");
}


// works on AND operator
if(num1 === num2 && num1 != num2) {
    console.log("AND: " + "True");
} 
else {
    console.log("AND: " + "False");
}


// works on OR operator
if(num1 === num2 || num1 != num2) {
    console.log("OR: " + "True");
} 
else {
    console.log("OR: " + "False");
}