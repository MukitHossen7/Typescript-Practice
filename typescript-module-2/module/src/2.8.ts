{
  // Asynchronous Typescript
  type AsyncUser = {
    name: string;
    age: number;
  };
  const asynchronousFunction = (): Promise<AsyncUser> => {
    return new Promise<AsyncUser>((resolve, reject) => {
      const data: AsyncUser = { name: "mukit", age: 24 };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };
  const showData = async () => {
    const data: AsyncUser = await asynchronousFunction();
    console.log(data);
  };

  showData();

  //Fetch Real Data

  //
}
