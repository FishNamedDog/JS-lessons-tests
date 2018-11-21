// In JavaScript, a function is not a "magical language structure"
// but a special kind of value. The syntax we used before is 
// called a Function Declaration:

function sayHi() {
    alert("Hello");
}

// There is another syntax for creating a function that is
// called a Function Expression

let sayHi = function() {
    alert("Hello");
};
// Here, the function is created and assigned to the variable
// explicitly, like any other value

// We can even print out that value using alert
function sayHi() {
    alert("Hello");
}

alert( sayHi ); // shows the function code
// Note that this final line does not call the function beacuse
// there aren't any parenthesis after sayHi

// We can copy a function to another variable

function sayHi() {  // (1) create
    alert("Hello");
}

let func = sayHi;   // (2) copy

func(); // Hello    // (3) run the copy (it works)
sayHi(); // Hello   //     this still works too (why wouldn't it?)

// Here is what is happening in more detail:
//  1. Function Declaration:
//      - Creates the function and puts it into the variable named sayHi
//  2. Line (2) copies it into the variable func
//  3. Now the function can be called as both sayHi() and func()