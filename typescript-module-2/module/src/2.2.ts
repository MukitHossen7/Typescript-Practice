{
  //
  type Name = string;
  const name: Name = "John Doe";
  console.log(name);

  // function use interface

  type Add = (num1: number, num2: number) => number;
  type Add3 = (a: string, b: string) => string;

  interface Add2 {
    (num1: number, num2: number): number;
  }
  interface Add4 {
    (a: string, b: string): string;
  }
  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };
  console.log(add(10, 5));

  const add3: Add4 = (a, b) => {
    return `Hello Brother ${a} ${b}`;
  };
  console.log(add3("John", "Doe"));

  // object use type alias
  type Person1 = {
    name: string;
    age: number;
    isMarried: boolean;
  };

  interface Person2 {
    name: string;
    age: number;
    isMarried: boolean;
  }
  // type Person = Person2 & { phoneNumber: number };
  interface Person extends Person2 {
    phoneNumber: number;
  }
  const person1: Person = {
    name: "Alice",
    age: 30,
    isMarried: true,
    phoneNumber: 1234567890,
  };
  console.log(person1);

  // Array use interface
  type MixArray = (string | number)[];
  interface MixArray2 {
    [index: number]: string | number;
  }
  const mixArray: MixArray2 = ["apple", "banana", "cherry", 1, 2, 3];
  console.log(mixArray);

  //
}
