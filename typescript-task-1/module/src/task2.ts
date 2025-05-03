{
  type MyFunction = (
    para1: string,
    para2: number,
    para3?: "admin" | "user" | "guest"
  ) => void;

  const myFunction: MyFunction = (para1, para2, para3) => {
    const user = {
      name: para1,
      age: para2,
      role: para3,
    };
    console.log(user);
  };
  myFunction("Mukit", 25);
  myFunction("Mukit", 25, "user");
}
