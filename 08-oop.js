// OBJECT-ORIENTED PROGRAMMING (OOP)

// Basic OOP example
var purchase1 = {
    shoes:100,
    stateTax: 0.05,
    shipping: 10,
    calculateTotal: function() {
        var total = this.shoes + (this.shoes * this.stateTax) + this.shipping;
        return total;
    }
}

console.log("Total purchase amount:", purchase1.calculateTotal()); // Outputs: Total purchase amount: 115

var purchase2 = {
    shoes: 80,
    stateTax: 0.05,
    shipping: 10,
    calculateTotal: function() {
        var total = this.shoes + (this.shoes * this.stateTax) + this.shipping;
        return total;
    },
}

console.log("Total purchase amount:", purchase2.calculateTotal());

// CLASS DECLARATION
class Car{
    // constructor is a special method that is called when an object is created
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }
    // method to start the turbo of the car
    turboOn(){
        console.log("Turbo is on! Speed increased to", this.speed + 50);
    }
}

// creating an object of the Car class
var myCar = new Car("red", 100);
console.log("My car color is", myCar.color);
console.log("My car speed is", myCar.speed);
myCar.turboOn();

// INHERITANCE - extending a class
class SportsCar extends Car {
    constructor(color, speed, brand) {
        super(color, speed); // Call the parent class constructor
        this.brand = brand; // Add a new property specific to SportsCar
    }
}

var mySportsCar=new SportsCar("blue", 200, "Ferrari");
console.log("My sports car color is", mySportsCar.color);
console.log("My sports car speed is", mySportsCar.speed);
console.log("My sports car brand is", mySportsCar.brand);
mySportsCar.turboOn(); // turboOn is inherited from the Car class

// ENCAPSULATION
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this._balance = balance; // Using underscore to indicate private property
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this._balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to get the current balance
    getBalance() {
        return this._balance;
    }
}

// Creating an instance of BankAccount
var myAccount = new BankAccount("123456789", 1000);
console.log("Account Number:", myAccount.accountNumber);
console.log("Initial Balance:", myAccount.getBalance());
myAccount.deposit(500);
console.log("Updated Balance:", myAccount.getBalance());

// POLYMORPHISM
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!";
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!";
    }
}

console.log(bicycle.bell());
console.log(door.bell());

function ringTheBell(thing){
    console.log(thing.bell());
}

ringTheBell(bicycle);
ringTheBell(door);

// Polymorphism with concatenation
console.log("abc".concat("def")); // 'abcdef'
console.log(["abc"].concat(["def"])); // ['abc', 'def']
console.log(["abc"] + ["def"]); // "abc,def"

// Polymorphism using classes
class Bird {
    useWings() {
        console.log("Flying!");
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings(); //super calls the parent class's method
        console.log("Barely flapping!");
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

// Constructor function (old style)
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

var chocolateIcecream = new Icecream("chocolate");
chocolateIcecream.meltIt();
chocolateIcecream.flavor = "vanilla";
console.log(chocolateIcecream.flavor);

// Classes with default parameters
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,false);
console.log(fail.calculate());

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var better = new WithDefaultParams();
better.calculate(); // Result: 6
