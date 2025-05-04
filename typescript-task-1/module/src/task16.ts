{
  const objFunction = <T, Y extends keyof T>(obj: T, value: Y): T[Y] => {
    const result = obj[value];
    return result;
  };

  const obj = {
    name: "Raju Islam",
    age: 25,
    isMarried: false,
  };
  const name = objFunction<
    { name: string; age: number; isMarried: boolean },
    "name"
  >(obj, "name");
  console.log(name);
  const age = objFunction<
    { name: string; age: number; isMarried: boolean },
    "age"
  >(obj, "age");
  console.log(age);
  //   const none = objFunction<
  //     { name: string; age: number; isMarried: boolean },
  //     "none"
  //   >(obj, "none");
  //   console.log(none);
}
