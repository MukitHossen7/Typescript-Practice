"use strict";
console.log("Hello, world!");
const greeting = "Hello, TypeScript!";
console.log(greeting);
const country = () => {
    console.log("Bangladesh");
};
country();
const person = {
    name: "John Doe",
    age: 30,
    greet: function () {
        console.log("Hello, " + this.name);
    },
};
person.greet();
console.log(person);
