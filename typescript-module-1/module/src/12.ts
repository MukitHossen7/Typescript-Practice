{
  // unknown type
  const checkValue = (value: unknown) => {
    if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else if (typeof value === "number") {
      console.log(value * 2);
    } else if (typeof value === "boolean") {
      console.log(value ? "true" : "false");
    } else {
      console.log("Unknown type");
    }
  };
  checkValue(null);

  //Never type
  //   const throwError = (message: string): never => {
  //     throw new Error(message);
  //   };
  //   console.log(throwError("This is an error message"));
  //   const infiniteLoop = (): never => {
  //     while (true) {
  //       console.log("i am infinite");
  //     }
  //   };
  //   console.log(infiniteLoop());
}
