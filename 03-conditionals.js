// CONDITIONALS AND CONTROL FLOW

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

// IF-ELSE STATEMENTS
var result = 50;
if (result>50){
    console.log("You passed the test!");
}else if (result == 50){
    console.log("You got exactly 50!");
}else{
    console.log("You failed the test.");
}

// SWITCH STATEMENTS
var place ='first';
switch(place){
    case 'first':
        console.log("Gold medal");
        break;
    case 'second':
        console.log("Silver medal");
        break;
    case 'third':
        console.log("Bronze medal");
        break;
    default:
        console.log("No medal");
        break;
}

// Complex conditional example
var age = 10;

if (age>65){
    console.log("You get your income from your pension");
}else if(age<65 && age>18){
    console.log("Each month you get a salary");
}else if(age<18){
    console.log("You get an allowance");
}else{
    console.log("The value of the age variable is not numerical");
}

// Day of week switch example
var day = "Sunday";

switch(day){
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Tuesday":
        console.log("Second day of the work week");
        break;
    case "Wednesday":
        console.log("Midweek day");
        break;
    case "Thursday":
        console.log("Almost the weekend");
        break;
    case "Friday":
        console.log("Last day of the work week");
        break;
    case "Saturday":
        console.log("Weekend starts");
        break;
    case "Sunday":
        console.log("Relax, it's Sunday");
        break;
    default:
        console.log("There is no such day");
        break;
}
