// JAVASCRIPT BASICS
// Variables and Data Types

var petDog = "Rex";
var petCat = "Pepper";

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is " + petDog);
console.log("My pet cat's name is " + petCat);

var catSound = "purr";
var dogSound = "woof";

console.log(petDog,"says", dogSound);
console.log(petCat,"says", catSound);

catSound= "meow";
console.log(petCat,"now says", catSound);

// IMPORTANT DATA TYPES IN JS
// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol

// Examples:
// guitar name and description are text values
// guitar price is a numberical value
// JS text values are know as string data type
// JS numbercal values are the number data type

// number - combination of digits: 375
// String - combination of characters: "375"

// Null represents absence of value
// undefined represents a variable that has been declared but not assigned a value
// BigInt is used for very large integers: 1234567890123456789012345678901234567890n
// Symbol is a unique and immutable data type used for object property keys: Symbol("description")

// Variable declarations
var name1 = ''; // empty string
var name2 = ""; // also an empty string
var name3 = null; // null value

// Undefined example
var noise;
console.log(noise); // Outputs: undefined

noise = "meow";
console.log(noise); // Outputs: "meow"

// var is used when you want to declare a variable that can be reassigned later
// const is used when you want to declare a variable that cannot be reassigned later
// let is used when you want to declare a variable that can be reassigned later, but with block scope
