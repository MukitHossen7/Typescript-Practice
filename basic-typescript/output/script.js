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
class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    user() {
        return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
    }
}
const person1 = new Person("John", "30", "USA");
console.log(person1);
console.log(person1.user());
const person2 = new Person("Jane", 25, "Canada");
console.log(person2);
console.log(person2.user());
const userArray = [];
userArray.push("John");
userArray.push("Jane");
userArray.push(30);
console.log(userArray);
