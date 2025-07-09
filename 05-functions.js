// FUNCTIONS

// Basic function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");

// Function with parameters
function addTwoNums(num1, num2){
    var sum = num1 + num2;
    console.log("The sum of", num1, "and", num2, "is", sum);
}

addTwoNums(5, 10);

// Array builder function
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder("apple", "banana", "cherry"); // ['apple', 'banana', 'cherry']

// Function with return value
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple', 'pear', 'plum']

// Function assignment example
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

function specificNum() { return 42 };

var useRandom = true;
var getNumber;

// This code checks if useRandom is true or false
// If true, it assigns getNumber to the randomNum function  
// If false, it assigns getNumber to the specificNum function
if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

// DEFAULT PARAMETERS
function noDefaultParams(number) {
    console.log('Result:', number * number)
}

// noDefaultParams(5); // Outputs: Result: 25
// noDefaultParams(); // Outputs: Result: NaN (Not a Number, because number is undefined)

function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

withDefaultParams(); // Result: 100

// RECURSION
function myDay() {
    console.log('Morning');
    console.log('Afternoon');
    console.log('Evening');
    myDay(); // This will cause a stack overflow error because the function calls itself indefinitely
}

// myDay(); // This will cause a stack overflow error

let counter = 3;
function example(){
    console.log("Counter value:", counter);
    counter = counter - 1;
    if(counter === 0) return;
    example();
}

example(); // Proper recursion with base case

// Currency conversion function
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 0.85;

function convertCurrency(amount,rate){
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log("Converted amount:", currencyTwo); // Outputs: Converted amount: 85
