// OBJECTS

// Creating objects
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

// Object literal syntax
const favcar={
    color: "red",
    convertible: true,
    year: 2020,
    brand: "Toyota"
}
console.log(favcar);

// Object constructor function
function createCar(color, convertible, year, brand) {
    return {
        color: color,
        convertible: convertible,
        year: year,
        brand: brand
    };
}
console.log(createCar("red", true, 2020, "Toyota"));

// Adding methods to objects
var car = {};
car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}

car.turnKey(); // Outputs: engine running

// More complex object example
var car2 = {};
car2.mileage = 98765;
car2.color = "red";
console.log(car2);
car2.turnTheKey = function() {
    console.log("The engine is running")
}
car2.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car2);
car2.turnTheKey();
car2.lightsOn()

// Bracket notation
var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";
console.log(dog);

// Virtual pet example
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

// Object.create() for inheritance
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}

var eagle = Object.create(bird);
console.log("eagle:", eagle);
console.log("eagle has wings", eagle.hasWings);
console.log("eagle can fly", eagle.canFly);
console.log("eagle has feathers", eagle.hasFeathers);

var penguin = Object.create(bird);
penguin.canFly = false; // Override the canFly property for penguin
console.log("penguin:", penguin);
console.log("penguin has wings", penguin.hasWings);
console.log("penguin can fly", penguin.canFly);
console.log("penguin has feathers", penguin.hasFeathers);

// FOR-IN and FOR-OF loops with objects
const car3 = {
    engine:true,
    steering:true,
    speed:"slow",
}

const sportsCar = Object.create(car3);
sportsCar.speed = "fast";
sportsCar.color = "red";

console.log("sportsCar:", sportsCar);

console.log(" -- FOR-IN SAMPLE --")
// for-in loop iterates over the properties of an object
for (var prop in sportsCar) {
    console.log(prop, ":", sportsCar[prop]);
}
console.log(" Iteration over object AND its prototype chain")

console.log(" -- FOR-OF SAMPLE --")
// for-of loop iterates over the values of an iterable object
for (prop of Object.keys(sportsCar)){
    console.log(prop + ": " + sportsCar[prop]);
}
console.log(" Iteration over object only, OWN PROPERTIES ONLY")
