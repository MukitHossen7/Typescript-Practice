// console.log("Hello, world!");
// const greeting = "Hello, TypeScript!";
// console.log(greeting);

// const country = () => {
//   console.log("Bangladesh");
// };
// country();

// const person = {
//   name: "John Doe",
//   age: 30,
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };
// person.greet();
// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

let name1 = "John Doe";
console.log(name1);
name1 = "Jane Smith";
console.log(name1);

let age = 30;
console.log(age);
// This will cause a TypeScript error

function multiply(x: number, y: number): number {
  return x * y;
}
console.log(multiply(5, 10)); // Output: 50

const fruits = ["apple", "banana", "orange"];
console.log(fruits);
fruits.push("grape");
console.log(fruits);

const number = [1, 2, 3, 4, 5];
console.log(number);
number.push(6);
console.log(number);
// This will cause a TypeScript error
