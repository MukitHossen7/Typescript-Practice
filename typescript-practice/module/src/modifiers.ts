{
  class Car {
    brand: string;
    model: string;
    protected year: number;
    color: string;
    constructor(brand: string, model: string, year: number, color: string) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
    }
    startEngine() {
      console.log("Engine started!");
    }
    stopEngine() {
      console.log("Engine stopped! " + this.year);
    }
  }
  class Honda extends Car {
    constructor(brand: string, model: string, year: number, color: string) {
      super(brand, model, year, color);
    }
    test() {
      console.log(this.year);
    }
  }
  const honda = new Car("Honda", "honda2015", 2015, "red");

  console.log(honda);
  console.log(honda.stopEngine());
}
