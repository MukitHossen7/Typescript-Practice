"use strict";
//type related data
const add = (a, b, c) => {
    return a + b + (c || 0);
};
console.log(add(10, 15, 2));
const add2 = (a, b, c = 0) => {
    return a + b + c;
};
console.log(add2(10, 15));
const myFunction = () => {
    console.log("Hello World");
};
myFunction();
const myNames = (a, b, c = "true") => {
    console.log(c);
    console.log(`${a} ${b}`);
    // return `${a} ${b}`;
};
myNames("Hello", "World", "false");
const person = {
    name: "John",
    age: "30",
    isActive: true,
};
console.log(person);
