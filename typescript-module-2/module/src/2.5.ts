{
  //function with generic

  const createArray = <T>(para: T): T[] => {
    return [para];
  };
  const value = createArray<string>("John Doe");
  console.log(value);
  const value1 = createArray<number>(12345);
  console.log(value1);
  const value2 = createArray<boolean>(true);
  console.log(value2);

  //   const add = <T extends number, Y extends number>(
  //     num1: T,
  //     num2: Y
  //   ): number => {
  //     return num1 * num2;
  //   };
  //   console.log(add<number, number>(10, 5));

  const add = <T>(num1: T) => {
    return num1;
  };
  const add1 = add<number>(10);
  console.log(add1);
  const add2 = add<string>("John Doe");
  console.log(add2);

  const doubleArray = <T extends number>(arr: T[]) => {
    const result = arr.map((item) => item * 2);
    console.log(result);
  };
  doubleArray<number>([1, 2, 3, 4, 5]);

  const logItems = <T>(item: T[]): void => {
    item.forEach((item) => {
      console.log(item + " hello");
    });
  };
  logItems<string>(["apple", "banana", "cherry"]);

  //
}
