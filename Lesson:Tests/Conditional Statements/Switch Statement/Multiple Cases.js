// You may encounter code in which multiple case s should
// have the same output. In order to accomplish this, you
// can use more than one case for each block of code

// We will build a small application matching the current
// month to the appropriate season. We will use the new Date()
// method to find a number corresponding to the current month,
// and apply that to the month variable

// Our appication will output the four season with the following
// specifications for simplicity:
//  - Winter: January, February, and March
//  - Spring: April, May, and June
//  - Summer: July, August, and September
//  - Autumn: October, November, and December

///////////////////////////////////////////////////////////////////////////

// Example: seasons.js

// Get number corresponding to the current month, with 0 being January
// and 11 being December
const month = new Date().getMonth();

switch (month) {
    // January, Feburary, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong");
}