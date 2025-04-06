"use strict";
//variable declaration
let name1 = "John Doe";
console.log(name1);
let age = 30;
console.log(age);
age = "20";
console.log(age);
age = true;
console.log(age);
//function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
//object declaration
const person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};
person.greet();
person.name = "Mustafa";
console.log(person);
//array declaration`
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
const names = ["John", "Jane", "Doe"];
names.push("Mustafa");
console.log(names);
const mixedArray = [
    1,
    "John",
    true,
    { name: "Doe" },
    function () {
        console.log(`Hello, my name is`);
    },
];
console.log(mixedArray);
