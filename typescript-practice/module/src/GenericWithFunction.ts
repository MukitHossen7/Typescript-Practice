{
  //   const identity = <T>(value: T): T => {
  //     return value;
  //   };
  //   console.log(identity<string>("Hello Mukit"));
  //   console.log(identity<number>(50));
  //   const identity = <T>(value: T): T => {
  //     if (typeof value === "string") {
  //       return value.toLocaleUpperCase() as T;
  //     } else if (typeof value === "number") {
  //       return (value * 2) as T;
  //     } else {
  //       return value;
  //     }
  //   };
  //   console.log(identity<string>("Hello Mukit"));
  //   console.log(identity<number>(50));

  //   const arrayGeneric = <T>(arr: T[]) => {
  //     console.log(arr);
  //     arr.forEach((value) => console.log(value));
  //   };
  //   arrayGeneric<string>(["Mukit", "Araf", "Nayeem"]);
  //   arrayGeneric<number>([1, 2, 3, 4, 5]);

  const processMixArray = <T>(arr: T[]) => {
    arr.forEach((value) => {
      if (typeof value === "string") {
        console.log(`String: ${value.toLocaleUpperCase()}`);
      } else if (typeof value === "number") {
        console.log(`Number: ${value * 2}`);
      } else if (typeof value === "boolean") {
        console.log(`${value ? "Yes" : "No"}`);
      }
    });
  };
  type MixArray = string | number | boolean;
  processMixArray<MixArray>(["Mukit", 25, true, "TypeScript", false, 100]);
}
