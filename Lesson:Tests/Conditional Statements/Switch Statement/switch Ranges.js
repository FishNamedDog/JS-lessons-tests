// There might be an occasion in which you will need to 
// evaluate a range of values in a switch block, as opposed
// to a single value. We can do this by setting our expression
// to true and doing an operation within each case statement

// We'll build a simple grading app that takes a number score
// and convert it to a letter grade with the following requirements:
//  - Grade of 90 and above is an A
//  - Grade of 80 to 89 is a B
//  - Grade of 70 to 79 is a C
//  - Grade of 60 to 69 is a D
//  - Grade of 59 or below is an F

////////////////////////////////////////////////////////////////////////////

// Example: grades.js

// Set the student's grade
const grade = 87;

switch (true) {
    // If score is 90 or greater
    case grade >= 90:
        console.log('A');
        break;
    // If score is 80 or greater
    case grade >= 80:
        console.log('B');
        break;
    // If score is 70 or greater
    case grade >= 70:
        console.log('C');
        break;
    // If score is 60 or greater
    case grade >= 60:
        console.log('D');
        break;
    // Anything 59 or below is failing
    default:
        console.log('F');
}