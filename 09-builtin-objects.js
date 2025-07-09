// BUILT-IN OBJECTS AND METHODS

// Math Object
var MyNum = Math.sqrt(16); // Calculates square root of 16
console.log(MyNum); // Output: 4

// Number constants
console.log("PI:", Math.PI); // approximately 3.14159
console.log("Euler's number:", Math.E); // approximately 2.718
console.log("Natural log of 2:", Math.LN2); // approximately 0.693

// Rounding methods
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5 - rounds up
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4 - rounds down
console.log("Math.round(4.5):", Math.round(4.5)); // 5 - rounds to nearest
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4 - trims decimal

// Arithmetic and calculus methods
console.log("Math.pow(2,3):", Math.pow(2,3)); // 8 - 2 to the power of 3
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4 - square root
console.log("Math.cbrt(8):", Math.cbrt(8)); // 2 - cube root
console.log("Math.abs(-10):", Math.abs(-10)); // 10 - absolute value

// Min and max
console.log("Math.min(9,8,7):", Math.min(9,8,7)); // 7
console.log("Math.max(9,8,7):", Math.max(9,8,7)); // 9

// Random numbers
console.log("Math.random():", Math.random()); // Random number between 0 and 1

// Destructuring assignment
let {PI} = Math;
console.log("Destructured PI:", PI);
console.log("PI === Math.PI:", PI === Math.PI); // true

// String Methods
var greet = "Hello, ";
var place = "World";

console.log("String length:", greet.length); // 7
console.log("charAt(0):", greet.charAt(0)); // 'H'
console.log("concat:", "Wo".concat("rl").concat("d")); // 'World'

// indexOf and lastIndexOf
console.log("indexOf 'h':", "ho-ho-ho".indexOf('h')); // 0
console.log("indexOf 'o':", "ho-ho-ho".indexOf('o')); // 1
console.log("indexOf '-':", "ho-ho-ho".indexOf('-')); // 2

// Split method
console.log("split:", "ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']

// Case methods
console.log("toUpperCase:", greet.toUpperCase()); // "HELLO, "
console.log("toLowerCase:", greet.toLowerCase()); // "hello, "

// String concatenation methods
var greet2 = "Hello, World!";
var user = "Alice";
console.log("concat method:", greet2.concat(user));

// String searching and matching
var result = "Hello".indexOf('l');
console.log("Index of 'l' in Hello:", result); // 2

// Regular expressions
console.log("Match 'd':", "abcd".match(/d/)); // ['d', index: 3, ...]
console.log("Match 'a':", "abcd".match(/a/)); // ['a', index: 0, ...]
console.log("Match 'c':", "abcd".match(/c/)); // ['c', index: 2, ...]

// Date object
console.log("Current date:", new Date());

// Error object
// throw new ReferenceError("This is a custom error message");

// Other built-in constructors
// new Map();
// new Promise();
// new Set();
// new WeakSet();
// new WeakMap();
