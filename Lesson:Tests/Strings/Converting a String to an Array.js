// A string can be converted to an array with
// the split() method

var txt = 'a,b,c,d,e';          // String
//console.log(txt.split(","));    // Split on commas
//console.log(txt.split(" "));    // Split on spaces
//console.log(txt.split("|"));    // Split on pipe

// If the separator is omitted, the returned array
// will contain the whole string in index[0]
// If the separator is "", the returned array will
// be an array of single characters

var txt = 'Hello';          // String
console.log(txt.split("")); // Split in characters