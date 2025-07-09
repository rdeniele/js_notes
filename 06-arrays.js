// ARRAYS AND ARRAY METHODS

// Basic array operations
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

console.log(fruits); // ['apple', 'pear']

fruits.pop();
console.log(fruits); // ['apple']
// LIFO - Last In, First Out

// For loop over arrays
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++){
    console.log("Element at index", i, "is", arr[i]);
}

// Nested loops with arrays
const letters="abc";
const match = "abc"
for (var i = 0; i < letters.length; i++) {
    for(var j=0; j<match.length; j++){
        if(letters[i] == match[j]){
            console.log("Match found:", letters[i]);
        }
    }
}

var veggies = ["carrot", "broccoli", "spinach"];
for (var i = 0; i < veggies.length; i++) {
    console.log("Vegetable at index", i, "is", veggies[i]);
}

// String and array searching
const greeting = "Hello, World!";
for(var i = 0; i<greeting.length;i++){
    const match = ["e", "o"];
    for (var j=0;j<match.length;j++){
        if(greeting[i] == match[j]){
            console.log("Match found:", greeting[i], "at index", i);
        }
    }
}

// Array building with push
var clothes = [];
clothes.push("Jag")
clothes.push("Zara")
clothes.push("H&M")
clothes.push("Uniqlo")
clothes.push("Penshoppe")
clothes.pop()
console.log(clothes)

// ARRAY METHODS

// forEach method
const fruits2 = ['apple', 'banana', 'cherry'];
function appendIndex(currentFruit, index){ // Better parameter names
    console.log(`${index}. ${currentFruit}`)
}
fruits2.forEach(appendIndex); // Outputs: 0: apple, 1: banana, 2: cherry

const fruits3 = ['apple', 'banana', 'cherry'];
function appendIndex2(element, index, array){ // All three parameters
    console.log(`${index}. ${element}`)
}
fruits3.forEach(appendIndex2);

// Shorter forEach syntax
const veggies2 = ['onion', 'garlic', 'potato'];
veggies2.forEach( function(veggie, index) {console.log(`${index}. ${veggie}`);}); //shorter

// Filter method
const nums = [0,10,20,30,40,50];
const filteredNums = nums.filter(function(num){
    return num > 20; 
});
console.log(filteredNums); // Outputs: [30, 40, 50]

// One-liner filter
const nums1 = [0,10,20,30,40,50];
console.log(nums1.filter(function(num){
    return num > 20; 
}));

// Map method
const array = [0,10,20,30,40,50].map( function(num) {
    return num / 10
})
console.log(array); // Outputs: [0, 1, 2, 3, 4, 5]

// ES6 Arrow Function Syntax
const array2 = [0,10,20,30,40,50].map(num => num / 10);
console.log(array2); // Outputs: [0, 1, 2, 3, 4, 5]

// Traditional for loop alternative to map
const numbers = [1, 2, 3, 4, 5]
const arr2 = [];
for (let i = 0; i <numbers.length; i++){
    arr2.push(numbers[i] * 2) //push each number multiplied by 2 into the arr array
}
console.log(arr2); // Outputs: [2, 4, 6, 8, 10]

// SPREAD OPERATOR
let top3 = [
    "The Colosseum",
    "The Great Wall of China",
    "Machu Picchu"
];

function showItinerary(place1,place2,place3) {
    console.log(`Visit ${place1}`);
    console.log(`Then visit ${place2}`);
    console.log(`Finished with a visit to ${place3}`);
}

// Without spread operator
// showItinerary(top3[0], top3[1], top3[2]);

// Using spread operator to pass the array elements as arguments
showItinerary(...top3);
