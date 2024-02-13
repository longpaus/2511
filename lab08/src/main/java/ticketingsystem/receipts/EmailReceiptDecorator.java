package ticketingsystem.receipts;

public class EmailReceiptDecorator implements RecieptDecorator {
    private String email;
    private static final double FEE = 0;
    private RecieptDecorator reciept;

    public EmailReceiptDecorator(String email, RecieptDecorator reciept) {
        this.email = email;
        this.reciept = reciept;
    }

    public String send() {
        String msg = this.reciept.send() + "Sending an email to " + email + "\n";
        return msg;
    }

    public double getCost() {
        return FEE + this.reciept.getCost();
    }
}
