function bank () {
    let balance = 0;
    let deposit =(amount) => {
        balance += amount;
    }
    let withdrawl = (amount) => {
        balance -= amount;
    }
    let myBalance = () => {
        console.log(balance);
    }
    return {deposit, withdrawl, myBalance}
}
let Anushka = bank();
Anushka.deposit(20000000000);
Anushka.withdrawl(1);
Anushka.myBalance();