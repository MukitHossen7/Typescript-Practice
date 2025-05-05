{
  class Account {
    readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addBalance(amount: number): void {
      this._balance = this._balance + amount;
    }
    getBalance(): string {
      return `My Balance ${this._balance}`;
    }
  }
  class Student extends Account {
    constructor(id: number, name: string, balance: number) {
      super(id, name, balance);
    }
  }
  const raju = new Account(5010, "Raju", 2000);
  const mimStudent = new Student(4522, "Mim", 500);
  console.log(raju.id);
  raju.addBalance(3000);

  console.log(raju.getBalance());
  console.log(mimStudent.getBalance());
}
