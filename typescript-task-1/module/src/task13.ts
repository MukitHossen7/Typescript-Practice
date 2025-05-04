{
  type MixArr = string | number | null | undefined | boolean;
  // const genericsFunction = <T extends MixArr>(values: T) => {
  //   console.log(values);
  //   const result = values.filter(
  //     (item, index) => values.indexOf(item) === index
  //   );
  //   return result;
  // };
  // const result = genericsFunction<MixArr>([
  //   "Mukit",
  //   "Ranju",
  //   true,
  //   false,
  //   5,
  //   8,
  //   null,
  //   undefined,
  //   "Mukit",
  //   "Raju",
  //   "sifat",
  //   "Raju",
  // ]);
  // console.log(result);
  //   const genericsFunction2 = <T extends string[]>(values: T) => {
  //     const result = values.filter(
  //       (item, index) => values.indexOf(item) === index
  //     );
  //     return result;
  //   };
  //   const result2 = genericsFunction2<string[]>([
  //     "apple",
  //     "banana",
  //     "apple",
  //     "orange",
  //   ]);
  //   console.log(result2);

  //   const genericsFunction3 = <T extends number[]>(values: T) => {
  //     const result = values.filter(
  //       (item, index) => values.indexOf(item) === index
  //     );
  //     return result;
  //   };
  //   const result3 = genericsFunction3<number[]>([1, 2, 2, 3, 4, 4, 5]);
  //     console.log(result3);

  function removeDuplicates<T>(values: T[]): T[] {
    const result = values.filter(
      (item, index) => values.indexOf(item) === index
    );
    return result;
  }
  const check = removeDuplicates<number>([1, 2, 2, 3, 4, 4, 5]);
  const check2 = removeDuplicates<string>([
    "apple",
    "banana",
    "apple",
    "orange",
  ]);
  const check3 = removeDuplicates<boolean>([true, false, true]);
  const check4 = removeDuplicates<MixArr>([
    "Mukit",
    "Ranju",
    true,
    false,
    5,
    8,
    null,
    undefined,
    "Mukit",
    "Raju",
    "sifat",
    "Raju",
  ]);

  console.log(check);
  console.log(check2);
  console.log(check3);
  console.log(check4);
}
