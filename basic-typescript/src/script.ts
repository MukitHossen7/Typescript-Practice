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
