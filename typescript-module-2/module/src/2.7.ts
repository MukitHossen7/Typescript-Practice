{
  //generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    plane: string;
  };
  type Vehicle2 = "bike" | "car" | "plane";
  type Vehicle3 = keyof Vehicle;
  const owner: Vehicle3 = "car";
  console.log(owner);

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "Raju Islam",
    age: 26,
    email: "raju@gmail.com",
  };
  const car = {
    model: "TASLA",
    year: 2024,
  };
  const result = getPropertyValue(car, "year");
  console.log(result);
  //
}
