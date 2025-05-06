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
    get startEngine() {
      return "Engine started!";
    }
    stopEngine() {
      console.log("Engine stopped! " + this.year);
    }
    set hondaPrice(price: number) {
      console.log(`This is Honda Price ${price}`);
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

  console.log(honda.startEngine);
  honda.hondaPrice = 200000;
  // console.log(honda.stopEngine());
}
