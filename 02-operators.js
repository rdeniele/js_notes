// JAVASCRIPT OPERATORS

// MOST USED OPERATORS IN DEVELOPMENT

// 1. ARITHMETIC OPERATORS (Daily use)
// + (addition/concatenation)
// - (subtraction)
// * (multiplication)
// / (division)
// % (modulus - for remainders)

// 2. ASSIGNMENT OPERATORS (Very common)
// = (assignment)
// += (addition assignment)
// -= (subtraction assignment)
// ++ (increment)
// -- (decrement)

// 3. COMPARISON OPERATORS (Essential for conditions)
// === (strict equal - PREFERRED)
// !== (strict not equal - PREFERRED)
// > (greater than)
// < (less than)
// >= (greater than or equal)
// <= (less than or equal)

// 4. LOGICAL OPERATORS (Critical for logic)
// && (logical AND)
// || (logical OR)
// ! (logical NOT)

// 5. TERNARY OPERATOR (Very useful shorthand)
// condition ? expr1 : expr2

// 6. STRING OPERATORS (Common for text)
// + (concatenation)
// += (concatenation assignment)

// 7. TYPEOF OPERATOR (Debugging/validation)
// typeof variable

// EXAMPLES:
console.log(2 + 3); // 5
console.log(1+2+3+4+5); // 15
console.log(20-18); // 2
console.log(2 * 3); // 6
console.log(10 / 2); // 5
console.log(10 % 3); // 1 (remainder of 10 divided by 3)
console.log(3>2); // true
console.log(2 < 3); // true
console.log(2 == 2); // true
console.log(2 === 2); // true
console.log(2 !== 3); // true

// Advanced use of operators
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10)

var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// String concatenation
console.log(5 + 10); // 15

var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d); // "Now in 3D!"

// Assignment operators
var counter = 0;
counter += 5;
counter += 3;
console.log(counter); // 8
