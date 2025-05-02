{
  let massage: any = "Hello World! This is a test message.";
  const length = (massage as string).length;
  console.log(length); // Output: 38

  let someData: unknown = 12345;
  let num = someData as number;
  console.log(num * 3);

  const getValue = (): any => {
    return "Hello, TypeScript!";
  };
  let strLength = (getValue() as string).length;
  console.log(strLength);
}
