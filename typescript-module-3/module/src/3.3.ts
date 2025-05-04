{
  //use typeof guard
  const typeofFunction = (value: string | number): string | number => {
    if (typeof value === "string") {
      return value.toLocaleUpperCase();
    } else {
      return value * value;
    }
  };
  console.log(typeofFunction("Hello"));
  console.log(typeofFunction(5));

  type CheckValue = string | number;
  const typeofFunction2 = (
    value1: CheckValue,
    value2: CheckValue
  ): CheckValue => {
    if (typeof value1 === "number" && typeof value2 === "number") {
      return value1 + value2;
    } else {
      return value1.toString() + value2.toString();
    }
  };
  console.log(typeofFunction2(2, 8));
  console.log(typeofFunction2(2, "8"));
  //
}
