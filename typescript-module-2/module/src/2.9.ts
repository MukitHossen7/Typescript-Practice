{
  //
  type checkString<T> = T extends string ? "Yes" : "No";
  type A = checkString<string>;
  type B = checkString<boolean>;

  type a1 = number;
  type b1 = undefined;
  type x = a1 extends null ? "true" : "false";

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };
  type CheckVehicle<T> = T extends keyof Sheikh ? "Yes" : "No";
  type Has = CheckVehicle<"ship">;
  //
}
