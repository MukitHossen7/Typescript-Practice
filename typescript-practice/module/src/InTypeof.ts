{
  type User = {
    name: string;
    age: number;
  };
  type ApiError = {
    message: string;
    code: number;
  };
  type SearchResult = User | ApiError;
  const handleSearch = (result: SearchResult): void => {
    if ("name" in result) {
      console.log(`User found: ${result.name}, Age: ${result.age}`);
    } else {
      console.log(`Error occurred: ${result.message}, code: ${result.code}`);
    }
  };
  handleSearch({ name: "Raju", age: 28 });
  //   handleSearch({ message: "This is create error", code: 400 });

  const printValue = (value: String | Number): string | number | undefined => {
    if (typeof value === "string") {
      return `You give me ${value}`;
    } else if (typeof value === "number") {
      return value * value;
    }
  };
  console.log(printValue(2));
  console.log(printValue("Hello"));
  //   console.log(printValue(boolean));
}
