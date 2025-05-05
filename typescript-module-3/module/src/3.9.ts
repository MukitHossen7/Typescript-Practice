{
  //Abstraction Interface

  interface Car {
    start(): void;
    stop(): void;
    move(): void;
  }
  class CarVehicle implements Car {
    start(): void {
      console.log("I am starting the car engine");
    }
    stop(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
    test() {
      console.log("i am testing");
    }
  }

  const carVehicle = new CarVehicle();
  //   carVehicle.move();

  abstract class Car2 {
    abstract start(): void;
    abstract stop(): void;
    abstract move(): void;
    test() {
      console.log("i am testing");
    }
  }
  class TotaCar extends Car2 {
    start(): void {
      console.log("I am starting the car engine");
    }
    stop(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
  }
  const totaCar = new TotaCar();
  totaCar.test();
  totaCar.move();
  //
}
