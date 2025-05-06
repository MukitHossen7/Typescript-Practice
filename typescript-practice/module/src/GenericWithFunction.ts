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

  const arrayGeneric = <T>(arr: T[]) => {
    console.log(arr);
    arr.forEach((value) => console.log(value));
  };
  arrayGeneric<string>(["Mukit", "Araf", "Nayeem"]);
  arrayGeneric<number>([1, 2, 3, 4, 5]);
}
