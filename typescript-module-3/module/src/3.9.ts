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
  carVehicle.move();
  //
}
