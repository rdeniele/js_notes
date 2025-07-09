// LOOPS

// FOR LOOP
// i = 0 is the counter variable
// i < 5 is the condition to continue the loop
// i++ is the increment operation

for (var i = 0; i < 5; i++) {
    console.log("Iteration number:", i);
}

// Decrementing for loop
for (var i = 5; i > 0; i--) {
    console.log("Countdown:", i);
}

// For loop with array
var fruits = ["apple", "banana", "cherry"];
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

// For loop with array and index
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i, "is", fruits[i]);
}

// WHILE LOOP
var j = 0;
while (j < 5) {
    console.log("Iteration number:", j);
    j++;
}

// Decrementing while loop
var k = 5;
while (k > 0) {
    console.log("Countdown:", k);
    k--;
}

var i = 5;
while(i>0){
    console.log(i)
    i--
}
console.log("Countdown finished")

var i = 2018;
while(i <= 2022){
    console.log(i)
    i++
}

// NESTED LOOPS
for (var i = 1; i < 3; i++) {  // Outer loop
    for (var j = 1; j < 8; j++) { //inner loop
        console.log("Week ", i, "Day ", j); //output
    }
}

for(var year = 2023; year < 2025; year++){
    console.log("Year:", year);
    for(var month =6; month <9; month++){
        console.log("Month:", month);
    }
}

// LOOP WITH CONDITIONALS
for (var i=1;i<11;i++){
    if(i==1){
        console.log("Gold Medal");
    }else if(i==2){
        console.log("Silver Medal");
    }
    else if(i==3){
        console.log("Bronze Medal");
    }else{
        console.log(i);
    }
}

// LOOP WITH SWITCH
for (var i=1;i<11;i++){
    switch(i){
        case 1:
            console.log("Gold Mental");
            break;
        case 2:
            console.log("Silver Mental");
            break;
        case 3:
            console.log("Bronze Mental");
            break;
        default:
            console.log(i);
            break;
    }
}
