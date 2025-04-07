"use strict";
function add(a, b, c = 0) {
    return a + b + c;
}
console.log(add(10, 15));
const add2 = (a, b, c = 0) => {
    return a + b + c;
};
console.log(add2(10, 15));
const myFunction = () => {
    console.log("Hello World");
};
myFunction();
const myNames = (a, b) => {
    console.log(`${a} ${b}`);
};
myNames("Hello", "World");
