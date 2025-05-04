{
  //   type Narrow = (value: string | number) =>unknown
  const narrowingFunction = (value: string | number): number => {
    if (typeof value === "string") {
      const strLength = (value as string).length;
      return strLength;
    } else {
      const square = (value as number) * 2;
      return square;
    }
  };
  console.log(narrowingFunction("hello mukit"));
  console.log(narrowingFunction(2));
}
