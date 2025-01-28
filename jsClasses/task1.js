
let balance = 1000;

function atmMachine() {
  for (;;) {
    const menu = `
Welcome to the ATM Machine
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
Please enter your choice:`;

    
    const choice = parseInt(prompt(menu));

    switch (choice) {
      case 1: 
        alert(`Your current balance is: $${balance}`);
        break;

      case 2:
        const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
        if (depositAmount > 0) {
          balance += depositAmount;
          alert(`Deposit successful. Your new balance is: $${balance}`);
        } else {
          alert("Invalid amount. Please try again.");
        }
        break;

      case 3:
        const withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
        if (withdrawAmount > 0 && withdrawAmount <= balance) {
          balance -= withdrawAmount;
          alert(`Withdrawal successful. Your new balance is: $${balance}`);
        } else if (withdrawAmount > balance) {
          alert("Insufficient funds. Please try again.");
        } else {
          alert("Invalid amount. Please try again.");
        }
        break;

      case 4: 
        alert("Thank you for using the ATM. Goodbye!");
        return;

      default:
        alert("Invalid choice. Please select a valid option(1-4).");
    }
  }
}


atmMachine();
