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

  type TodoData = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const fetchData = async (): Promise<TodoData> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data: TodoData = await res.json();
    return data;
  };
  const displayData = async () => {
    const data = await fetchData();
    console.log(data);
  };
  displayData();

  //
}
