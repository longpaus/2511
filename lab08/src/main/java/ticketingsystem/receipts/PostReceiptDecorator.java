package ticketingsystem.receipts;

public class PostReceiptDecorator implements RecieptDecorator {
    private String address;
    private static final double FEE = 0.5;
    private RecieptDecorator reciept;

    public PostReceiptDecorator(String address, RecieptDecorator reciept) {
        this.address = address;
        this.reciept = reciept;
    }

    public String send() {
        String msg = this.reciept.send() + "Sending your mail to " + address + "\n";
        return msg;
    }

    public double getCost() {
        return FEE + this.reciept.getCost();
    }

}
