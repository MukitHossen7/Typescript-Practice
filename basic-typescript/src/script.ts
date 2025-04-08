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

// class Person {
//   name: string;
//   age: number | string;
//   country: string;
//   constructor(name: string, age: number | string, country: string) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
//   user(): string {
//     return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
//   }
// }
// const person1 = new Person("John", "30", "USA");
// console.log(person1);
// console.log(person1.user());
// const person2 = new Person("Jane", 25, "Canada");
// console.log(person2);
// console.log(person2.user());

// const userArray: Person[] = [person1, person2];
// userArray.push(person1);
// userArray.push(person2);
// console.log(userArray);
// import { Person } from "./Person.js";

// const person1 = new Person("John", "30", "USA");
// console.log(person1);
// const person2 = new Person("Jane", 25, "Canada");
// console.log(person2);

// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   hobbies: string[];
//   address: {
//     street: string;
//     city: string;
//   };
// }
import { Person } from "./Interfaces.js";
const objectFunction = (obj: Person) => {
  const output = `Name: ${obj.name}, Age: ${obj.age}, Is Student: ${
    obj.isStudent
  }, Hobbies: ${obj.hobbies.join(", ")}, Address: ${obj.address.street}, ${
    obj.address.city
  }`;
  console.log(output);
};
objectFunction({
  name: "John",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "gaming"],
  address: {
    street: "123 Main St",
    city: "New York",
  },
});

console.log("Hello World");
