{
  class PayMentMethod {
    processPayment(amount: number): void {
      console.log(`Processing payment of ${amount}`);
    }
  }

  class CreditCard extends PayMentMethod {
    processPayment(amount: number): void {
      console.log(`Credit Card Payment of ${amount} completed.`);
    }
  }

  class PayPal extends PayMentMethod {
    processPayment(amount: number): void {
      console.log(`PayPal Payment of ${amount} completed.`);
    }
  }
  class Bkash extends PayMentMethod {
    processPayment(amount: number): void {
      console.log(`Bkash Payment of ${amount} completed.`);
    }
  }
  const makePayment = (method: PayMentMethod, amount: number) => {
    method.processPayment(amount);
  };

  makePayment(new CreditCard(), 1000);
  makePayment(new PayPal(), 2000);
  makePayment(new Bkash(), 3000);
  makePayment(new PayMentMethod(), 3000);

  /// Two away
  const user1 = new CreditCard();
  user1.processPayment(50000);
}
