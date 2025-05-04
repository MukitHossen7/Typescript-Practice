{
  function handleError(message: string): never {
    throw new Error(message);
  }
  handleError("this is my create error");
}
