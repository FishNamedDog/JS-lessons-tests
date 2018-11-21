// Keep in mind that you can call a function from anywhere,
// even inside another function. This is often used as a 
// way to keep code tidy -- if you have a big complex 
// function, it is easier to undersand if you break it 
// down into several sub-functions

function myBigFunction() {
    var myValue;

    subFunction1();
    subFunction2();
    subFunction3();
}

function subFunction1() {
    console.log(myValue);
}

function subFunction2() {
    console.log(myValue);
}

function subFunction3() {
    console.log(myValue);
}
// This causes an error because myValue is not defined inside
// of the function defintions. To make this work, you have
// to pass the value into the function as a parameter

function myBigFunction() {
    var myValue = 1;

    subFunction1(myValue);
    subFunction2(myValue);
    subFunction3(myValue);
}

function subFunction1(value) {
    console.log(value);
}

function subFunction2(value) {
    console.log(value);
}

function subFunction3(value) {
    console.log(value);
}