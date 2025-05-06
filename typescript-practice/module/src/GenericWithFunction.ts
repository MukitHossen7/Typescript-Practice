{
  //   const identity = <T>(value: T): T => {
  //     return value;
  //   };
  //   console.log(identity<string>("Hello Mukit"));
  //   console.log(identity<number>(50));
  const identity = <T>(value: T): T => {
    if (typeof value === "string") {
      return value.toLocaleUpperCase() as T;
    } else if (typeof value === "number") {
      return (value * 2) as T;
    } else {
      return value;
    }
  };
  console.log(identity<string>("Hello Mukit"));
  console.log(identity<number>(50));
}
