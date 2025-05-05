{
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const counter1 = new Counter(); // new memory place create kora
  //   console.log(counter1.increment());
  //   console.log(counter1.increment());
  //   console.log(counter1.increment());
  //   console.log(counter1.increment());
  //   console.log(counter1.increment());
  //   console.log("decrese");
  //   console.log(counter1.decrement());
  //   console.log("sparate");
  //   const counter2 = new Counter(); // new memory place create kora
  //   console.log(counter2.increment());
  //     console.log(counter2.increment());

  //   const counter1 = new Counter(); /// One memory ta store hoba
  //   console.log(counter1.increment());
  //   console.log(counter1.increment());
  //   console.log(counter1.increment());
  //   console.log(counter1.increment());
  //   console.log(counter1.increment());
  //   const counter2 = new Counter();
  //   console.log(counter2.increment());
  //   console.log(counter2.increment());

  // const counter1 = new Counter(); /// One memory ta store hoba
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  // const counter2 = new Counter();
  console.log(Counter.increment());
  console.log(Counter.increment());
}
