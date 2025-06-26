// var petDog = "Rex";
// var petCat = "Pepper";

// console.log(petDog);
// console.log(petCat);

// console.log("My pet dog's name is " + petDog);
// console.log("My pet cat's name is " + petCat);


// var catSound = "purr";
// var dogSound = "woof";

// console.log(petDog,"says", dogSound);
// console.log(petCat,"says", catSound);

// catSound= "meow";
// console.log(petCat,"now says", catSound);


// important data types in js
// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol

// ex.
// guitar name and description are text values
// guitar price is a numberical value
// JS text values are know as string data type
// JS numbercal values are the number data type

// number - combination of digits
// 375
// String - combination of characters
// "375"

// ex. guitar app data
// price is stored as a number
// name and desc are stored as strings
// all strings wrapped in double quotes

// Null represents absence of value
// ex. guitar description is not set

// undefined represents a variable that has been declared but not assigned a value
// ex. guitar description is not set

// BigInt is used for very large integers new in JS
// ex. 1234567890123456789012345678901234567890n

// Symbol is a unique and immutable data type used for object property keys
// ex. Symbol("description") creates a unique symbol

// operators in JS
// Arithmetic operators
// + (addition)
// - (subtraction)
// * (multiplication)
// / (division)
// % (modulus)
// ** (exponentiation)
// Assignment operators
// = (assignment)
// += (addition assignment)
// -= (subtraction assignment)
// *= (multiplication assignment)
// /= (division assignment)
// %= (modulus assignment)
// Comparison operators
// == (equal to)
// === (strict equal to)
// != (not equal to)
// !== (strict not equal to)
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)
// Logical operators
// && (logical AND)
// || (logical OR)
// ! (logical NOT)
// Bitwise operators
// & (bitwise AND)
// | (bitwise OR)
// ^ (bitwise XOR)
// ~ (bitwise NOT)
// << (left shift)
// >> (right shift)
// Ternary operator
// condition ? expr1 : expr2 (if condition is true, expr1 is executed,
// otherwise expr2 is executed)
// String operators
// + (concatenation)
// += (concatenation assignment)
// typeof operator
// typeof operator returns the data type of a variable
// ex. typeof guitarName returns "string"
// instanceof operator
// instanceof operator checks if an object is an instance of a specific class
// ex. guitar instanceof Guitar returns true if guitar is an instance of Guitar class
// delete operator
// delete operator removes a property from an object
// ex. delete guitar.description removes the description property from the guitar object
// in operator
// in operator checks if a property exists in an object
// ex. "description" in guitar returns true if the description property exists in the guitar object
// void operator
// void operator evaluates an expression and returns undefined
// ex. void 0 returns undefined
// with operator
// with operator allows you to access properties of an object without repeating the object name
// ex. with guitar { console.log(name); } logs the name property of the guitar object
// typeof operator
// typeof operator returns the data type of a variable      
// ex. typeof guitarName returns "string"
// instanceof operator
// instanceof operator checks if an object is an instance of a specific class
// ex. guitar instanceof Guitar returns true if guitar is an instance of Guitar class
// delete operator
// delete operator removes a property from an object
// ex. delete guitar.description removes the description property from the guitar object
// in operator
// in operator checks if a property exists in an object
// ex. "description" in guitar returns true if the description property exists in the guitar object
// void operator
// void operator evaluates an expression and returns undefined
// ex. void 0 returns undefined
// with operator
// with operator allows you to access properties of an object without repeating the object name 
// ex. with guitar { console.log(name); } logs the name property of the guitar object

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

// RARELY USED IN NORMAL DEVELOPMENT:
// - Bitwise operators (&, |, ^, ~, <<, >>)
// - void operator
// - with operator (deprecated)
// - delete operator (specific use cases)
// - instanceof (less common)

// console.log(2 + 3); // 5
// conole.log(1+2+3+4+5)
// console.log(20-18); // 2
// console.log(2 * 3); // 6
// console.log(10 / 2); // 5
// console.log(10 % 3); // 1 (remainder of 10 divided by 3)
// console.log(3>2); // true
// console.log(2 < 3); // true
// console.log(2 == 2); // true
// console.log(2 === 2); // true
// console.log(2 !== 3); // true

// Advanced use of operators
// var score = 8;
// console.log("Mid-level skills:", score > 0 && score < 10)
// var timeRemaining = 0;
// var energy = 10;
// console.log("Game over:", timeRemaining == 0 || energy == 0);
// var num1 = 2;
// var num2 = 5;
// var test1 = num1 % 2;
// var test2 = num2 % 2;
// var result1 = test1 == 0;
// var result2 = test2 == 0;
// console.log("Is", num1, "an even number?", result1);
// console.log("Is", num2, "an even number?", result2);
// console.log(5 + 10); // 15

// var now = "Now in ";
// var three = 3;
// var d = "D!"
// console.log(now + three + d); // "Now in 3D!"

// var counter = 0;
// counter += 5;
// counter += 3;
// console.log(counter); // 8
