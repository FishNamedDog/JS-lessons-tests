// We've made use of functions built in to the browser a lot.
// Every time we manipulated a text string...

var myText = 'I am a string';
console.log(myText);
var newString = myText.replace('string', 'sausage');
console.log(newString);
// The replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

// Every time we manipulated an array...

var myArray = ['I', 'love', 'chocolate', 'frogs'];
console.log(myArray);
var madeAString = myArray.join(' ');
console.log(madeAString);
// The join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

// Every time we generated a random number...

var myNumber = Math.random();
console.log(myNumber);
// The random() function generates a random
// number tween 0 and 1, and returns that
// number