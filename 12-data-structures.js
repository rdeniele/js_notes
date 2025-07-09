// DATA STRUCTURES

// SETS
const house1= 'red';
const house2= 'blue';
const house3= 'red';
const house4= 'blue';

const houses = new Set(); // Create a new Set to store unique house colors
houses.add(house1).add(house2).add(house3).add(house4); // Add houses to the Set

console.log("Houses:", houses); // Outputs: Houses: Set { 'red', 'blue' }
//red and blue are unique values, so they are stored only once in the Set

// MAPS
// Creating a new Map
const fruits = new Map();

// Adding key-value pairs
fruits.set('apple', 5);
fruits.set('banana', 3);
fruits.set('orange', 2);

// Getting values
console.log("Number of apples:", fruits.get('apple')); // 5

// Checking if a key exists
console.log("Do we have lemons?", fruits.has('lemon')); // false

// Size of the map
console.log("Total fruit types:", fruits.size); // 3

// Deleting an entry
fruits.delete('orange');
console.log("After deleting orange:", fruits);

// Iterating over a Map
console.log("All fruits:");
fruits.forEach((value, key) => {
    console.log(key + ": " + value);
});

// Another way to iterate using for...of
console.log("Using for...of:");
for (const [fruit, quantity] of fruits) {
    console.log(fruit + ": " + quantity);
}

// Creating a Map with initial values
const vegetables = new Map([
    ['carrot', 10],
    ['broccoli', 7],
    ['spinach', 5]
]);

console.log("Vegetables Map:", vegetables);

// WORKING WITH ARRAYS - CALCULATING AVERAGES
const grades = [85, 90, 78, 92, 88];
let gradeSum= 0;
for(let i = 0; i<grades.length; i++){
    gradeSum += grades[i]; // shorthand for adding to the sum
}

console.log("Total sum of grades:", gradeSum); // Outputs: Total sum of grades: 433
const average = gradeSum / grades.length;
console.log("Average grade:", average); // Outputs: Average grade: 86.6

// ITERATING OVER OBJECTS WITH FOR-OF
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

// Objects are not directly iterable with for-of
const car = {
    speed: 100,
    color: "blue"
}

// This would throw an error:
// for(prop of car) {
//     console.log(prop)
// } //Uncaught TypeError: car is not iterable

// But you can iterate over Object.keys(), Object.values(), or Object.entries()
console.log("Object keys:");
for (const key of Object.keys(car)) {
    console.log(key);
}

console.log("Object values:");
for (const value of Object.values(car)) {
    console.log(value);
}

console.log("Object entries:");
for (const [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}
