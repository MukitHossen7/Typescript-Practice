{
  // type MixArray = (string | number | boolean)[];
  // const mixArray: MixArray = ["Mukit", 15, true, "Bangladesh", 25, false];
  //   console.log(mixArray);
  //   const tupleArr: [number, string, boolean, string] = [
  //     15,
  //     "Mukit",
  //     true,
  //     "Bangladesh",
  //   ];
  //   console.log(tupleArr);
  //   type Person = {
  //     name: "John Doe the";
  //     age: number | string;
  //     email: string;
  //     phoneNumber?: string;
  //   };
  //   const person: Person = {
  //     name: "John Doe the",
  //     age: "25",
  //     email: "john@gmail.com",
  //   };
  //   console.log(person);

  //   type Add = (a: number, b: number) => number;

  //   const add: Add = (a, b) => {
  //     return a + b;
  //   };
  //   add(5, 10); // 15

  //   function add1(a: number, b: number): number {
  //     return a + b;
  //   }
  //     console.log(add(5, 10)); // 15
  // const age: number | string = 25;

  type A = {
    name: string;
    age: number;
  };
  type B = {
    name: string;
    age: number;
  };
  const one: A = {
    name: "Mukit",
    age: 25,
  };
  const two: B = {
    name: "Raju",
    age: 20,
  };
  type oneTow = A & B;
}
