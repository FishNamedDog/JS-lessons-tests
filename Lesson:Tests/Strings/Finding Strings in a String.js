// The indexOf() method returns the index of (the position of) the first 
// occurrence of a specified text in a string

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf('locate');

console.log(pos);

// The lastIndexOf() method returns the index of the last occurrence
// of a specified text in a string

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf('locate');

console.log(pos);

// Both indexOf(), and lastIndexOf() return -1 if the text is not found

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf('John');

console.log(pos);

// Both methods accept a second parameter as the starting position
// for the search

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf('locate', 15);

console.log(pos)

// Searching for a String in a String
// The search() method searches a string for a specified value
// and returns the position of the match

var str = "Please locate where 'locate' occurs!";
var pos = str.search('locate');

console.log(pos);