{
  interface Payment {
    pay(amount: number): void;
  }
  class CreditCardPayment implements Payment {
    pay(amount: number): void {
      console.log(`Paid ${amount} by Credit Card`);
    }
    test() {
      console.log("this is ");
    }
  }
  const user1 = new CreditCardPayment();
  user1.pay(500);
  const user2 = new CreditCardPayment();
  user2.pay(1000);
}
