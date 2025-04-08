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

class Person {
  private name: string;
  private age: number | string;
  private country: string;
  constructor(name: string, age: number | string, country: string) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  user(): string {
    return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
  }
}
const person1 = new Person("John", "30", "USA");
console.log(person1);
const person2 = new Person("Jane", 25, "Canada");
console.log(person2);
