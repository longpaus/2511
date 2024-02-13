package banking;

import java.util.ArrayList;
import java.util.List;

public class LoggedBankAccount extends BankAccount {
    private List<String> log;

    public LoggedBankAccount(double currentBalance) {
        super(currentBalance);
        log = new ArrayList<>();
    }

    public LoggedBankAccount() {
        this(0);
    }

    public void setLog(List<String> log) {
        this.log = log;
    }

    /**
     * withdraw a certain amount from the current balance, and add it to the log
     *
     * @param amount to withdraw from balance
     * @return true if amount withdrawed,else false
     * @pre amount >= 0
     * @post the balance is decreased by the deposited amount or it stays the same,
     *       if amount is withdrawed the withdrawed amount will be added to the log
     */
    public boolean withdraw(double amount) {
        if (super.withdraw(amount)) {
            log.add("withdraw: " + amount);
            return true;
        }
        return false;
    }

    /**
     * deposit a certain amount into the current balance, and add it to the log
     *
     * @param amount to deposit into balance
     * @pre amount >= 0
     * @post balance is increased by the deposited amount,the deposited amount will
     *       be added to the log
     */
    public void deposit(double amount) {
        super.deposit(amount);
        log.add("deposit: " + amount);
    }

}
