{
  interface PayMentMethod {
    processPayment(amount: number): void;
  }

  class CreditCard implements PayMentMethod {
    processPayment(amount: number): void {
      console.log(`Credit Card Payment of ${amount} completed.`);
    }
  }

  class PayPal implements PayMentMethod {
    processPayment(amount: number): void {
      console.log(`PayPal Payment of ${amount} completed.`);
    }
  }

  class Bkash implements PayMentMethod {
    processPayment(amount: number): void {
      console.log(`Bkash Payment of ${amount} completed.`);
    }
  }
  const makePayment = (method: PayMentMethod, amount: number) => {
    method.processPayment(amount);
  };
  makePayment(new CreditCard(), 1000);
  makePayment(new PayPal(), 3000);
  makePayment(new Bkash(), 5000);
}
