{
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }
  //   const counter1 = new Counter();
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());

  const counter2 = new Counter();
  console.log(Counter.increment());
  console.log(Counter.increment());
  const counter3 = new Counter();
  console.log(Counter.increment());
}
