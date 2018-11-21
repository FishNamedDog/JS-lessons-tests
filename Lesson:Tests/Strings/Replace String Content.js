// The replace() method replaces a specified value with
// another value in a string

str = 'Please visit Microsoft!';
var n = str.replace('Microsoft', 'W3Schools');

console.log(n);

// By default, the replace() function replaces only
// the first match

str = 'Please visit Microsoft and Microsoft!';
var n = str.replace("Microsoft", "W3Schools");

console.log(n);

// By default, the replace() function is case sensitive
// Writing MIRCROSOFT (with upper case) will not work

str = 'Please visit Mircosoft!';
var n = str.replace('MICROSOFT', 'W3Schools');

console.log(n);

// To replace case insensitive, use a regular expression 
// with an /i flag (insensitve)

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, 'W3Schools');

console.log(n);

// To replace all matches, use a regular expression
// with a /g flag (global match)

str = 'Please visit Microsoft and Microsoft!';
var n = str.replace(/Microsoft/g, 'W3Schools');

console.log(n)