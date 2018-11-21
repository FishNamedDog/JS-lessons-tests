// The switch statment evaluates and expression and executes
// code as a result of a matching case

// Basic Syntax
// switch (expression)  {
//    case x:
          // execute case x code block
//        break;
//    case y:
          // execute case y code block
//        break;
//    default:
          // execute default code block
//  }
/////////////////////////////////////////////////////////////////////////////
// Example: week.js

// Set the current day of the week to a variable, with 1 being Monday 
// and 7 being Sunday
const day = new Date().getDay();

switch (day) {
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    case 7:
        console.log("It's Sunday, time to relax!");
        break;
    default:
        console.log("Something went horribly wrong...");
}