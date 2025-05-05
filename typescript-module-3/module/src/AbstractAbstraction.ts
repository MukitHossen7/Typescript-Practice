{
  abstract class Payment {
    abstract pay(amount: number): void;
  }
  class CreditCardPayment extends Payment {
    pay(amount: number): void {
      console.log(`Paid ${amount} by credit Card`);
    }
  }
  const user1 = new CreditCardPayment();
  user1.pay(1000);
}
