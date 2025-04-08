"use strict";
// type userInfo = {
//   name: string;
//   age: number | string;
//   email: string;
// };
// let add: (a: number, b: number) => number;
// add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 3)); // Output: 5"));
// const person: userInfo = {
//   name: "John",
//   age: 30,
//   email: "mim@gmail.com",
// };
// console.log(person);
const person = {
    name: "John",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "20"],
    address: {
        street: "123 Main St",
        city: "New York",
    },
};
console.log(person);
const user = (obj) => {
    console.log(`username: ${obj.name}, Email: ${obj.email}`);
};
user({ name: "Raju", email: "raju@gmail.com" });
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 3)); // Output: 6
