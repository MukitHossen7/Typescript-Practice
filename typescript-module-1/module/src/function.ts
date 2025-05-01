//function declaration
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log(add(5, 10));

// Arrow function
const multiplyNumber = (num1: number, num2: number): void => {
  console.log(num1 * num2);
};
// multiplyNumber(5, 10);

// Methods
const math = {
  add: (num1: number, num2: number): number => {
    return num1 + num2;
  },
  multiply: (num1: number, num2: number): void => {
    console.log(num1 * num2);
  },
};
console.log(math.add(5, 10));
math.multiply(5, 10);

const mukitPerson = {
  name: "Mukit",
  age: 25,
  balance: 1000,
  addBalance: function (amount: number): number {
    return this.balance + amount;
  },
};
console.log(mukitPerson);
console.log(mukitPerson.addBalance(5000));

const numberArray: number[] = [1, 2, 3, 4, 5];
const newNumberArray = numberArray.map((num: number): number => num + 2);
console.log(newNumberArray); // [3, 4, 5, 6, 7]
