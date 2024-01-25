
// swebsBank is serves as the object/parent container here 
class swebsBank{
    constructor( accountNo, accountName, balance = 0 ) {
        this.accountNo = accountNo;
        this.accountName = accountName;
        this.balance = balance;
    }

    transfer( amount, transferAccount){
        if (amount>this.balance) return "Transfer Error ,(Insufficient Fund)";
        this.balance=this.balance - amount;
        transferAccount.balance = transferAccount.balance + amount;
    }

    // code to make deposit

     deposit(amount) {
        this.balance = this.balance + amount;
        return this.balance
     }

      // code to make withrawal

     withdraw(amount) { 
        if (amount > this.balance ) return "insufficient fund";
        this.balance = this.balance - amount; 
        return this.balance

     }

     getAccount() {
        return this.accountNo;
    }

}

// creating a new account for a new user




const fimiAccount = new swebsBank(swebsBank.getAccount, "Fimi", 5000);
console.log(
    "Account Name:" +
    fimiAccount.accountName +
    ";" +
    fimiAccount.balance
);

// depositing method
console.log(fimiAccount.deposit(1500))


// withdrawal method
// console.log(fimiAccount.withdraw(3000))

// console.log(fimiAccount.balance)


const favourAccount = new swebsBank(435647586, "favour win" ,1000);
console.log(fimiAccount.transfer(3000, favourAccount));
console.log(favourAccount.balance);
// account generating 




