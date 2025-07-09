// ES6+ FEATURES

// Template Literals
let noMultiLine = "No multi-line string in ES5";
console.log("Did you know?" + noMultiLine);

let multiLine = `Using ES6 backticks, 
multi-line strings 
are possible.`

console.log("Did you know?" + multiLine);

// ES6 Variable interpolation
let first = `He said, "Don't you know? ES6, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?", he asked.`;

console.log(`${first} - and I got curious. ${second}`);

// Destructuring assignment
let {PI} = Math; // Destructuring assignment to extract PI from Math object
console.log(PI);
console.log(PI === Math.PI); // true

// Arrow functions (covered in arrays file)
const arrowFunction = (a, b) => a + b;
console.log("Arrow function result:", arrowFunction(5, 3));

// Arrow function with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled with arrow function:", doubled);

// Let and const
// let is block-scoped and can be reassigned
let blockScoped = "I'm block scoped";
blockScoped = "I can be reassigned";

// const is block-scoped and cannot be reassigned
const constant = "I cannot be reassigned";
// constant = "This would cause an error"; // TypeError

console.log("Let variable:", blockScoped);
console.log("Const variable:", constant);

// Spread operator (covered in arrays file)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined with spread:", combined);

// Rest parameters
function restParams(...args) {
    console.log("Rest parameters:", args);
}

restParams(1, 2, 3, 4, 5);

// Default parameters (covered in functions file)
function defaultParams(a = 10, b = 5) {
    return a + b;
}

console.log("Default params:", defaultParams()); // 15
console.log("Default params with args:", defaultParams(3, 7)); // 10
