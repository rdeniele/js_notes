// ERROR HANDLING AND DEBUGGING

// Basic debugging with console.log
console.log("This is a debug message");

// Syntax error example (commented out)
// var word= "hello;

// Try-catch block
try {
    console.log(c+b); // This will throw an error
} catch (error) {
    console.error("An error occurred:", error.message);
}

console.log("This code now runs after the error was caught. You can continue executing other code here.");

// Custom error throwing
// throw new ReferenceError("This is a custom error message");

// More comprehensive try-catch
try {
    console.log(a+b) // This will throw an error
} catch (err) {
    console.error(err);
    console.log("An error occurred. Please check your code.");
}
console.log("This code runs after the error was caught. You can continue executing other code here.");

// Type checking to prevent errors
function addTwoNums(a,b){
    try {
        if (typeof a !== 'number') {
            throw new TypeError("The first argument is not a number.");
        }else if (typeof b !== 'number') {
            throw new TypeError("The second argument is not a number.");
        }else{
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!",err);
    }
}

addTwoNums(5, "5"); // This will trigger the type error
console.log("It still works"); // This will still execute

// Complex validation function
function letterFinder(word, match) {
    var condition1 = typeof word == 'string' && word.length > 2
    var condition2= typeof match == 'string' && match.length == 1;

    if (condition1 == true && condition2 == true){
        for (var i =0;i<word.length;i++){
            if(word[i] == match){
                console.log('Found the', match, 'at', i)
            }else{
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Invalid parameters provided");
    }
}

letterFinder("cat", "c");

// Checking for undefined variables
var game={
    score:1000,
}
// game.Score; // This would be undefined (note the capital S)

// Undefined example
var noise;
console.log("Undefined variable:", noise); // Outputs: undefined

noise = "meow";
console.log("Defined variable:", noise); // Outputs: "meow"
