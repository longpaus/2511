package banking;

public class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public BankAccount() {
        this(0);
    }

    public double getBalance() {
        return balance;
    }

    /**
     * withdraw a certain amount from the current balance
     *
     * @param amount to withdraw from balance
     * @return true if amount withdrawed,else false
     * @pre amount >= 0
     * @post the balance is decreased by the deposited amount or it stays the same
     */
    public boolean withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }

    /**
     * deposit a certain amount into the current balance
     *
     * @param amount to deposit into balance
     * @pre amount >= 0
     * @post balance is increased by the deposited amount
     */
    public void deposit(double amount) {
        balance += amount;
    }

}
