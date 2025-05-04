{
  type ReverseString = (value: string) => string;
  const reverseString: ReverseString = (value) => {
    const result = value.split("").reverse().join("");
    return result;
  };
  const result = reverseString("hello");
  console.log(result);
}
