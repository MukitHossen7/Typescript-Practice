{
  const restFunction = (...value: number[]): number => {
    const sum = value.reduce(
      (prv: number, cur: number): number => prv + cur,
      0
    );
    return sum;
  };
  const result = restFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(result);
}
