// You may see functions defined and invoked in a slightyly different
// ways. So far we have just created a function like so:
function myFunction() {
    alert('hello');
}

// But you can also create a function with no name (Anonymous Function):
//function(){
    alert('hello');
//}

// You generally use an anonymous function along with an event handler. 
// For example, the following would run the code inside the function 
// whenever the associated button is clicked:
var myButton = document.querySelector('button');

myButton.onclick = function() {
    alert('hello');
}

// You can also assign an anonymous function to be a value of a variable
var myGreeting = function() {
    alert('hello');
}

// This function could now be invoked using:
myGreeting();

// This effectively gives the function a name; you can also assign the 
// function to be the value of multiple variables
var anotherGreeting = function() {
    alert('hello');
}

// This function could now be invoked using either:
myGreeting();
anotherGreeting();      // But don't do this; it's confusing