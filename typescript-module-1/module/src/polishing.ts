{
  type Person1 = {
    name: string;
    age: number;
  };
  type Person2 = {
    name: string;
    email: string;
  };

  type Person = Person1 & Person2;
  const person: Person = {
    name: "John Doe",
    age: 30,
    email: "john@gmail.com",
  };
  console.log(person);

  type MixArray = (string | number)[];
  const mixArray: MixArray = ["dhello"];
  console.log(mixArray);

  const topleArr: [number, string] = [25, "Mukit"];
  console.log(topleArr);
}
