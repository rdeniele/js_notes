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


// conditionals

// if (condition == true){
//     // code to execute if condition is true
// }

// operators associated with conditions
// == (equal to)
// === (strict equal to)
// != (not equal to)
// !== (strict not equal to)
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)
// && (logical AND)
// || (logical OR)

// ifelse statements
// if (condition == true) {
//     // code to execute if condition is true
// } else {
//     // code to execute if condition is false
// }

// example of ifelse statement
// var result = 50;
// if (result>50){
//     console.log("You passed the test!");
// }else if (result == 50){
//     console.log("You got exactly 50!");
// }else{
//     console.log("You failed the test.");
// }


// var place ='first';
// switch(place){
//     case 'first':
//         console.log("Gold medal");
//         break;
//     case 'second':
//         console.log("Silver medal");
//         break;
//     case 'third':
//         console.log("Bronze medal");
//         break;
//     default:
//         console.log("No medal");
//         break;
// }

// var age = 10;

// if (age>65){
//     console.log("You get your income from your pension");
// }else if(age<65 && age>18){
//     console.log("Each month you get a salary");
// }else if(age<18){
//     console.log("You get an allowance");
// }else{
//     console.log("The value of the age variable is not numerical");
// }

// var day = "Sunday";

// switch(day){
//     case "Monday":
//         console.log("Start of the work week");
//         break;
//     case "Tuesday":
//         console.log("Second day of the work week");
//         break;
//     case "Wednesday":
//         console.log("Midweek day");
//         break;
//     case "Thursday":
//         console.log("Almost the weekend");
//         break;
//     case "Friday":
//         console.log("Last day of the work week");
//         break;
//     case "Saturday":
//         console.log("Weekend starts");
//         break;
//     case "Sunday":
//         console.log("Relax, it's Sunday");
//         break;
//     default:
//         console.log("There is no such day");
//         break;
// }


// LOOPS

// for loop
// i = 0 is the counter variable
// i < 5 is the condition to continue the loop
// i++ is the increment operation

// for (var i = 0; i < 5; i++) {
//     console.log("Iteration number:", i);
// }
// decrementing for loop
// for (var i = 5; i > 0; i--) {
//     console.log("Countdown:", i);
// }

// for loop with array
// var fruits = ["apple", "banana", "cherry"];
// for (var i = 0; i < fruits.length; i++) {
//     console.log("Fruit:", fruits[i]);
// }

// for loop with array and index
// var fruits = ["apple", "banana", "cherry"];
// for (var i = 0; i < fruits.length; i++) {
//     console.log("Fruit at index", i, "is", fruits[i]);
// }

// while loop
// var j is the counter variable
// j < 5 is the condition to continue the loop
// var j = 0;
// while (j < 5) {
//     console.log("Iteration number:", j);
//     j++;
// }

// decrementing loop
// var k = 5;
// while (k > 0) {
//     console.log("Countdown:", k);
//     k--;
// }

// var i = 5;
// while(i>0){
//     console.log(i)
//     i--
// }
// console.log("Countdown finished")

// var i = 2018;
// while(i <= 2022){
//     console.log(i)
//     i++
// }


// nested loops
// 
// for (var i = 1; i < 3; i++) {  // Outer loop
//     for (var j = 1; j < 8; j++) { //inner loop
//         console.log("Week ", i, "Day ", j); //output
//     }
// }

// for(var year = 2023; year < 2025; year++){
//     console.log("Year:", year);
//     for(var month =6; month <9; month++){
//         console.log("Month:", month);
//     }
// }

// for (var i=1;i<11;i++){
//     if(i==1){
//         console.log("Gold Medal");
//     }else if(i==2){
//         console.log("Silver Medal");
//     }
//     else if(i==3){
//         console.log("Bronze Medal");
//     }else{
//         console.log(i);
//     }
// }

// for (var i=1;i<11;i++){
//     switch(i){
//         case 1:
//             console.log("Gold Mental");
//             break;
//         case 2:
//             console.log("Silver Mental");
//             break;
//         case 3:
//             console.log("Bronze Mental");
//             break;
//         default:
//             console.log(i);
//             break;
//     }
// }

// functions

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// greet("Alice");

// function addTwoNums(num1, num2){
//     var sum = num1 + num2;
//     console.log("The sum of", num1, "and", num2, "is", sum);
// }

// addTwoNums(5, 10);


// storing data in arrays

// var fruits = [];
// fruits.push("apple"); // ['apple']
// fruits.push('pear'); // ['apple', 'pear']

// console.log(fruits); // ['apple', 'pear']

// fruits.pop();
// console.log(fruits); // ['apple']
// // LILO


// function arrayBuilder(one, two, three) {
//     var arr = [];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);
//     console.log(arr);
// }
// arrayBuilder("apple", "banana", "cherry"); // ['apple', 'banana', 'cherry']

// this is a simple function that builds an array from three arguments
// it takes three arguments and pushes them into an array

// function arrayBuilder(one, two, three) {
//     var arr = [];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);
//     return arr;
// }

// var simpleArr = arrayBuilder('apple', 'pear', 'plum');
// console.log(simpleArr); // ['apple', 'pear', 'plum']

// math functions from the Math object
// var MyNum = Math.sqrt(16); // Calculates square root of 16
// console.log(MyNum); // Output: 4

// Math object cheat sheet
// JavaScript has useful built-in objects. One of these popular built-in objects is the Math object.

// By the end of this reading, you'll be able to:

// Outline the built-in properties and methods of the Math object

// Number constants
// Here are some of the built-in number constants that exist on the Math object: 

// The PI number: Math.PI which is approximately 3.14159

// Euler's number: Math.E which is approximately 2.718

// The natural logarithm of 2: Math.LN2 which is approximately 0.693

// Rounding methods
// These include: 

//  Math.ceil() - rounds up to the closest integer 

//  Math.floor() - rounds down to the closest integer 

//  Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 

//  Math.trunc() - trims the decimal, leaving only the integer

// Arithmetic and calculus methods
// Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object: 

// Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 

// Math.sqrt(16) - calculates the square root of 16, the result is 4 

// Math.cbrt(8) - finds the cube root of 8, the result is 2 

// Math.abs(-10) - returns the absolute value, the result is 10 

// Logarithmic methods: Math.log(), Math.log2(), Math.log10() 

// Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.

//  Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.

// Logarithmic Methods
// Math.log(x) - Returns the natural logarithm (base e) of x.

// Math.log2(x) - Returns the base-2 logarithm of x.

// Math.log10(x) - Returns the base-10 logarithm of x.

// Logarithmic Methods
// Math.log(x) - Returns the natural logarithm (base e) of x.

// Math.log2(x) - Returns the base-2 logarithm of x.

// Math.log10(x) - Returns the base-10 logarithm of x.

// MATH RANDOM
// Math.random() //Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
// var item = Math.random(); // Generates a random number
// console.log(item); // Outputs a random number between 0 and 1

// Math.ceil()
// var num=4.1;
// var roundedNumber = console.log(Math.ceil(num))
// // Outputs: 5 (rounds up to the nearest integer)


// for loop over arrays

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++){
//     console.log("Element at index", i, "is", arr[i]);
// }

// const letters="abc";
// const match = "abc"
// for (var i = 0; i < letters.length; i++) {
//     for(var j=0; j<match.length; j++){
//         if(letters[i] == match[j]){
//             console.log("Match found:", letters[i]);
//         }
//     }
// }

// var veggies = ["carrot", "broccoli", "spinach"];
// for (var i = 0; i < veggies.length; i++) {
//     console.log("Vegetable at index", i, "is", veggies[i]);
// }

// const greeting = "Hello, World!";
// for(var i = 0; i<greeting.length;i++){
//     const match = ["e", "o"];
//     for (var j=0;j<match.length;j++){
//         if(greeting[i] == match[j]){
//             console.log("Match found:", greeting[i], "at index", i);
//         }
//     }
// }

// var greet = "Hello, World!";
// var user = "Alice";

// // console.log(greet + " " + user + "!"); // Concatenation
// console.log(greet.concat(user)); // Using concat method

// String cheat sheet
// By the end of this reading, you'll be able to:

// Identify examples of String functions and explain how to call them

// In this cheat sheet, I'll list some of the most common and most useful properties and methods available on strings.

// For all the examples, I'll be using either one or both of the following variables:

// 21
// var greet = "Hello, ";
// var place = "World";
// The length here will be 7 as total of 5 characters, 1 comma and the 1 blank space inside the string.

// Note that whatever string properties and methods I demo in the following examples, I could have run it on those strings directly, without saving them to a variable such as the ones I named greet and place.

// In some of the examples that follow, for the sake of clarity, instead of using a variable name, I'll use the string itself.

// All strings have at their disposal several built-in properties, but there's a single property that is really useful: the length property, which is used like this:

// 1
// greet.length; // 7
// To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:  

// 12
// var greet = "Hello, ";
// greet.charAt(0); // 'H'
// The concat() method joins two strings:  

// 1
// "Wo".concat("rl").concat("d"); // 'World'
// The indexOf returns the location of the first position that matches a character: 

// 123
// "ho-ho-ho".indexOf('h'); // 0
// "ho-ho-ho".indexOf('o'); // 1
// "ho-ho-ho".indexOf('-'); // 2
// The lastIndexOf finds the last match, otherwise it works the same as indexOf.

// The split method chops up the string into an array of sub-strings:

// 1
// "ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
// There are also some methods to change the casing of strings. For example:  

// 12
// greet.toUpperCase(); // "HELLO, "
// greet.toLowerCase(); // "hello, "
// Here's a list of all the methods covered in this cheat sheet:

// charAt() 

// concat() 

// indexOf() 

// lastIndexOf() 

// split() 

// toUpperCase() 

// toLowerCase()  

// var clothes = [];
// clothes.push("Jag")
// clothes.push("Zara")
// clothes.push("H&M")
// clothes.push("Uniqlo")
// clothes.push("Penshoppe")
// clothes.pop()
// console.log(clothes)

// var favCar = {};
// favCar.color = "red";
// favCar.convertible = true;
// console.log(favCar);

// const favcar={
//     color: "red",
//     convertible: true,
//     year: 2020,
//     brand: "Toyota"
// }
// console.log(favcar);

function createCar(color, convertible, year, brand) { //this is a function that creates a car object
    // it takes four parameters: color, convertible, year, and brand

    // then it returns an object with those properties
    // this is a simple function that creates a car object
    return {
        color: color,
        convertible: convertible,
        year: year,
        brand: brand
    };
}
// console.log(createCar("red", true, 2020, "Toyota"));



// var car = {};

// car.color = "red";

// //add a method to the car object so that it can be called as car.turnkey()
// car.turnKey = function() { 
//   console.log('engine running'); 
// }

// car.turnKey(); // Outputs: engine running

// var car = {};
// car.mileage = 98765;
// car.color = "red";
// console.log(car);

// var car = {};
// car.mileage = 98765;
// car.color = "red";
// console.log(car);
// car.turnTheKey = function() {
//     console.log("The engine is running")
// }
// console.log(car);

//example of adding properties and methods to an object
// var car = {};
// car.mileage = 98765;
// car.color = "red";
// console.log(car);
// car.turnTheKey = function() {
//     console.log("The engine is running")
// }
// car.lightsOn = function() {
//     console.log("The lights are on.")
// }
// console.log(car);
// car.turnTheKey();
// car.lightsOn()

//   var dog = {
//       color: "brown",
//       height: 30,
//       length: 60
//   };
//   dog["type"] = "corgi";
//   console.log(dog);

//   var result = "Hello".indexOf('l');
//   console.log(result); // Outputs: 2 (the index of the first 'l' in "Hello")

// debugging

// console.log(a+c)
// console.log("This is a debug message");

// syntax error example
// var word= "hello;

// try {
//     console.log(c+b);
// } catch (error) {
//     console.error("An error occurred:", error.message);
    
// }

// console.log("This code now runs after the error was caught. You can continue executing other code here.");

// throw new ReferenceError("This is a custom error message");


// try {
//     console.log(a+b)
// } catch (err) {
//     console.error(err);
//     console.log("An error occurred. Please check your code.");
// }
// console.log("This code runs after the error was caught. You can continue executing other code here.");

// undefined, null, and empty values
// Undefined is a variable that has been declared but not assigned a value
// var noise;
// console.log(noise); // Outputs: undefined

// noise = "meow";
// console.log(noise); // Outputs: "meow"

// var game={
//     score:1000,
// }
// game.Score;

// var name1 = ''; // empty string
// var name2 = ""; // also an empty string

// var name3 = null; // null value

// )function addTwoNums(a,b){
//     console.log(a + b);
// }

// addTwoNums(5, "5"); 

// function addTwoNums(a,b){
//     try {
//         if (typeof a !== 'number') {
//             throw new TypeError("The first argument is not a number.");
//         }else if (typeof b !== 'number') {
//             throw new TypeError("The second argument is not a number.");
//         }else{
//             console.log(a + b);
//         }
//     } catch (err) {
//         console.log("Error!",err);
//     }
// }

// addTwoNums(5, "5"); // Outputs: 55 (string concatenation)

// console.log("It still works"); // Outputs: It still works

// function letterFinder(word, match) {
//     var condition1 = typeof word == 'string' && word.length > 2
//     var condition2= typeof match == 'string' && match.length == 1;

//     if (condition1 == true && condition2 == true){
//         for (var i =0;i<word.length;i++){
//             if(word[i] == match){
//                 console.log('Found the', match, 'at', i)
//             }else{
//                 console.log('---No match found at', i)
//             }
//         }
//     }
// }

// letterFinder("cat", "c");


// functional programming

// var currencyOne = 100;
// var currencyTwo = 0;
// var exchangeRate = 0.85;

// function convertCurrency(amount,rate){
//     return amount * rate;
// }

// currencyTwo = convertCurrency(currencyOne, exchangeRate);
// console.log("Converted amount:", currencyTwo); // Outputs: Converted amount: 85

// var is used when you want to declare a variable that can be reassigned later
// const is used when you want to declare a variable that cannot be reassigned later
// let is used when you want to declare a variable that can be reassigned later, but

// OOP
// var purchase1 = {
//     shoes:100,
//     stateTax: 0.05,
//     shipping: 10,
//     calculateTotal: function() {
//         var total = this.shoes + (this.shoes * this.stateTax) + this.shipping;
//         return total;
//     }
// }

// console.log("Total purchase amount:", purchase1.calculateTotal()); // Outputs: Total purchase amount: 115
// this means the current object
// this is used to refer to the current object in a method


// var purchase2 = {
//     shoes: 80,
//     stateTax: 0.05,
//     shipping: 10,
//     calculateTotal: function() {
//         var total = this.shoes + (this.shoes * this.stateTax) + this.shipping;
//         return total;
//     },}

// console.log("Total purchase amount:", purchase2.calculateTotal()); // Outputs: Total purchase amount: 115
// OOP is a programming paradigm that uses objects to represent data and methods to manipulate that data.
// It allows you to create reusable code and organize your code in a more structured way.
// OOP allows you to create objects that can have properties and methods.
// OOP allows you to create classes that can be used to create objects with the same properties and methods.

// class declaration

// class Car{
//     // constructor is a special method that is called when an object is created
//     // it is used to initialize the properties of the object
//     constructor(color, speed){
//         this.color = color;
//         this.speed = speed;
//     }
//     // method to start the turbo of the car
//     turboOn(){
//         console.log("Turbo is on! Speed increased to", this.speed + 50);
//     }
// }

// // creating an object of the Car class
// var myCar = new Car("red", 100);
// console.log("My car color is", myCar.color); // Outputs: My car color is
// console.log("My car speed is", myCar.speed); // Outputs: My car speed is 100
// myCar.turboOn(); // Outputs: Turbo is on! Speed increased to 150

// // extending a class
// class SportsCar extends Car {
//     constructor(color, speed, brand) {
//         super(color, speed); // Call the parent class constructor
//         this.brand = brand; // Add a new property specific to SportsCar
//     }
// }

// var mySportsCar=new SportsCar("blue", 200, "Ferrari");
// console.log("My sports car color is", mySportsCar.color); // Outputs: My sports car color is blue
// console.log("My sports car speed is", mySportsCar.speed); // Outputs: My sports car speed is 200
// console.log("My sports car brand is", mySportsCar.brand); // Outputs: My sports car brand is Ferrari
// mySportsCar.turboOn(); // Outputs: Turbo is on! Speed increased to 250
// // turboOn is inherited from the Car class

// encapsulation
// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this._balance = balance; // Using underscore to indicate private property
//     }

//     // Method to deposit money
//     deposit(amount) {
//         if (amount > 0) {
//             this._balance += amount;
//             console.log(`Deposited ${amount}. New balance: ${this._balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }

//     // Method to get the current balance
//     getBalance() {
//         return this._balance;
//     }
// }

// // Creating an instance of BankAccount
// var myAccount = new BankAccount("123456789", 1000);
// console.log("Account Number:", myAccount.accountNumber); // Outputs: Account Number: 123456789
// console.log("Initial Balance:", myAccount.getBalance()); // Outputs: Initial Balance: 100
// myAccount.deposit(500); // Outputs: Deposited 500. New balance: 1500
// console.log("Updated Balance:", myAccount.getBalance()); // Outputs: Updated Balance: 1500

// so this is a simple example of encapsulation in OOP
// encapsulation is a principle of OOP that restricts direct access to an object's properties and methods.
// encapsulation is achieved by using private properties and methods, which are not accessible from outside the class
//ecapsulation is used when you want to hide the internal state of an object and only expose a public interface for interacting with the object

// polymorphism
// const bicycle = {
//     bell: function() {
//         return "Ring, ring! Watch out, please!";
//     }
// }
// const door = {
//     bell: function() {
//         return "Ring, ring! Come here, please!";
//     }
// }

// console.log(bicycle.bell()); // Outputs: Ring ring! Watch out, please!
// console.log(door.bell()); // Outputs: Ring ring! Come here, please!


// function ringTheBell(thing){
//     console.log(thing.bell());
// }

// ringTheBell(bicycle); // Outputs: Ring ring! Watch out, please!
// ringTheBell(door); // Outputs: Ring ring! Come here, please!

// when to use polymorphism
// Polymorphism is used when you want to define a common interface for different types of objects.
// It allows you to use the same method name for different objects, and each object can have its own implementation of that method.
// Polymorphism is useful when you want to create a flexible and extensible codebase that can handle different types of objects without changing the code that uses those objects.


// Another example of polymorphism is the concatenation operator, used by calling the built-in concat() method.

// If I use the concat() method on two strings, it behaves exactly the same as if I used the + operator. 

// console.log("abc".concat("def")); // 'abcdef'
// console.log(["abc"].concat(["def"])); // ['abc', 'def']
// console.log(["abc"] + ["def"]); // "abc,def"



// Here's an example of polymorphism using classes in JavaScript:

// class Bird {
//     useWings() {
//         console.log("Flying!");
//     }
// }
// // The Bird class has a method called useWings that prints "Flying!" to the console.


// class Eagle extends Bird {
//     useWings() {
//         super.useWings(); //super calls the parent class's method
//         console.log("Barely flapping!");
//     }
// }
// // The Eagle class extends the Bird class and overrides the useWings method. It calls the parent class's useWings method using super and adds its own behavior by printing "Barely flapping!" to the console.

// class Penguin extends Bird {
//     useWings() {
//         console.log("Diving!");
//     }
// }

// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"

// function Icecream(flavor) {
//     this.flavor = flavor;
//     this.meltIt = function() {
//         console.log(`The ${this.flavor} icecream has melted`);
//     }
// }

// var chocolateIcecream = new Icecream("chocolate");
// chocolateIcecream.meltIt(); // Outputs: The chocolate icecream has melted
// chocolateIcecream.flavor = "vanilla"; // Changing the flavor property
// console.log(chocolateIcecream.flavor); // Outputs: vanilla

// "abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
// "abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]

// "abcd".match(/b/); // ['b', index: 1, input: 'abcd', groups: undefined]

// console.log("abcd".match(/c/)); // ['c', index: 2, input: 'abcd', groups: undefined]


// new Date();
// new Error();
// new Map();
// new Promise();
// new Set();
// new WeakSet();
// new WeakMap();

// var bird = {
//     // prototype object for bird
//     haswings: true,
//     canFly: true,
//     hasFeathers: true,
// }

// var eagle = Object.create(bird); // Create a new object eagle that inherits from bird
// console.log("eagle:", eagle); // Outputs: eagle: {}
// console.log("eagle has wings", eagle.haswings); // Outputs: eagle: {}
// console.log("eagle can fly", eagle.canFly); // Outputs: eagle: {}
// console.log("eagle can feathers", eagle.hasFeathers); // Outputs: eagle: {}

// var pengiun = Object.create(bird); // Create a new object pengiun that inherits from bird
// pengiun.canFly = false; // Override the canFly property for pengiun
// console.log("pengiun:", pengiun); // Outputs: pengiun: {}
// console.log("pengiun has wings", pengiun.haswings); // Outputs: pengiun: {}
// console.log("pengiun can fly", pengiun.canFly); // Outputs: pengiun: {}
// console.log("pengiun can feathers", pengiun.hasFeathers); // Outputs: peng


// function noDefaultParams(number) {
//     console.log('Result:', number * number)
// }

// // noDefaultParams(5); // Outputs: Result: 25
// // noDefaultParams(); // Outputs: Result: NaN (Not a Number, because number is undefined)

// function withDefaultParams(number = 10) {
//     console.log('Result:', number * number)
// }

// withDefaultParams(); // Result: 100

// class NoDefaultParams {
//     constructor(num1, num2, num3, string1, bool1) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = num3;
//         this.string1 = string1;
//         this.bool1 = bool1;
//     }
//     calculate() {
//         if(this.bool1) {
//             console.log(this.string1, this.num1 + this.num2 + this.num3);
//             return;
//         }
//         return "The value of bool1 is incorrect"
//     }
// }

// var fail = new NoDefaultParams(1,2,3,false);
// console.log(fail.calculate()); // 'The value of bool1 is incorrect'

// class WithDefaultParams {
//     constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = num3;
//         this.string1 = string1;
//         this.bool1 = bool1;
//     }
//     calculate() {
//         if(this.bool1) {
//             console.log(this.string1, this.num1 + this.num2 + this.num3);
//             return;
//         }
//         return "The value of bool1 is incorrect"
//     }
// }
// var better = new WithDefaultParams();
// better.calculate(); // Result: 6



// recursion

// function myDay() {
//     console.log('Morning');
//     console.log('Afternoon');
//     console.log('Evening');
//     myDay();
// }

// myDay(); // This will cause a stack overflow error because the function calls itself indefinitely\\\

// let counter = 3;
// function example(){
//     console.log("Counter value:", counter);
//     counter = counter - 1;
//     if(counter === 0) return;
//     example();
// }

// example(); // This will cause a stack overflow error because the function calls itself indefinitely

// var virtualPet = {
//     sleepy: true,
//     nap: function() {}
// }

// //creating an object
// var virtualPet = {
//     sleepy: true,
//     nap: function() {
//         this.sleepy = false
//     }
// }
// console.log(virtualPet.sleepy) // true
// virtualPet.nap()
// console.log(virtualPet.sleepy) // false



// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }

// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// // This code checks if useRandom is true or false
// // If true, it assigns getNumber to the randomNum function  
// // If false, it assigns getNumber to the specificNum function
// // This allows you to easily switch between using a random number or a specific number without changing the

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())

// let {PI} = Math; // Destructuring assignment to extract PI from Math object
// console.log(PI);
// console.log(PI === Math.PI); // true
// console.log(PI === Math.PI); // false


// For loops of objects

// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)
// } //Uncaught TypeError: car is not iterable

// const colors = ['red','orange','yellow']
// for (var color of colors) {
//     console.log(color);
// }


// for-in loop

// const car = {
//     engine:true,
//     streering:true,
//     speed:"slow",

// }

// const sportsCar = Object.create(car); //reference to the car object
// sportsCar.speed = "fast"; //sportsCar is a new object that inherits from car
// sportsCar.color = "red";
//  //adding a new property to sportsCar
// console.log("sportsCar:", sportsCar); // Outputs: sportsCar: {}


// console.log(" -- FOR-IN SAMPLE --")

// // for-in loop iterates over the properties of an object
// for (var prop in sportsCar) {
//     console.log(prop, ":", sportsCar[prop]); // Outputs: engine : true, streering : true, speed : fast
// }
// console.log(" Iteration over object AND its prototype chain")

// console.log(" -- FOR-OF SAMPLE --")

// // for-of loop iterates over the values of an iterable object
// for (prop of Object.keys(sportsCar)){ //it will iterate over the keys of the sportsCar object instead of the values
//     console.log(prop + ": " + sportsCar[prop]); // Outputs: engine : true, streering : true, speed : fast
// }
// console.log(" Iteration over object only,  OWN PROPERTIES ONLY")




// TEMPLATE LITERALS'
// let noMultiLine = "No muli-line string in ES5";
// console.log("Did you know?" + noMultiLine); // Outputs: Did you know? No muli-line string in ESS

// let multiLine = `Using ES6 backticks, 
// multi-line strings 
// are possible.`

// console.log("Did you know?" + multiLine); // Outputs: Did you know? Using ES6 backticks, multi-line strings are possible.


// // ES6 Variable interpolation

// let first = `He said, "Dont't you know? ES6, it's got some great features!"`;
// let second = `"Wounldn't you want to learn more?", he asked.`;

// console.log(`${first} - and I got curious. ${second}`); // Outputs: He said, "Dont't you know? ES6, it's got some great features!" - and I got curious. "Wounldn't you want to learn more?", he asked.




// DATA STRUCTURES
// Objects, Arrays, Sets, Maps

// average
// const grades = [85, 90, 78, 92, 88];
// let gradeSum= 0;
// for(let i = 0; i<grades.length; i++){
//     // gradeSum = gradeSum + grades[i];
//     gradeSum += grades[i]; // shorthand for adding to the sum
// }

// console.log("Total sum of grades:", gradeSum); // Outputs: Total sum of grades: 433
// const average = gradeSum / grades.length;
// console.log("Average grade:", average); // Outputs: Average grade: 86.6

// set
// const house1= 'red';
// const house2= 'blue';
// const house3= 'red';
// const house4= 'blue';

// const houses = new Set(); // Create a new Set to store unique house colors
// houses.add(house1).add(house2).add(house3).add(house4); // Add houses to the Set

// console.log("Houses:", houses); // Outputs: Houses: Set { 'red', 'blue' }
// //red and blue are unique values, so they are stored only once in the Set


// MAPS
// Creating a new Map
// const fruits = new Map();

// // Adding key-value pairs
// fruits.set('apple', 5);
// fruits.set('banana', 3);
// fruits.set('orange', 2);

// // Getting values
// console.log("Number of apples:", fruits.get('apple')); // 5

// // Checking if a key exists
// console.log("Do we have lemons?", fruits.has('lemon')); // false

// // Size of the map
// console.log("Total fruit types:", fruits.size); // 3

// // Deleting an entry
// fruits.delete('orange');
// console.log("After deleting orange:", fruits);

// // Iterating over a Map
// console.log("All fruits:");
// fruits.forEach((value, key) => {
//     console.log(key + ": " + value);
// });

// // Another way to iterate using for...of
// console.log("Using for...of:");
// for (const [fruit, quantity] of fruits) {
//     console.log(fruit + ": " + quantity);
// }

// // Creating a Map with initial values
// const vegetables = new Map([
//     ['carrot', 10],
//     ['broccoli', 7],
//     ['spinach', 5]
// ]);

// console.log("Vegetables Map:", vegetables);




// MORE Arrays

// const fruits = ['apple', 'banana', 'cherry'];
// function appendIndex(currentFruit, index){ // Better parameter names
//     console.log(`${index}. ${currentFruit}`)
// }
// fruits.forEach(appendIndex); // Outputs: 0: apple, 1: banana, 2: cherry

// const fruits1 = ['kiwi','mango','apple','pear'];
// function appendIndex(fruit1, index) {
//     console.log(`${index}. ${fruit1}`)
// }
// fruits.forEach(appendIndex);

// const fruits = ['apple', 'banana', 'cherry'];
// function appendIndex(element, index, array){ // All three parameters
//     console.log(`${index}. ${element}`)
// }
// fruits.forEach(appendIndex);

// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach( function(veggie, index) {console.log(`${index}. ${veggie}`);}); //shorter

// const nums = [0,10,20,30,40,50];
// const filteredNums = nums.filter(function(num){
//     return num > 20; 
// }); // Outputs: 30, 40, 50

// console.log(filteredNums);


// const nums1 = [0,10,20,30,40,50];
// console.log(nums1.filter(function(num){
//     return num > 20; 
// }));



// MAP

// const array = [0,10,20,30,40,50].map( function(num) {
//     return num / 10
// })

// console.log(array); // Outputs: [0, 1, 2, 3, 4, 5]


// ES6 Arrow Function Syntax
// const array = [0,10,20,30,40,50].map(num => num / 10);
// console.log(array); // Outputs: [0, 1, 2, 3, 4, 5]


// for loop
// const numbers = [1, 2, 3, 4, 5]
// const arr = [];
// for (let i = 0; i <numbers.length; i++){
//     arr.push(numbers[i] * 2) //push each number multiplied by 2 into the arr array
// }

// console.log(arr); // Outputs: [2, 4, 6, 8, 10]




// SPREAD OPERATOR

// let top3 = [
//     "The Colosseum",
//     "The Great Wall of China",
//     "Machu Picchu"
// ];

// function showItenerary(place1,place2,place3) {
//     // console.log("Visit" + place1);
//     console.log(`Visit ${place1}`);
//     // console.log("Then visit" + place2);
//     console.log(`Then visit ${place2}`);
//     // console.log("Finished with a visit to" + place2);
//     console.log(`Finished with a visit to ${place2}`);
// }
// // showItenerary(top3[0], top3[1], top3[2]); // Outputs: Visit The Colosseum, Then visit The Great Wall of China, Finished with a visit to Machu Picchu
// showItenerary(...top3); // Using spread operator to pass the array elements as arguments


