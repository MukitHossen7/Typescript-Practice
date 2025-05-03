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

  //
}
