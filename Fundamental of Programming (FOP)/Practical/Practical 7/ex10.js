class BankAccount {
    constructor(name, savings) {
      this.name = name;
      this.savings = savings;
    }
  
    getBalance() {
      return this.name + " has $" + this.savings.toFixed(2);
    }
  }
  
  let account1 = new BankAccount("Oliver Twist", 1000.0);
  let account2 = new BankAccount("Richie Rich", 100000.0);
  
  console.log(account1.getBalance());
  console.log(account2.getBalance());