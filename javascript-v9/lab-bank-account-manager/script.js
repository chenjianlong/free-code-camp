class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.transactions.push({
      type: "deposit",
      amount: amount
    });

    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(withdrawal) {
    if (withdrawal <= 0 || this.balance < withdrawal) {
      return "Insufficient balance or invalid amount.";
    }

    this.transactions.push({
      type: "withdraw",
      amount: withdrawal
    });

    this.balance -= withdrawal;
    return `Successfully withdrew $${withdrawal}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let res = "Deposits: ";
    this.transactions.forEach((tx) => {
      if (tx.type != "deposit") {
        return;
      }
      res += `${tx.amount},`;
    });

    return res.slice(0, -1);
  }

  listAllWithdrawals() {
    let res = "Withdrawals: ";
    this.transactions.forEach((tx) => {
      if (tx.type != "withdraw") {
        return;
      }
      res += `${tx.amount},`;
    });

    return res.slice(0, -1);
  }
}

const myAccount = new BankAccount();
console.log(myAccount.deposit(200));
console.log(myAccount.deposit(300));
console.log(myAccount.withdraw(200));
console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(50));