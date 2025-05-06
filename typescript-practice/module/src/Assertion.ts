{
  const getUserInfo = (user: unknown) => {
    const userName = (user as { name: string }).name;
    const userAge = (user as { age: number }).age;
    console.log(`User Name is ${userName}.Age : ${userAge}`);
  };
  //   getUserInfo({ name: "Mukit", age: 22 });

  const value: unknown = 2;
  const square = (value as number) * 2;
  //   console.log(square);

  const printValue = (value: string | number): void => {
    if (typeof value === "string") {
      console.log(value.length);
    } else {
      console.log(value * value);
    }
  };
  printValue(10);
}
