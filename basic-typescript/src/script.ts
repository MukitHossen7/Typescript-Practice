//variable declaration
let name1: string = "John Doe";
console.log(name1);

let age: number | string | boolean = 30;
console.log(age);
age = "20";
console.log(age);
age = true;
console.log(age);

//function declaration
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));

//object declaration

const person: {
  name: string;
  age: number;
  isStudent: boolean;
  greet: Function;
} = {
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
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

const names: string[] = ["John", "Jane", "Doe"];
names.push("Mustafa");
console.log(names);

const mixedArray: (number | string | boolean | object | Function)[] = [
  1,
  "John",
  true,
  { name: "Doe" },
  function () {
    console.log(`Hello, my name is`);
  },
];
console.log(mixedArray);
