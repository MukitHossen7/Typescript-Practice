{
  function processData(data: unknown) {
    if (typeof data === "string") {
      const str = (data as string).toLocaleUpperCase();
      return str;
    } else if (typeof data === "number") {
      const num = (data as number) * 2;
      return num;
    }
  }
  console.log(processData("hello"));
  console.log(processData(2));
  console.log(processData(true));
}
