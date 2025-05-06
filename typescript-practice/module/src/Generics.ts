{
  interface Person<T, Y> {
    name: string;
    age: number;
    isMarried: Y;
    address: T;
  }
  const person: Person<{ capital: string }, boolean> = {
    name: "Mukit",
    age: 25,
    address: {
      capital: "dhaka",
    },
    isMarried: true,
  };
  console.log(person);
  interface Box<T> {
    value: T;
  }
  const stringBox: Box<string> = { value: "Hello Mukit" };
  console.log(stringBox);
  const numberBox: Box<number> = { value: 52 };
  console.log(numberBox);
}
