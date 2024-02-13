package ticketingsystem.receipts;

public class SMSReceiptDecorator implements RecieptDecorator {
    private String phoneNumber;
    private static final double FEE = 0.1;
    private RecieptDecorator reciept;

    public SMSReceiptDecorator(String phoneNumber, RecieptDecorator reciept) {
        this.phoneNumber = phoneNumber;
        this.reciept = reciept;
    }

    public String send() {
        String msg = this.reciept.send() + "Sending an sms to " + phoneNumber + "\n";
        return msg;
    }

    public double getCost() {
        return FEE + this.reciept.getCost();
    }

}
