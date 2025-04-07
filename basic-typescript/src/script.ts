function add(a: number, b: number, c: number = 0): number {
  return a + b + c;
}
console.log(add(10, 15));

const add2 = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
};
console.log(add2(10, 15));

const myFunction: Function = () => {
  console.log("Hello World");
};
myFunction();

const myNames = (a: string, b: string) => {
  console.log(`${a} ${b}`);
};

myNames("Hello", "World");
