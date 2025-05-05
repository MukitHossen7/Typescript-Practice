{
  interface Payment {
    pay(amount: number): void;
  }
  class CreditCardPayment implements Payment {
    pay(amount: number): void {
      console.log(`Paid ${amount} by Credit Card`);
    }
  }
  const user1 = new CreditCardPayment();
  user1.pay(500);
}
