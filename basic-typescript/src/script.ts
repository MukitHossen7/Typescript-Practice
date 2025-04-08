type addFunction = (a: number, b: number, c?: number) => number;
type nameStringFunction = (a: string, b: string, c?: string) => void;

type user = {
  name: string;
  age: number | string;
  isActive: boolean;
};

//type related data

const add: addFunction = (a, b, c) => {
  return a + b + (c || 0);
};
console.log(add(10, 15, 2));

const add2: addFunction = (a, b, c = 0): number => {
  return a + b + c;
};
console.log(add2(10, 15));

const myFunction: Function = () => {
  console.log("Hello World");
};
myFunction();

const myNames: nameStringFunction = (a, b, c = "true") => {
  console.log(c);
  console.log(`${a} ${b}`);
  // return `${a} ${b}`;
};

myNames("Hello", "World", "false");

const person: user = {
  name: "John",
  age: "30",
  isActive: true,
};
console.log(person);
1;
