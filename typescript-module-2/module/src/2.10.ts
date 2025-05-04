{
  //
  type Area = {
    width: string;
    height: number;
  };

  // type AreaString = {
  //   [key in keyof AreaNumber]: string;
  // };
  type TypeMapped<T> = {
    [key in keyof T]: T[key];
  };
  // type AreaObj = TypeMapped<AreaNumber>;
  const areaObj: TypeMapped<Area> = {
    width: "200",
    height: 500,
  };
  console.log(areaObj);
  //
}
