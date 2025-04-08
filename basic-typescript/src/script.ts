type userInfo = {
  name: string;
  age: number | string;
  email: string;
};
let add: (a: number, b: number) => number;
add = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); // Output: 5"));
const person: userInfo = {
  name: "John",
  age: 30,
  email: "mim@gmail.com",
};
console.log(person);
