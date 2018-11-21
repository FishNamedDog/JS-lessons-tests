// There are 3 methods for extracting string characters
//  - charAt(position)
//  - charCodeAt(position)
//  - Property access [ ]

// The charAt() method returns the character at a 
// specified index (position) in a string

var str = 'HELLO WORLD';
console.log(str.charAt(0));     // returns H

// The charCodeAt() method returns the unicode
// of the character at a specified index in a string
// The method returns a UTF-16 code (an integer between 0 and 65535)

var str = 'HELLO WORLD';
console.log(str.charCodeAt(0));     // returns 72

// ECMAScript 5 (2009) allows property access [ ] on strings

var str = 'HELLO WORLD';
console.log(str[0]);            // returns H