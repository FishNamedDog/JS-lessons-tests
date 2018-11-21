// There are 3 methods for extracting a part of a string:
//  - slice(start, end)
//  - substring(start, end)
//  - substr(start, length)

// slice() extracts a part of a string and returns the extracted part in a new string
// The method takes 2 parameter: the starting index (position) and the ending index (position)
// This example slices out a portion of a string from position 7 to position 13

var str = 'Apple, Banana, Kiwi';
var res = str.slice(7, 13);

console.log(res);

// If a parameter is negative, the position is counted from the end of the string
// This example slices out a portion of a string from position -12 to position -6

var str = 'Apple, Banana, Kiwi';
var res = str.slice(-12, -6);

console.log(res);

// If you omit the second parameter, the method will slice out the rest of the string

var res = str.slice(7);
console.log(res);

// or, counting from the end

var res = str.slice(-12);
console.log(res);

// substring() is similar to slice()
// The difference is that substring() can't accept negative indexes

var res = str.substring(7, 13);
console.log(res);

// substr() is similar to slice()
// The difference is that the second parameter specifies the length 
// of the extracted part

var res = str.substr(7, 6);
console.log(res);